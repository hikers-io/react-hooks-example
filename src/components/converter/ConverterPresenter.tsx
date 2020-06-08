import { useContext } from 'react';
import CurrencyConverter from '../../apis/currencyConverter';
import ConverteModel from './ConverterModel';
import { ExchangeContext } from '../../providers/ExchangeProvider';


class ConverterPresenter {
  private state: any;
  private dispatch: any;

  public curApi: CurrencyConverter;

  public cmodel: ConverteModel;


  constructor() {
    // instance model
    this.cmodel = new ConverteModel();

    // init context
    const { state, dispatch }: any = useContext(ExchangeContext);
    this.state = state;
    this.dispatch = dispatch;

    // instance api and fill o model
    this.curApi = new CurrencyConverter('BRL');
    let waiting = this.curApi.getExchange()
    waiting.then((data: any) => {
      this.cmodel = new ConverteModel(data.data.date, data.data.rates);
      console.log(this.cmodel);
      this.dispatch({
        type: 'REFRESH_RATES',
        payload: this.cmodel.rates
      });
    });
  }

  // states related public methods


  // business logic
  public convert(
    fromCur: string,
    toCur: string,
    value: number,
    setter: any=undefined
  ) {
    let converted: number;

    converted = this.cmodel.rates[toCur] * value / this.cmodel.rates[fromCur];
    console.log('converted', converted);
    if(setter) {
      setter(converted);
    }

    return converted;
  }

}

export default ConverterPresenter;
