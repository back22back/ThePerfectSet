import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SplashPage from './registration-login/SplashPage.jsx';
import Login from './registration-login/Login.jsx';
import Register from './registration-login/Register.jsx';
import ArtistHome from './Artists/ArtistHome.jsx';
import AppContext from './AppContext.js';
import TestHome from './test/TestHome.jsx';
import themes from './themes.js';
import FanHome from './Fans/FanHome.jsx';
import FavoriteArtists from './Fans/FavoriteArtists.jsx';
import ArtistSearch from './Fans/ArtistSearch.jsx';
import ArtistRecommendations from './Artists/ArtistRecommendations.jsx';
import ArtistBookings from './Artists/ArtistBookings.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const safetynetData = [
  {
    name: 'The Showbox',
    date: '2021-08-01',
    time: '21:00',
    image_url: 'https://www.seattlemag.com/sites/default/files/field/image/iStock-1094571772.jpg',
    type: 'Music Venue',
    yelp_url: 'https://www.yelp.com/biz/the-showbox-seattle-2',
    address: '1426 1st Ave, Seattle, WA 98101',
    phone: '(206) 618-3151',
    latitude: 47.6086,
    longitude: -122.3393
  },
  {
    name: 'Hilton Seattle',
    date: '2021-08-01',
    time: '22:00',
    image_url:
      'https://exp.cdn-hotels.com/hotels/1000000/10000/8000/7910/23b7ecfd_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium',
    type: 'Hotel',
    yelp_url: 'https://www.yelp.com/biz/hilton-seattle-seattle',
    address: '1301 6th Ave, Seattle, WA 98101',
    phone: '(206) 624-0500',
    latitude: 47.6092,
    longitude: -122.3329
  },
  {
    name: 'Bellagio Hotel & Casino',
    date: '2021-08-02',
    time: '19:00',
    image_url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8a/e0/b9/bellagio-las-vegas.jpg?w=1200&h=-1&s=1',
    type: 'Hotel and Music Venue',
    yelp_url: 'https://www.yelp.com/biz/bellagio-hotel-las-vegas-6',
    address: '3600 S Las Vegas Blvd, Las Vegas, NV 89109',
    phone: '(888) 987-6667',
    latitude: 36.1129,
    longitude: -115.1765
  }
];

const App = () => {
  const [username, setUsername] = useState('Your Google Account');
  const [bio, setBio] = useState('Tell Us About Yourself');
  const [website, setWebsite] = useState('www.efgsdfg.com');
  const [isArtist, setIsArtist] = useState(false);
  const serverUrl = 'serverurl';
  const [bookings, setBookings] = useState();
  const [user_id, setUser_id] = useState(1);
  const [theme, setTheme] = useState(themes.rocker);

  useEffect(()=> {
    axios.get('/booking/view', {params:{user_id}})
    .then((bookingPromise)=> {
      console.log(bookingPromise);
      const sorted = bookingPromise.data.sort((a, b) => a.date - b.date);
      setBookings(sorted);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    // <div style={theme.page}>
    // <ArtistHome user_id={user_id} />
    <div className={theme === themes.rocker ? "rocker-page" : "neon-page"}>
      <AppContext.Provider
        value={{
          user_id,
          setUser_id,
          username,
          setUsername,
          bio,
          setBio,
          website,
          setWebsite,
          serverUrl,
          isArtist,
          setIsArtist,
          theme,
          setTheme
        }}>
        <Router>
          <Switch>
            <Route path="/" exact component={SplashPage} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Artists/Home" exact>
              <ArtistHome user_id={user_id} bookings={bookings} />
            </Route>
            <Route path="/Artists/Recommendations" exact component={ArtistRecommendations}/>
            <Route path="/Artists/Bookings" exact>
              <ArtistBookings bookings={bookings} />
            </Route>
            <Route path='/Fans/Home' exact component={FanHome} />
            <Route path='/Fans/FavoriteArtists' exact component={FavoriteArtists} />
            <Route path='/Fans/ArtistSearch' exact component={ArtistSearch} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
