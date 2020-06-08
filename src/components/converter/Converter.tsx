import React, { useState } from 'react';
import './converter.css';
import { Link } from 'react-router-dom';
import ConverterPresenter from './ConverterPresenter';

let presenter: ConverterPresenter;


function listCur(classToName: string, up: boolean) {
  return (
    <ul className={`${classToName}`}>
      <li>
        <button
          type="button"
          onClick={
            () => { 'BRL' }
          }
          className="spanLink"
        >
          BRL
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={
            () => { 'USD' }
          }
          className="spanLink"
        >
          USD
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={
            () => { 'JPY' }
          }
          className="spanLink"
        >
          JPY
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={
            () => { 'RUB' }
          }
          className="spanLink"
        >
          RUB
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={
            () => { 'NZD' }
          }
          className="spanLink"
        >
          NZD
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={
            () => { 'EUR' }
          }
          className="spanLink"
        >
          EUR
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={
            () => { 'GBP' }
          }
          className="spanLink"
        >
          GBP
        </button>
      </li>
    </ul>
  );
}

function Converter() {
  // set presenter if needed
  if (!presenter) {
    presenter = new ConverterPresenter();
  }

  // set useState variables
  const [curUp, setcurUp] = useState('BRL');
  const [curDown, setcurDown] = useState('USD');
  const [walCurUp] = useState(101.21);
  const [walCurDown] = useState(110.34);
  const [convertCurUp, setConvertCurUp] = useState(10);
  const [convertCurDown, setConvertCurDown] = useState(0);

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
              {curUp}
              {' '}
              {walCurDown}
            </span>
            <span className="money">
              {curDown}
              {' '}
              {walCurUp}
            </span>
          </div>

          <div className="converterBox">
            <span className="converterBoxField">
              {curUp}
              <input type="number" step="0.01" value={convertCurUp} onChange={() => presenter.convert(curUp, curDown, convertCurUp, setConvertCurDown)} />
            </span>
            <span className="converterBoxField">
              {curDown}
              <input type="number" step="0.01" value={convertCurDown} onChange={() => presenter.convert(curDown, curUp, convertCurDown, setConvertCurUp)} />
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
