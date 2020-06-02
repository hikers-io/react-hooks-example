import React from 'react';

import './converter.css';


function converter() {
  return (
    <div className="converter">
      <section className="gridTemplate">
        <div className="head" > LOGO </div>
        <div className="side" > Sidenav </div>
        <div className="content" > Content </div>
      </section>
      <div className="topheader">Client Converter</div>

      <nav>
        <ul className="sideMenu">
          <li className="sideMenuOpt">WOWLET</li>
          <li className="sideMenuOpt">From
            {listCur("fromCur")}
          </li>
          <li className="sideMenuOpt">To
            {listCur("toCur")}
          </li>
        </ul>
      </nav>

      <div className="stage"></div>
    </div>
  );
}

function listCur(classToName: string) {
  return (
    <ul className={classToName}>
      <li>AED</li>
      <li>AFN</li>
      <li>ALL</li>
      <li>AMD</li>
      <li>ANG</li>
      <li>AOA</li>
      <li>ARS</li>
      <li>AUD</li>
      <li>AWG</li>
      <li>AZN</li>
      <li>BAM</li>
      <li>BBD</li>
      <li>BDT</li>
      <li>BGN</li>
      <li>BHD</li>
      <li>BIF</li>
      <li>BMD</li>
      <li>BND</li>
      <li>BOB</li>
      <li>BRL</li>
      <li>BSD</li>
      <li>BTC</li>
      <li>BTN</li>
      <li>BWP</li>
      <li>BYN</li>
      <li>BYR</li>
      <li>BZD</li>
      <li>CAD</li>
      <li>CDF</li>
      <li>CHF</li>
      <li>CLF</li>
      <li>CLP</li>
      <li>CNY</li>
      <li>COP</li>
      <li>CRC</li>
      <li>CUC</li>
      <li>CUP</li>
      <li>CVE</li>
      <li>CZK</li>
      <li>DJF</li>
      <li>DKK</li>
      <li>DOP</li>
      <li>DZD</li>
      <li>EGP</li>
      <li>ERN</li>
      <li>ETB</li>
      <li>EUR</li>
      <li>FJD</li>
      <li>FKP</li>
      <li>GBP</li>
      <li>GEL</li>
      <li>GGP</li>
      <li>GHS</li>
      <li>GIP</li>
      <li>GMD</li>
      <li>GNF</li>
      <li>GTQ</li>
      <li>GYD</li>
      <li>HKD</li>
      <li>HNL</li>
      <li>HRK</li>
      <li>HTG</li>
      <li>HUF</li>
      <li>IDR</li>
      <li>ILS</li>
      <li>IMP</li>
      <li>INR</li>
      <li>IQD</li>
      <li>IRR</li>
      <li>ISK</li>
      <li>JEP</li>
      <li>JMD</li>
      <li>JOD</li>
      <li>JPY</li>
      <li>KES</li>
      <li>KGS</li>
      <li>KHR</li>
      <li>KMF</li>
      <li>KPW</li>
      <li>KRW</li>
      <li>KWD</li>
      <li>KYD</li>
      <li>KZT</li>
      <li>LAK</li>
      <li>LBP</li>
      <li>LKR</li>
      <li>LRD</li>
      <li>LSL</li>
      <li>LVL</li>
      <li>LYD</li>
      <li>MAD</li>
      <li>MDL</li>
      <li>MGA</li>
      <li>MKD</li>
      <li>MMK</li>
      <li>MNT</li>
      <li>MOP</li>
      <li>MRO</li>
      <li>MUR</li>
      <li>MVR</li>
      <li>MWK</li>
      <li>MXN</li>
      <li>MYR</li>
      <li>MZN</li>
      <li>NAD</li>
      <li>NGN</li>
      <li>NIO</li>
      <li>NOK</li>
      <li>NPR</li>
      <li>NZD</li>
      <li>OMR</li>
      <li>PAB</li>
      <li>PEN</li>
      <li>PGK</li>
      <li>PHP</li>
      <li>PKR</li>
      <li>PLN</li>
      <li>PYG</li>
      <li>QAR</li>
      <li>RON</li>
      <li>RSD</li>
      <li>RUB</li>
      <li>RWF</li>
      <li>SAR</li>
      <li>SBD</li>
      <li>SCR</li>
      <li>SDG</li>
      <li>SEK</li>
      <li>SGD</li>
      <li>SHP</li>
      <li>SLL</li>
      <li>SOS</li>
      <li>SRD</li>
      <li>STD</li>
      <li>SVC</li>
      <li>SYP</li>
      <li>SZL</li>
      <li>THB</li>
      <li>TJS</li>
      <li>TMT</li>
      <li>TND</li>
      <li>TOP</li>
      <li>TRY</li>
      <li>TTD</li>
      <li>TWD</li>
      <li>TZS</li>
      <li>UAH</li>
      <li>UGX</li>
      <li>USD</li>
      <li>UYU</li>
      <li>UZS</li>
      <li>VEF</li>
      <li>VND</li>
      <li>VUV</li>
      <li>WST</li>
      <li>XAF</li>
      <li>XAG</li>
      <li>XCD</li>
      <li>XDR</li>
      <li>XOF</li>
      <li>XPF</li>
      <li>YER</li>
      <li>ZAR</li>
      <li>ZMK</li>
      <li>ZMW</li>
      <li>ZWL</li>
    </ul>
  )
}

export default converter;
