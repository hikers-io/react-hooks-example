import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const logo = require('../../assets/logo_hikers_960x360.png');

function home() {
  return (
    <div className="home">
      <span className="title">Welcome to the Hikers React DEMO Project</span>
      <span className="subTitle">enjoy the travel</span>
      <img src={logo} className="homeLogo" alt="logo" />
      <Link className="goWltBtn" to="/converter">Go Wallet</Link>
    </div>
  );
}

export default home;
