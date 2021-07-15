import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import SplashPage from './registration-login/SplashPage.jsx'
import Login from './registration-login/Login.jsx';
import Register from './registration-login/Register.jsx';
import RegistrationLogin from './registration-login/RegistrationLogin.jsx';
import Home from './Artists/ArtistHome.jsx';
import AppContext from './AppContext.js'
import TestHome from './test/TestHome.jsx'
import themes from './themes.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState('Your Google Account');
  const [bio, setBio] = useState('Tell Us About Yourself');
  const [website, setWebsite] = useState('www.efgsdfg.com');
  const [isArtist, setIsArtist] = useState('false');
  const serverUrl = 'serverurl';
  const [booking, setBooking] = useState();
  let theme = themes.neon

    useEffect(()=> {
    axios.get('/booking/view')
    .then((bookingPromise)=> {setBooking(bookingPromise.data)})
    .catch((err) => console.log(err));
    // setBooking([{
    //   id:1,
    //   name:'Hilton',
    //   address:'1234 hill',
    //   phone:'1234567890',
    //   yelp_url:'www',
    //   image_url:'www',
    //   rating: '4',
    //   price:'$',
    //   latitude: 123,
    //   longitude: 123,
    //   type: 'music venue'}])
  }, []);

  return (
    <>
      <AppContext.Provider value={{username, setUsername, bio, setBio, website, setWebsite, serverUrl, isArtist, setIsArtist, theme}} >
        <Home />
        {/* <Router>
          <Switch>
            <Route path="/" exact component={SplashPage} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/TestHome" exact component={TestHome} />
          </Switch>
        </Router> */}
      </AppContext.Provider>
    </>
  )
};


export default App;