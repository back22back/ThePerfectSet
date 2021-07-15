import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';

const Bookings = ( {booking} ) => {
  console.log(booking);
  return (
    <>
      <IoMdArrowBack/>
      <Row style={{
               width: '350px',
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
              <Card.Subtitle>{each.type}</Card.Subtitle>
              <Card.Img variant="top" src={`https://s3-media2.fl.yelpcdn.com/bphoto/VWRMSQYJRnHDZCeIdQoRSQ/o.jpg/100px180`} />
              <Card.Body>
                <Card.Text>{each.address}</Card.Text>
                <Card.Text>{each.phone}</Card.Text>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="">Go to Yelp!</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>

            </Accordion.Collapse>
          </Card>
        )}
      </Accordion>
    </>
  );
};

// render(<Bookings />);

export default Bookings;