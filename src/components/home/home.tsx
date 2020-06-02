import React from 'react';
import './home.css';
import logo from '../../assets/logo_hikers_960x360.png';
import { Link } from 'react-router-dom';

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
