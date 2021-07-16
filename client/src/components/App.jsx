import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SplashPage from './registration-login/SplashPage.jsx'
import Login from './registration-login/Login.jsx';
import Register from './registration-login/Register.jsx';
import ArtistHome from './Artists/ArtistHome.jsx';
import AppContext from './AppContext.js'
import TestHome from './test/TestHome.jsx'
import themes from './themes.js';
import FanHome from './Fans/FanHome.jsx';
import FavoriteArtists from './Fans/FavoriteArtists.jsx';
import ArtistSearch from './Fans/ArtistSearch.jsx';
import ArtistRecommendations from './Artists/ArtistRecommendations.jsx';
import ArtistBookings from './Artists/ArtistBookings.jsx';

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
  const [isArtist, setIsArtist] = useState(true);
  const serverUrl = 'serverurl';
  const [bookings, setBookings] = useState();
  const [user_id, setUser_id] = useState(1);
  let theme = themes.neon;

  return (
    // <div style={theme.page}>
    // <ArtistHome user_id={user_id} />
    <div className={'neon-page'}>
      <AppContext.Provider value={{
        user_id,
        username,
        setUsername,
        bio,
        setBio,
        website,
        setWebsite,
        serverUrl,
        isArtist,
        setIsArtist,
        theme
        }} >
        <Router>
          <Switch>
            <Route path="/" exact component={SplashPage} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Artists/Home" exact>
              <ArtistHome user_id={user_id} />
            </Route>
            <Route path="/Artists/Recommendations" exact component={ArtistRecommendations}/>
            <Route path="/Artists/Bookings" exact component={ArtistBookings} />
            <Route path="/Fans/Home" exact component={FanHome} />
            <Route path="/Fans/FavoriteArtists" exact component={FavoriteArtists} />
            <Route path="/Fans/ArtistSearch" exact componet={ArtistSearch} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
};


export default App;