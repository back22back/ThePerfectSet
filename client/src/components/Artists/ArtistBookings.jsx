import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Accordion, Card } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';

const Bookings = () => {

  return (
    <>
      <IoMdArrowBack/>
      <Row style={{
               width: '350px',
               height: '300px'
            }}>
          {/* Calendar */}
      </Row>
      <Row>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Booked Venue 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Booked Venue 2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Row>
    </>
  );
};

// render(<Bookings />);

export default Bookings;