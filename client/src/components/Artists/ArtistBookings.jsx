import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col, Accordion, Card, Nav } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import SettingsModal from './SettingsModal.jsx';

const Bookings = ( {booking} ) => {
  console.log(booking);
  return (
    <Container fluid>
      <IoMdArrowBack/>
      <Row style={{
               width: '375px',
               height: '300px'
            }}>
          {/* Calendar */}
      </Row>
      <Accordion defaultActiveKey="0">
        {booking.map((each, i) =>
          <Card key={i}>
            <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
              {each.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body>
                <Card.Img variant="top" src={`${each.image_url}`} className="cardimg" />
                <Card.Subtitle>{each.type}</Card.Subtitle>
                <Card.Text>{each.address}</Card.Text>
                <Card.Text>{each.phone}</Card.Text>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href={each.yelp_url}>Go to Yelp!</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )}
      </Accordion>
    </Container>
  );
};

// render(<Bookings />);

export default Bookings;