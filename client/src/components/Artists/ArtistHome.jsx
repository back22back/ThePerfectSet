import React, { useState, useEffect } from 'react';
import ReactDom, { render } from 'react-dom';
import axios from 'axios';
import { Container, Row, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bookings from './ArtistBookings.jsx';
import Recommendations from './ArtistRecommendations.jsx';
import GoogleMap from './GoogleMap.jsx';
import { withScriptjs } from "react-google-maps";
import Map from './Map.jsx';

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
    image_url: 'https://exp.cdn-hotels.com/hotels/1000000/10000/8000/7910/23b7ecfd_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium',
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
    image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8a/e0/b9/bellagio-las-vegas.jpg?w=1200&h=-1&s=1',
    type: 'Hotel and Music Venue',
    yelp_url: 'https://www.yelp.com/biz/bellagio-hotel-las-vegas-6',
    address: '3600 S Las Vegas Blvd, Las Vegas, NV 89109',
    phone: '(888) 987-6667',
    latitude: 36.1129,
    longitude: -115.1765
  }
]

const ArtistHome = ({ user_id }) => {
  const [home, setHome] = useState(true);
  const [bookings, setBookings] = useState();

  useEffect(()=> {
    // axios.get('/booking/view', {params:{user_id}})
    // .then((bookingPromise)=> {
    //   console.log(bookingPromise);
    //   const sorted = bookingPromise.data.sort((a, b) => a.date - b.date);
    //   setBookings(sorted);
    // })
    // .catch((err) => console.log(err));
    setBookings(safetynetData);
  }, [user_id]);

  if (!bookings) {
    return <div>Loading...</div>
  }

  return (
     <Router>
      { home ? <Container style={{
                width: '375px',
                height: '800px'
              }}>
        <Row >
            <Map
              bookings={bookings}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBr4eib21LxBX8r8L25DOSicVW9nHwmHXM"
              loadingElement={<div style={{ width: `350px` }} />}
            />
        </Row>
        <Row >
          <Button onClick={()=>setHome(false)}
            variant="secondary"
            size="lg"
            >
              <Link to="/Artists/Bookings">Bookings</Link>
          </Button>{' '}
        </Row>
        <Row>
          <Button variant="danger"
            size="lg"

            onClick={()=>setHome(false)}>
              <Link to="/Artists/Recommendations">Recommendations</Link>
          </Button>{' '}
        </Row>
      </Container> : null}
    <hr />
    <Switch>
      <Route path="/Artists/Bookings">
        <Bookings bookings={bookings} />
      </Route>
      <Route path="/Artists/Recommendations">
        <Recommendations />
      </Route>
    </Switch>
  </Router>
  );
};

// render(<Home />);

export default ArtistHome;