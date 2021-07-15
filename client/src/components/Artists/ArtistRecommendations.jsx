import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row, Col, Form } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import axios from 'axios';
import GoogleMap from './GoogleMap.jsx';
import SettingsModal from './SettingsModal.jsx';

const ArtistRecommendations = ({home, setHome}) => {
  const [search, setSearch] = useState(false);
  const [cityName, setCityName] = useState('');
  const [bookingType, setBookingType] = useState('musicvenues');
  const [showSettings, setShowSettings] = useState(false);

  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  }

  const handleBookingTypeChange = (e) => {
    setBookingType(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`searching for city: ${cityName} and booking type: ${bookingType}`)
  }

  // useEffect(() => {

  // }, [])

  return (
    <>
      {!home ?
        <Container fluid>
        <SettingsModal
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          handleCloseSettings={handleCloseSettings}
        />
        <Row className='justify-content-between'>
          <IoMdArrowBack
            style={{margin:'.5vh', fontSize: '3vh'}}
            onClick={()=>setHome(true)>
            <Link to="/Artists/Home">Home</Link>}
          />
          <h3>Recommendations</h3>
          <VscSettings
            style={{margin:'.5vh', fontSize: '3vh'}}
            onClick={handleShowSettings}
          />
        </Row>
        <Row style={{
                  width: '375px',
                  height: '300px'
                }}>
            <GoogleMap style={{zIndex:-1}}/>
            <hr/>
        </Row>
        <Row >
          <Form style={{zIndex:10}} onSubmit={handleSearch}>
            <Form.Row className="align-items-center">
              <Form.Control type="text" placeholder="Enter city name" onChange={handleCityChange}/>
              <Form.Control
                as="select"
                id="inlineFormCustomSelect"
                custom
                onChange={handleBookingTypeChange}
              >
                <option value="musicvenues">Select type of booking</option>
                <option value="musicvenues">Venues</option>
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
              </Form.Control>
            </Form.Row>
            <Button
              type="submit"
              variant='dark'
              onClick={() => setSearch(true)}
              style={{width:'100%'}}
            >
              Search
            </Button>
          </Form>
        </Row>
        { search ?
          <Row>
          <Accordion defaultActiveKey="0" style={{width:'100%'}}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" variant='dark' >
                Recommended 1
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body variant='dark'>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" variant='dark'>
                Recommended 2
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </Row>
          : null
        }
      </Container>
        : null
      }
    </>
  );
}

export default ArtistRecommendations;