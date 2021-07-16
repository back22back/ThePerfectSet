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

const ArtistHome = ({ user_id, bookings }) => {
  if (!bookings) {
    return <div>Loading...</div>
  }

  return (
    <Container fluid style={{overflow:'scroll'}}>
      <Row >
          <Map
            bookings={bookings}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBr4eib21LxBX8r8L25DOSicVW9nHwmHXM"
            loadingElement={<div style={{ height: `100%` }} />}
          />
      </Row>
      <Row className='justify-content-center'>
      <Button style={{zIndex:10, marginTop:'10vh'}}
            variant="secondary"
            size="lg"
            >
            <Link to="/Artists/Bookings" style={{color:'#fff'}}>Bookings</Link>
          </Button>{' '}
      </Row>
      <Row className='justify-content-center'>
        <Button style={{zIndex:10, marginTop:'10vh'}}
          variant="danger"
          size="lg"
          >
            <Link to="/Artists/Recommendations" style={{color:'#fff'}}>Recommendations</Link>
          </Button>{' '}
        </Row>
      </Container>
  );
};

// render(<Home />);

export default ArtistHome;