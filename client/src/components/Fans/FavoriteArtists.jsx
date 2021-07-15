import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Accordion, Card, Image, Row, Col } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import axios from 'axios';
import fanfave from './fanfave.jpeg';

const FavoriteArtists = () => {
  const [artistList, setArtistList] = useState([]);
  const fetchArtists = () => {
    axios
      .get('/follows', { params: { user_id: 3 } })
      .then((data) => setArtistList(data.data))
      .catch((err) => console.log(`Error fetching favorite artists: ${err}`));
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <Container>
      <Container fluid>
        <Row
          className='inline-flex justify-content-between align-items-center'
          style={{ height: '3em' }}
        >
          {/* <Link to='/fanhome'> */}
          <IoMdArrowBack style={{ color: '#EFEFEF' }} />
          {/* </Link> */}
          <span style={{ color: '#EFEFEF' }}>Favorite Artists</span>
          <VscSettings style={{ color: '#EFEFEF' }} />
        </Row>
      </Container>
      <Row>
        <Container fluid>
          <Image
            src={fanfave}
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '1em',
              borderRadius: '5px'
            }}
          ></Image>
        </Container>
      </Row>
      <Accordion>
        {artistList.map((artist, i) => (
          <Row key={`${artist}${i * 20}`}>
            <Container fluid>
              <Card
                style={{ marginBottom: '0.5em', border: '1px solid #8c8c8c', borderRadius: '5px' }}
              >
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={i + 1}
                  style={{
                    backgroundColor: '#121212',
                    color: '#EFEFEF',
                    textAlign: 'center',
                    borderRadius: '5px'
                  }}
                >
                  {artist.artist_name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={i + 1}>
                  <Card.Body style={{ fontSize: '0.8em' }}>
                    <Container className='justify-content-around'>
                      <Container className='justify-content-center'>
                        <Image
                          src={artist.portrait_url}
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '5px'
                          }}
                        ></Image>
                      </Container>
                      <Row
                        className='justify-content-center'
                        style={{
                          width: '100%',
                          height: 'auto',
                          marginLeft: '0.5em',
                          textAlign: 'center'
                        }}
                      >
                        {artist.bio}
                      </Row>
                      <Row
                        className='justify-content-center'
                        style={{ marginBottom: '1em', textAlign: 'center' }}
                      >
                        <a href={artist.website}>{artist.website}</a>
                      </Row>
                      <Row style={{ fontWeight: '700' }}> Tours </Row>
                      {artist.tour_dates.map((tour) => (
                        <Row key={`${tour.location_name}${tour.date}`}>
                          <Col>{tour.location_name}</Col>
                          <Col>{tour.date}</Col>
                        </Row>
                      ))}
                    </Container>
                  </Card.Body>
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
