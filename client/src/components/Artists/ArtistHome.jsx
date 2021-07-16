import React, { useState, useEffect, useContext } from 'react';
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
import AppContext from './../AppContext.js'

const ArtistHome = ({ user_id, bookings }) => {
<<<<<<< HEAD
  const [home, setHome] = useState(true);
  const {page, form, button, selected, heading} = useContext(AppContext).theme;


  useEffect(()=> {
    // axios.get('/booking/view', {params:{user_id}})
    // .then((bookingPromise)=> {
    //   console.log(bookingPromise);
    //   const sorted = bookingPromise.data.sort((a, b) => a.date - b.date);
    //   setBookings(sorted);
    // })
    // .catch((err) => console.log(err));
  }, [user_id]);

=======
>>>>>>> 4208b656e39a3311ec46268e539b033ec334dcca
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
<<<<<<< HEAD
      <Button style={button}
=======
      <Button style={{zIndex:10, marginTop:'10vh'}}
>>>>>>> 4208b656e39a3311ec46268e539b033ec334dcca
            variant="secondary"
            size="lg"
            >
            <Link to="/Artists/Bookings" style={{color:'#fff'}}>Bookings</Link>
          </Button>{' '}
      </Row>
      <Row className='justify-content-center'>
<<<<<<< HEAD
        <Button style={button}
=======
        <Button style={{zIndex:10, marginTop:'10vh'}}
>>>>>>> 4208b656e39a3311ec46268e539b033ec334dcca
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