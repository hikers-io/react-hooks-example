class ConverteModel {
  public date: string;

  public rates: any;

  constructor(date: string = '', rates: {string?: number} = {}) {
    this.date = date;
    this.rates = rates;
  }
}

export default ConverteModel;
