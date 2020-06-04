import { useState } from 'react';
import CurrencyConverter from '../../apis/currencyConverter';
import ConverteModel from './converter-model';


class ConverterPresenter {
  private _upCur: string;
  private _downCur: string;
  private _setUpCur: React.Dispatch<React.SetStateAction<string>>;
  private _setDownCur: React.Dispatch<React.SetStateAction<string>>;

  private _walUpCoin: number;
  private _walDownCoin: number;
  private _setWalUpCoin: React.Dispatch<React.SetStateAction<number>>;
  private _setWalDownCoin: React.Dispatch<React.SetStateAction<number>>;


  public curApi: CurrencyConverter;
  public cmodel: ConverteModel;


  constructor() {
    this.cmodel = new ConverteModel();

    this.curApi = new CurrencyConverter('BRL');
    this.curApi.getExchange()
      .then((data: any) =>{
        this.cmodel = new ConverteModel(data.data.date, data.data.rates);
        console.log(this.cmodel);
      });

    [this._upCur, this._setUpCur] = useState('BRL');
    [this._downCur, this._setDownCur] = useState('USD');
    [this._walUpCoin, this._setWalUpCoin] = useState(102.54);
    [this._walDownCoin, this._setWalDownCoin] = useState(132.12);
  }


  public set upCur(value: string) {
    if (value in this.cmodel.rates) {
      this._setUpCur(value);
    }
  }

  public get upCur() {
    return this._upCur;
  }

  public set downCur(value: string) {
    if (value in this.cmodel.rates) {
      this._setDownCur(value);
    }
  }

  public get downCur() {
    return this._downCur;
  }
}

export default ConverterPresenter;
