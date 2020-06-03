import React, { useEffect } from 'react';
import './converter.css';
import ConverterPresenter from './converter-presenter';
import { Link } from 'react-router-dom';


function Converter() {
  let presenter = new ConverterPresenter();

  return (
    <div className="converter">
      <div className="gridTemplate gridLayout">
        <div className="head" >
          <div className="topheader">Client Converter</div>
        </div>

        <nav className="siteNavigation">
          <ul>
            <li><Link to="/wallet">Wallet</Link></li>
            <li><span>From</span>
              {listCur("dropdown_fromCur")}
            </li>
            <li><span>To</span>
              {listCur("dropdown_fromCur")}
            </li>
          </ul>
        </nav>

        <div className="content">
          <div className="moneyBox">
            <span className="moneyBoxTitle">Wallet</span>
            <span className="money">{presenter.coin1} {presenter.value1}</span>
            <span className="money">{presenter.coin2} {presenter.value2}</span>
          </div>

          <div className="converterBox">
            <span className="converterBoxField">BRL <input type="number" step="0.01" /></span>
            <span className="converterBoxField">USD <input type="number" step="0.01" /></span>
            <button className="buyBtn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function listCur(classToName: string) {
  return (
    <ul className={`${classToName}`}>
      <li><span className="spanLink">BRL</span></li>
      <li><span className="spanLink">USD</span></li>
      <li><span className="spanLink">JPY</span></li>
      <li><span className="spanLink">RUB</span></li>
      <li><span className="spanLink">NZD</span></li>
      <li><span className="spanLink">EUR</span></li>
      <li><span className="spanLink">GBP</span></li>
    </ul>
  )
}

export default Converter;
