import axios from 'axios'


const BASE_ENDPOINT = "http://api.exchangeratesapi.io";
let baseCurrency = "BRL";

function getExchange(curList: Array<string>, baseCur=baseCurrency) {
  let idx = curList.indexOf(baseCur);
  if (idx > -1) {
    curList = curList.splice(idx);
  }

  return axios.get(`${BASE_ENDPOINT}/latest?base=${baseCur}&symbols=${curList.join(',')}`);
}


export default getExchange;
