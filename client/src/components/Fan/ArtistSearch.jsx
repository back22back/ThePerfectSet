import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';

// query database and display artists from there
import artistData from '../FaveArtComponent/artist-test-data.js';

const ArtistSearch = () => {
  const [searchResults, setSearchResults] = useState(artistData);
  const [input, setInput] = useState('');

  const handleSearch = (searchInput) => {
    searchInput.length > 0
      ? setInput(searchInput)
      : setInput('');
  };

  const fetchArtistData = () => {
    // TODO: rewrite to fetch from DB
    // input.length ?
    // setSearchResults()
  };

  return (
    <Container>
      <IoMdArrowBack/>
      <VscSettings/>
      <Row>
        {/* <Image src={'FILL_ME_IN'} width={'100%'} height={'auto'}></Image> */}
      </Row>
			{searchResults.map((artist, key) => (
				<Row>
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									{artist.name}
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey='0'>
								<Card.Body>
									<h4>Tours:</h4>
									{artist.tour.map(loc => (
										<p>Location: {loc.event}</p>
									))}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Row>
			))}
    </Container>
  );

}

export default ArtistSearch;