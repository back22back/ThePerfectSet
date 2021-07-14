import React from 'react';
import { Container, Column, Button, Image } from 'react-bootstrap';

const FanHome = () => {
  return (
    <>
      <style type="text/css">
        {`
        .btn-black {
          background-color: black;
          color: white;
        }
        .btn-white {
          background-color: white;
          color: black;
        }
        .btn-xxl {
          margin: 1rem;
          padding: 1.5rem 1.5rem;
          font-size: 1rem;
          height: 6rem;
          width: 6rem;
        }
        `}
      </style>
      <Container>
        <Image src="background-url" fluid />
        <Container>
          <Row>
            <Col>
              <Button variant="black" size="xxl">Favorite Artists</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="white" size="xxl">Artist Search</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}