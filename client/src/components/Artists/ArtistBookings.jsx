import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col, Accordion, Card, Nav } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/io';
import Calendar from 'react-calendar';
import SettingsModal from './SettingsModal.jsx';

const Bookings = ( {bookings} ) => {
  const [date, setDate] = useState(new Date());
  console.log(bookings);
  return (
    <Container fluid>
      <IoMdArrowBack/>
      <Row style={{
               width: '375px',
               height: '300px'
            }}>
      <Calendar onChange={(e)=> console.log(e)} />
      </Row>
      <Accordion defaultActiveKey="0">
        {bookings.map((each, i) =>
          <Card key={i}>
            <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
              {each.name}
            </Accordion.Toggle>
            <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
              {each.time}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body>
                <Card.Img variant="top" src={`${each.image_url}`}  />
                <Card.Subtitle className="cardsubtitle" >{each.type}</Card.Subtitle>
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