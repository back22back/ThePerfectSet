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

const ArtistHome = ({ user_id }) => {
  const [home, setHome] = useState(true);
  const [bookings, setBookings] = useState();

  useEffect(()=> {
    axios.get('/booking/view', {params:{user_id}})
    .then((bookingPromise)=> {
      const sorted = bookingPromise.data.sort((a, b) => a.date - b.date);
      setBookings(sorted);
    })
    .catch((err) => console.log(err));

  }, [user_id]);

  if (!bookings) {
    console.log('no booking');
    return <div>Loading...</div>
  }

  return (
    <Router>
      { home ? <Container >
        <Row style={{
                width: '350px',
                height: '300px'
              }}>
            <Map
              bookings={bookings}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3G_J5X-Mn0e5gVnvOT8IfOz6ZY5ugchE"
              loadingElement={<div style={{ height: `100%` }} />}
            />
        </Row>
        <Row >
          <Button onClick={()=>setHome(false)}
            variant="primary"
            size="lg"
            style={{
                position: 'absolute',
                top: '60%',
                left: '40%'
            }}>
            <Link to="/Artists/Bookings">Bookings</Link>
          </Button>{' '}
        </Row>
        <Row>
          <Button variant="danger"
            size="lg"
            style={{
              position: 'absolute',
              top: '80%',
              left: '33%'
            }}
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