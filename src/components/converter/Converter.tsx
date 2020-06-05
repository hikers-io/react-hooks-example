import React from 'react';
import './converter.css';
import ConverterPresenter from './ConverterPresenter';
import { Link } from 'react-router-dom';

let presenter: ConverterPresenter;


function listCur(classToName: string, up: boolean) {
  return (
    <ul className={`${classToName}`}>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'BRL' : presenter.downCur = 'BRL')
          }
          className="spanLink"
        >
          BRL
        </span>
      </li>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'USD' : presenter.downCur = 'USD')
          }
          className="spanLink"
        >
          USD
        </span>
      </li>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'JPY' : presenter.downCur = 'JPY')
          }
          className="spanLink"
        >
          JPY
        </span>
      </li>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'RUB' : presenter.downCur = 'RUB')
          }
          className="spanLink"
        >
          RUB
        </span>
      </li>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'NZD' : presenter.downCur = 'NZD')
          }
          className="spanLink"
        >
          NZD
        </span>
      </li>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'EUR' : presenter.downCur = 'EUR')
          }
          className="spanLink"
        >
          EUR
        </span>
      </li>
      <li>
        <span
          onClick={
            () => (up ? presenter.upCur = 'GBP' : presenter.downCur = 'GBP')
          }
          className="spanLink"
        >
          GBP
        </span>
      </li>
    </ul>
  );
}

function Converter() {
  if (!presenter) {
    presenter = new ConverterPresenter();
  }

  return (
    <div className="converter">
      <div className="gridTemplate gridLayout">
        <div className="head">
          <div className="topheader">Client Converter</div>
        </div>

        <nav className="siteNavigation">
          <ul>
            <li><Link to="/wallet">Wallet</Link></li>
            <li>
              <span>From</span>
              {listCur('dropdown_fromCur', true)}
            </li>
            <li>
              <span>To</span>
              {listCur('dropdown_fromCur', false)}
            </li>
          </ul>
        </nav>

        <div className="content">
          <div className="moneyBox">
            <span className="moneyBoxTitle">Wallet</span>
            <span className="money">
              {presenter.upCur}
              {' '}
              56,12
              {/* {presenter.value1} */}
            </span>
            <span className="money">
              {presenter.downCur}
              {' '}
              12,12
              {/* {presenter.value2} */}
            </span>
          </div>

          <div className="converterBox">
            <span className="converterBoxField">
              BRL
              <input type="number" step="0.01" />
            </span>
            <span className="converterBoxField">
              USD
              <input type="number" step="0.01" />
            </span>
            <button type="button" className="buyBtn">Buy</button>
          </div>
        </div>
        <div>
          {/* {presenter.curApi} */}
        </div>
      </div>
    </div>
  );
}


export default Converter;
