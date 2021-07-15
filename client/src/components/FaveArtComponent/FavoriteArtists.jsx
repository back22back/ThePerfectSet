import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';

import artistData from './artist-test-data.js';
import placeholder from './placeholder.png';

const FavoriteArtists = () => {
	return (
		<Container>
			<nav>
				{/* <Link to='/app' component={App}> */}
				<IoMdArrowBack />
				{/* </Link> */}
				<VscSettings />
			</nav>
			<Row>
				<div className='container-fluid'>
					<Image src={placeholder} style={{ width: '100%', height: 'auto' }}></Image>
				</div>
			</Row>
			<Row>
				<div className='container-fluid'>
					<Accordion>
						{artistData.map((artist, i) => (
							<Card key={`${artist}${i * 20}`}>
								<Accordion.Toggle as={Card.Header} eventKey={i}>
									{artist.name}
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={i}>
									<Card.Body>{artist.bio}</Card.Body>
								</Accordion.Collapse>
							</Card>
						))}
					</Accordion>
				</div>
			</Row>
		</Container>
	);
};

export default FavoriteArtists;
