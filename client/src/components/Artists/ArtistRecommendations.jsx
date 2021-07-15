import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row, Col, Form } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import axios from 'axios';
import GoogleMap from './GoogleMap.jsx';
import SettingsModal from './SettingsModal.jsx';

const ArtistRecommendations = ({home, setHome}) => {
  const [cityName, setCityName] = useState('');
  const [bookingType, setBookingType] = useState('venue');
  const [showSettings, setShowSettings] = useState(false);
  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);

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
          <VscSettings
            style={{margin:'.5vh', fontSize: '3vh'}}
            onClick={handleShowSettings}
          />
        </Row>
        <Row style={{
                  width: '350px',
                  height: '300px'
                }}>
            <GoogleMap style={{zIndex:-1}}/>
            <hr/>
        </Row>
        <Row >
          <Form style={{zIndex:10}}>
            <Form.Row className="align-items-center">
              <Form.Control type="text" placeholder="Enter city name" />
              <Form.Control
                as="select"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">Choose type of booking</option>
                <option value="musicvenues">Venues</option>
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
              </Form.Control>
            </Form.Row>
          </Form>
        </Row>
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
      </Container>
        : null
      }
    </>
  );
}

export default ArtistRecommendations;