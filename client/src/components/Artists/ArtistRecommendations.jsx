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
  const [recommendedList, setRecommendedList] = useState([]);
  const [cityName, setCityName] = useState('');
  const [bookingType, setBookingType] = useState('musicvenues');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (recommendedList.length !== 0) {
      setSearch(true);
    }
  }, [recommendedList])

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
    console.log(`searching for city: ${cityName} and category: ${bookingType}`);
    axios.get('/businesses', { params: {location: cityName, categories: bookingType}})
    . then((results) => {
      setRecommendedList(results.data);
    });
  }

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
          <div>
            <IoMdArrowBack
              style={{margin:'.5vh', fontSize: '3vh', color: '#fff'}}
              onClick={()=>setHome(true)}
            />
            <Link to="/Artists/Home"></Link>
          </div>
          <h3 style={{color: '#fff'}}>Recommendations</h3>
          <VscSettings
            style={{margin:'.5vh', fontSize: '3vh', color: '#fff'}}
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
          <Form style={{zIndex:10, width:'375px'}} onSubmit={handleSearch}>
            <Form.Row className="align-items-center">
              <Form.Control type="text" placeholder="Enter city name" onChange={handleCityChange}/>
              <Form.Control
                as="select"
                id="inlineFormCustomSelect"
                custom
                onChange={handleBookingTypeChange}
              >
                <option value="musicvenues">Select a category...</option>
                <option value="musicvenues">Venues</option>
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
              </Form.Control>
            </Form.Row>
            <Button
              type="submit"
              variant='dark'
              style={{width:'375px'}}
            >
              Search
            </Button>
          </Form>
        </Row>
          { search ?
          <Row>
            <Accordion style={{width:'375px'}}>
              {recommendedList.map((recommendedItem, index) => {
                return (
                  <Card key={index}
                    bg={'dark'}
                    text={'light'}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey={index + 1}>
                      {recommendedItem.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index + 1}>
                      <Card.Body>
                        <b>Address</b>: {recommendedItem.address} <br/>
                        <b>Phone</b> : {recommendedItem.phone} <br/>
                        <Card.Link href={recommendedItem.yelp_url}>Website Link</Card.Link>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
              })}
          </Accordion>
        </Row>
            : <Row>
                <Image src="https://cdn.wallpapersafari.com/98/86/BF0GtP.jpg"></Image>
              </Row>
          }

      </Container>
        : null
      }
    </>
  );
}

export default ArtistRecommendations;