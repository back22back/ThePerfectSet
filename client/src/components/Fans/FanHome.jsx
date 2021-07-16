import React, { useContext } from 'react';
import { Container, Col, Button, Image, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppContext from './../AppContext.js';

const FanHome = () => {
  const {page, form, button, selected, heading} = useContext(AppContext).theme;
	return (
		<>
      <Image src="https://www.chicagotribune.com/resizer/VrGevjJlxmK9BUvlTMZE-ufq43A=/800x600/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/GOWRFIWXSFCETMZUKD5XWR657I.jpg" fluid />
      <Container>
        <Row>
          <Col>
            <Link to="/Fans/FavoriteArtists">
              <Button style={button} className="fanbutton">
                Favorite Artists
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/Fans/ArtistSearch">
              <Button style={button} className="fanbutton">
                Artist Search
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
		</>
	);
};

export default FanHome;
