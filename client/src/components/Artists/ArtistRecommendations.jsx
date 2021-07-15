import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row, Col, Form } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';
import axios from 'axios';
import GoogleMap from './GoogleMap.jsx';

const ArtistRecommendations = () => {
  // useEffect(() => {

  // }, [])

  return (
    <Container fluid>
      <Row className='justify-content-between'>
        <IoMdArrowBack style={{margin:'.5vh', fontSize: '3vh'}}/>
        <VscSettings style={{margin:'.5vh', fontSize: '3vh'}}/>
      </Row>
      <Row style={{
                width: '350px',
                height: '300px'
              }}>
          <GoogleMap style={{margin:'1px'}}/>
      </Row>
      <Row>
        <Form>
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
      <Row className='justify-content-around'>
        <Button variant='dark'>
          Venues
        </Button>
        <Button variant='dark'>
          Hotels
        </Button>
        <Button variant='dark'>
          Food
        </Button>
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
  );
}

export default ArtistRecommendations;