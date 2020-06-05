import { useState, useContext } from 'react';
import CurrencyConverter from '../../apis/currencyConverter';
import ConverteModel from './ConverterModel';
import { ExchangeContext } from '../../providers/ExchangeProvider';


class ConverterPresenter {
  private _walUpCoin: number;

  private _walDownCoin: number;

  private _setWalUpCoin: React.Dispatch<React.SetStateAction<number>>;

  private _setWalDownCoin: React.Dispatch<React.SetStateAction<number>>;


  public curApi: CurrencyConverter;

  public cmodel: ConverteModel;

  private state: any;

  private dispatch: any;


  constructor() {
    // instance model
    this.cmodel = new ConverteModel();

    // instance api and fill o model
    this.curApi = new CurrencyConverter('BRL');
    this.curApi.getExchange()
      .then((data: any) => {
        this.cmodel = new ConverteModel(data.data.date, data.data.rates);
        console.log(this.cmodel);
      });

    // instance state control
    const { state, dispatch } = useContext(ExchangeContext) as any;
    this.state = state;
    this.dispatch = dispatch;

    // initialize local state variables
    [this._walUpCoin, this._setWalUpCoin] = useState(102.54);
    [this._walDownCoin, this._setWalDownCoin] = useState(132.12);
  }

  // view interactions
  public changeCur(up: boolean, newcur: string) {
    this.dispatch({
      type: up ? 'CHANGE_UP_CUR' : 'CHANGE_DOWN_CUR',
      payload: newcur,
    });
  }


  // state variable access
  public set upCur(value: string) {
    if (value in this.cmodel.rates) {
      this.changeCur(true, value);
    }
  }

  public get upCur() {
    return this.state.upCurrency;
  }

  public set downCur(value: string) {
    if (value in this.cmodel.rates) {
      this.changeCur(false, value);
    }
  }

  public get downCur() {
    return this.state.downCurrency;
  }
}

export default ConverterPresenter;
