import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import fansearch from './fansearch.jpeg';

const ArtistSearch = () => {
  const [artists, setArtists] = useState([]);
  const [input, setInput] = useState('');

  const fetchArtists = () => {
    axios
      .get('/follows', { params: { user_id: 3 } })
      .then((data) => setArtists(data.data))
      .catch((err) => console.log(`Error fetching favorite artists: ${err}`));
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  const handleSearch = (searchInput) => {
    searchInput.length > 0
      ? setInput(searchInput)
      : setInput('');
  };

  const handleFocus = (event) => {
    event.preventDefault();
    const { target } = event;
    target.setSelectionRange(0, target.value.length);
  };
// container relative position
// abs position on input
  return (
    <Container>
      <Row className='justify-content-between container-fluid'>
        {/* <Link to='/app' component={App}> */}
        <IoMdArrowBack style={{margin:'.5vh', fontSize: '3vh', color: 'white'}}/>
        {/* </Link> */}
        <VscSettings style={{margin:'.5vh', fontSize: '3vh', color: 'white'}}/>
      </Row>
      <Row>
        <div className='container-fluid'>
        <Image src={fansearch} width={'100%'} height={'auto'} className='position-relative'></Image>
          <div className="input-group-prepend">
            <input type="text"
              className="form-control position-absolute"
              placeholder="Search for Artists"
              aria-label="Search for Artists"
              onChange={event => handleSearch(event.target.value)}
              onFocus={handleFocus}>
            </input>
          </div>
        </div>
      </Row>
      {input.length
        ? artists.filter(art => {
          if (art.name.toLowerCase().includes(input.toLowerCase())) {
            return art;
          }
        })
        .map((artist, key) => (
          <Row>
            <div className='container-fluid'>
              <Accordion>
                <Card>
                  <Card.Header className='card text-white bg-dark'>
                    <Accordion.Toggle as={Card.Header}
                    eventKey='0'
                    className='card text-white bg-secondary text-center'>
                      {artist.artist_name}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body className='card text-white bg-secondary'>
                      <h5 className='text-white'>{artist.website}</h5>
                      <p>{artist.bio}</p>
                      <h4>Tours</h4>
                      <ul className='list-group'>
                      {artist.tour_dates.map(loc => (
                        <li>
                          <p className='text-white'>{loc.location_name}</p>
                          <p className='text-white'>{loc.date}</p>
                        </li>
                      ))}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Row>
      )) : artists.map((artist, key) => (
        <Row>
        <div className='container-fluid'>
          <Accordion>
            <Card>
              <Card.Header className='card text-white bg-dark'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='0'
                  className='card text-white bg-secondary text-center'>
                  {artist.artist_name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body className='card text-white bg-secondary'>
                  <h5 className='text-white'>{artist.website}</h5>
                  <p>{artist.bio}</p>
                  <h4>Tours</h4>
                  <ul className='list-group'>
                  {artist.tour_dates.map(loc => (
                    <li>
                      <p className='text-white'>{loc.location_name}</p>
                      <p className='text-white'>{loc.date}</p>
                    </li>
                  ))}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Row>
      ))}
    </Container>
  );
}

export default ArtistSearch;