import React from 'react';

import './converter.css';


function converter() {
  return (
    <div className="converter">
      <div className="gridTemplate gridLayout">
        <div className="head" >
          <div className="topheader">Client Converter</div>
        </div>
        <div className="side" >
          <nav>
            <ul className="sideMenu">
              <li className="sideMenuOpt">WowLet</li>
              <li className="sideMenuOpt">From
              {listCur("fromCur")}
              </li>
              <li className="sideMenuOpt">To
              {listCur("toCur")}
              </li>
            </ul>
          </nav>
        </div>
        <div className="content" > Content </div>
      </div>
    </div>
  );
}

function listCur(classToName: string) {
  return (
    <ul className={`slideLeft ${classToName}`}>
      <li>BRL</li>
      <li>USD</li>
      <li>JPY</li>
      <li>RUB</li>
      <li>NZD</li>
      <li>EUR</li>
      <li>GBP</li>
    </ul>
  )
}

export default converter;
