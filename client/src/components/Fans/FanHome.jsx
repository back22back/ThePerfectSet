import React from 'react';
import { Container, Col, Button, Image, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const FanHome = () => {
	return (
		<>
			<style type='text/css'>
				{`
        .btn-black {
          background-color: black;
          color: white;
          border-color: white;
        }
        .btn-white {
          background-color: white;
          color: black;
        }
        .btn-xxl {
          margin: 6rem;
          padding: 1.5rem 1.5rem;
          font-size: 1rem;
          height: 8rem;
          width: 8rem;
        }
        `}
			</style>
      <Container>
      <Image src="https://www.chicagotribune.com/resizer/VrGevjJlxmK9BUvlTMZE-ufq43A=/800x600/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/GOWRFIWXSFCETMZUKD5XWR657I.jpg" fluid />
        <Row>
          <Col>
            <Link to="/Fans/FavoriteArtists">
              <Button variant='black' size='xxl'>
                Favorite Artists
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/Fans/ArtistSearch">
              <Button variant='white' size='xxl'>
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
