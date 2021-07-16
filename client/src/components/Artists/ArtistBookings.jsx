import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card, Nav } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/io';
import { VscSettings } from 'react-icons/Vsc';
import Calendar from 'react-calendar';
import SettingsModal from './SettingsModal.jsx';

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}

const Bookings = ( {bookings} ) => {
  const [display, setDisplay] = useState();
  const [date, setDate] = useState();
  const [showSettings, setShowSettings] = useState(false);

  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);

  useEffect(()=> {
    const filtered = bookings.filter(each => {
      if (date) {
        return each.date === date;
      } else {
        return each.date;
      }
    });
    filtered.sort((a, b) => a.time - b.time);
    setDisplay(filtered);
  }, [bookings, date]);

  if (!display) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Row className="justify-content-between inline-flex">
        <Link to="/Artists/Home">
          <IoMdArrowBack
            style={{margin:'.5vh', fontSize: '3vh', color: 'white', zIndex: '2'}}
            onClick={()=>setHome(true)}
          />
        </Link>
        <h3 style={{color: 'white'}}>Bookings</h3>
        <VscSettings
          style={{margin:'.5vh', fontSize: '3vh', color: 'white', zIndex: '2'}}
          onClick={handleShowSettings}
          />
      </Row>
      <Row style={{
              width: '375px',
              height: '260px'
            }}>
      <Calendar onChange={(e)=> {
        const calendarDate = formatDate(e);
        if (date === calendarDate) {
          setDate();
        } else {
          setDate(calendarDate);
        }}} />
      </Row>
      <Accordion defaultActiveKey="0">
        {display.map((each, i) =>
          <Card key={i}
            bg={'dark'}
            text={'light'}>
            <Accordion.Toggle as={Card.Header} eventKey={`${i}`} >
              <Row className="justify-content-between">{`${each.name}   ${each.date} ${each.time}`} </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body>
                <Card.Img variant="top" src={`${each.image_url}`} style={{marginBottom: '10px'}} />
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