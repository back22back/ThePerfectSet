import React from 'react';
import { Container, Column, Button, Image, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const FanHome = () => {
	return (
		<>
			<style type='text/css'>
				{`
        .btn-black {
          background-color: black;
          color: white;
        }
        .btn-white {
          background-color: white;
          color: black;
        }
        .btn-xxl {
          margin: 1rem;
          padding: 1.5rem 1.5rem;
          font-size: 1rem;
          height: 6rem;
          width: 6rem;
        }
        `}
			</style>
			<Container>
				<Image src="./fanpage.jpeg" fluid />
				<Container>
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
			</Container>
		</>
	);
};

export default FanHome;
