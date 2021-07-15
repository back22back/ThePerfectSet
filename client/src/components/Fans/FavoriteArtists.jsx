import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import FanHome from './FanHome.jsx';

import artistData from './artist-test-data.js';
import fanfave from './fanfave.jpeg';

const FavoriteArtists = () => {
	return (
		<Container>
			<Row className='inline-flex'>
				<Link to='/fanhome' component={FanHome}>
					<IoMdArrowBack />
				</Link>
				<VscSettings />
			</Row>
			<Row>
				<Container fluid>
					<Image src={fanfave} style={{ width: '100%', height: 'auto' }}></Image>
				</Container>
			</Row>
			<Accordion>
				{artistData.map((artist, i) => (
					<Row key={`${artist}${i * 20}`} className='justify-content-between'>
						<Container fluid>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey={i}>
									{artist.name}
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={i}>
									<Card.Body>{artist.bio}</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Container>
					</Row>
				))}
			</Accordion>
		</Container>
	);
};

export default FavoriteArtists;
