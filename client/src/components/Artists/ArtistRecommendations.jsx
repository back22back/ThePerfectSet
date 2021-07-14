import React, { useState } from 'React'
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';

const ArtistRecommendations = () => {

  return (
    <Container>
      <IoMdArrowBack/>
      <VscSettings/>
      <Row>
        <Image src={'https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/609147088669907f652110b0_report-an-issue(about-maps).jpeg'} width={'100%'} height={'auto'}></Image>
      </Row>
      <Row>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Recommended 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
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