import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SplashPage from './registration-login/SplashPage.jsx'
import Login from './registration-login/Login.jsx';
import Register from './registration-login/Register.jsx';
import RegistrationLogin from './registration-login/RegistrationLogin.jsx';
<<<<<<< HEAD
import Home from './Artists/ArtistHome.jsx';
=======

import ArtistHome from './Artists/ArtistHome.jsx';
>>>>>>> ef84981563bb807ea86c283a047efb760a27a34f
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
<<<<<<< HEAD
  const [booking, setBooking] = useState();
  let theme = themes.neon

    useEffect(()=> {
    axios.get('/booking/view')
    .then((bookingPromise)=> {setBooking(bookingPromise.data)})
=======
  const [bookings, setBookings] = useState();
  const [user_id, setUser_id] = useState(1);
  let theme = themes.neon;

  useEffect(()=> {
    axios.get('/booking/view', {params:{user_id}})
    .then((bookingPromise)=> {setBookings(bookingPromise.data)})
>>>>>>> ef84981563bb807ea86c283a047efb760a27a34f
    .catch((err) => console.log(err));

  }, []);

<<<<<<< HEAD
  return (
    <>
      <AppContext.Provider value={{username, setUsername, bio, setBio, website, setWebsite, serverUrl, isArtist, setIsArtist, theme}} >
        {/* <Home /> */}
        <Router>
          <Switch>
            <Route path="/" exact component={SplashPage} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/TestHome" exact component={TestHome} />
          </Switch>
        </Router>
      </AppContext.Provider>
=======
  if (!bookings) {
    return <div>Loading...</div>
  }

  return (
    <>
    <ArtistHome bookings={bookings}/>
      {/* <AppContext.Provider value={{username, setUsername, bio, setBio, website, setWebsite, serverUrl, isArtist, setIsArtist, theme}} >
      <Router>
      <Switch>
        <Route path="/" exact component={SplashPage} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/TestHome" exact component={TestHome} />
        <Route path="/Artist">
          <ArtistHome bookings={bookings}/>
        </Route>
      </Switch>
    </Router>
      </AppContext.Provider> */}
>>>>>>> ef84981563bb807ea86c283a047efb760a27a34f
    </>
  )
};


export default App;