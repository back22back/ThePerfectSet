import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import fanSearch from './fansearch.jpeg';
import SettingsModal from '../Artists/SettingsModal.jsx';

const ArtistSearch = () => {
  const [artists, setArtists] = useState([]);
  const [input, setInput] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);

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
      <SettingsModal
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          handleCloseSettings={handleCloseSettings}
      />
      <Row className='justify-content-between container-fluid'>
        {/* <Link to='/app' component={App}> */}
        <IoMdArrowBack style={{margin:'.5vh', fontSize: '3vh', color: 'white'}}/>
        {/* </Link> */}
        <VscSettings style={{margin:'.5vh', fontSize: '3vh', color: 'white'}} onClick={handleShowSettings}/>
      </Row>
      <Row>
        <div className='container-fluid'>
        <Image src={fanSearch} width={'100%'} height={'auto'}></Image>
          <div className='input-group-prepend'>
            <input type='text'
              className='form-control'
              placeholder='Search for Artists'
              aria-label='Search for Artists'
              onChange={event => handleSearch(event.target.value)}
              onFocus={handleFocus}>
            </input>
          </div>
        </div>
      </Row>
      {input.length
        ? artists.filter(art => {
          if (art.artist_name.toLowerCase().includes(input.toLowerCase())) {
            return art;
          }
        })
        .map((artist, key) => (
          <Row>
            <div className='container-fluid' key={key}>
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
                      {artist.tour_dates.map((loc, key) => (
                        <li key={key}>
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
        <div className='container-fluid' key={key}>
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
                  {artist.tour_dates.map((loc, key) => (
                    <li key={key}>
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