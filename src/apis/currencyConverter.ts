import axios from 'axios';


class CurrencyConverter {
  static BASE_ENDPOINT = 'http://api.exchangeratesapi.io';

  private baseCurrency: string;

  constructor(baseCurrency = 'BRL') {
    this.baseCurrency = baseCurrency;
  }

  getExchange(curList: Array<string> = []) {
    const idx = curList.indexOf(this.baseCurrency);

    let currencies;

    if (idx > -1) {
      currencies = curList.splice(idx);
    } else {
      currencies = curList;
    }

    let fullrequest = `${CurrencyConverter.BASE_ENDPOINT}/latest?base=${this.baseCurrency}`;
    if (curList.length > 0) {
      fullrequest += `&symbols=${currencies.join(',')}`;
    }

    console.log('fullrequest', fullrequest);
    return axios.get(`https://cors-anywhere.herokuapp.com/${fullrequest}`);
  }
}


export default CurrencyConverter;
