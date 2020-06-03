import { useState } from 'react';

class ConverterPresenter {
  coin1: string;
  setCoin1: React.Dispatch<React.SetStateAction<string>>;
  coin2: string;
  setCoin2: React.Dispatch<React.SetStateAction<string>>;
  value1: number;
  setValue1: React.Dispatch<React.SetStateAction<number>>;
  value2: number;
  setValue2: React.Dispatch<React.SetStateAction<number>>;

  constructor() {
    [this.coin1, this.setCoin1] = useState('BRL');
    [this.coin2, this.setCoin2] = useState('USD');
    [this.value1, this.setValue1] = useState(102.54);
    [this.value2, this.setValue2] = useState(132.12);
  }
}

export default ConverterPresenter
