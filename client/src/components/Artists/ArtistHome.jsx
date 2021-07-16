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
import ArtistRecommendations from './ArtistRecommendations.jsx';
import GoogleMap from './GoogleMap.jsx';
import { withScriptjs } from "react-google-maps";
import Map from './Map.jsx';

const ArtistHome = ({ user_id }) => {
  const [home, setHome] = useState(true);
  const [bookings, setBookings] = useState();

  // useEffect(()=> {
  //   axios.get('/booking/view', {params:{user_id}})
  //   .then((bookingPromise)=> {
  //     const sorted = bookingPromise.data.sort((a, b) => a.date - b.date);
  //     setBookings(sorted);
  //   })
  //   .catch((err) => console.log(err));

  // }, [user_id]);

  // if (!bookings) {
  //   return <div>Loading...</div>
  // }

  return (
    <Container >
      {/* <Row style={{
              width: '350px',
              height: '300px'
            }}>
          <Map
            bookings={bookings}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBr4eib21LxBX8r8L25DOSicVW9nHwmHXM"
            loadingElement={<div style={{ height: `100%` }} />}
          />
      </Row> */}
      <Row>
      <Button onClick={()=>setHome(false)}
            variant="secondary"
            size="lg"
            >
            <Link to="/Artists/Bookings">Bookings</Link>
          </Button>{' '}
      </Row>
      <Row >
        <Button onClick={()=>setHome(false)}
          variant="danger"
          size="lg"
          >
            <Link to="/Artists/Recommendations">Recommendations</Link>
          </Button>{' '}
        </Row>
      </Container>
  );
};

// render(<Home />);

export default ArtistHome;