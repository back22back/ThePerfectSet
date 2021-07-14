import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';

import artistData from './artist-test-data.js';
import placeholder from './placeholder.png';

const FavoriteArtists = () => {
	return (
		<Container>
			<Row>
				<Image src={placeholder} style={{ width: '100%', height: 'auto' }}></Image>
			</Row>
			<Row>
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
			</Row>
		</Container>
	);
};

export default FavoriteArtists;
