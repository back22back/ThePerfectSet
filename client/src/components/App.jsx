import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import SplashPage from './registration-login/SplashPage.jsx'
import Login from './registration-login/Login.jsx';
import Register from './registration-login/Register.jsx';
import RegistrationLogin from './registration-login/RegistrationLogin.jsx';
import AppContext from './AppContext.js'
import TestHome from './test/TestHome.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Artists/ArtistHome.jsx';

const App = () => {

  let [username, setUsername] = useState('Your Google Account')
  let [bio, setBio] = useState('Tell Us About Yourself')
  let [website, setWebsite] = useState('www.efgsdfg.com')
  let [isArtist, setIsArtist] = useState('false')
  let serverUrl = 'serverurl'

  return (
    <>
    <Home />
    <AppContext.Provider value={{username, setUsername, bio, setBio, website, setWebsite, serverUrl, isArtist, setIsArtist}} >
      <RegistrationLogin/>
    </AppContext.Provider>
    </>
  )
};


export default App;