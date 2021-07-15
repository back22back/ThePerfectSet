import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const SplashPage = (props) => {


    return (
      <div className="rl">
      <h1 className="splash-title">The Perfect Set</h1>
      <i></i>
        <img src='/images/coversplash.jpeg' className="rl rl-img"/>
        {/* <div className="btn-container">
          <button className="splash-page-buttons btn-selected">ARTIST</button>
          <button className="splash-page-buttons">FAN</button>
        </div> */}
          <Link to="/Register" className="splash-link rl" >Register</Link>
          <Link to="/Login" className="splash-link rl" >Login</Link>
      </div>
    )

};

export default SplashPage;