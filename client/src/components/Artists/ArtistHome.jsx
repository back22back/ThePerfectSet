import React, { useState } from 'react';
import ReactDom from 'react-dom';
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

const Home = ( {booking} ) => {
  const [currentLocation,setCurrentLocation] = useState();
  const [home, setHome] = useState(true);

  return (
    <Router>
      { home ? <Container >
        <Row style={{
                width: '350px',
                height: '300px'
              }}>
            <GoogleMap/>
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
          <Bookings booking={booking} />
        </Route>
        <Route path="/Artists/Recommendations">
          <Recommendations />
        </Route>
      </Switch>
    </Router>
  );
};

// render(<Home />);

export default Home;