import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row, Col, Form } from 'react-bootstrap';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai'
import { VscSettings } from 'react-icons/vsc';
import axios from 'axios';
import GoogleMap from './GoogleMap.jsx';
import SettingsModal from './SettingsModal.jsx';
import DatePickerModal from './DatePickerModal.jsx';
import ArtistHome from './ArtistHome.jsx';
import AppContext from './../AppContext.js'

const ArtistRecommendations = ({home, setHome}) => {
  const [search, setSearch] = useState(false);
  const [recommendedList, setRecommendedList] = useState([]);
  const [cityName, setCityName] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, onDateChange] = useState(new Date());
  const [time, onTimeChange] = useState('10:00:00');
  const [dateSelected, setDateSelected] = useState(false);
  const [bookingType, setBookingType] = useState('hotels');
  const [businessId, setBusinessId] = useState('Wxxvi3LZbHNIDwJ-ZimtnA');
  const [businessName, setBusinessName] = useState('The Venetian Las Vegas');
  const [lat, setLat] = useState(36.121189);
  const [lng, setLng] = useState(-115.169657);
  const {page, form, button, selected, heading} = useContext(AppContext).theme;

  useEffect(() => {
    if (recommendedList.length !== 0) {
      setSearch(true);
    }
  }, [recommendedList])

  useEffect(() => {
    if (dateSelected) {
      axios.post('/booking/newbooking',
        {
          booking_date: date,
          booking_type: bookingType,
          business_id: businessId,
          latitude: lat,
          longitude: lng,
          booking_time: time,
          business_name: businessName,
          user_id: 1
        }).then((response) => {
        console.log(response);
        setDateSelected(false);
      })
    }
  }, [dateSelected])

  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);
  const handleCloseDatePicker = () => setShowDatePicker(false);
  const handleShowDatePicker = () => setShowDatePicker(true);

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  }

  const handleBookingTypeChange = (e) => {
    setBookingType(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get('/businesses', { params: {location: cityName, categories: bookingType}})
    . then((results) => {
      setRecommendedList(results.data);
    });
  }

  const handleAddBooking = (e) => {
    setShowDatePicker(true);

  }

  return (
    <>
      <Container fluid>
      <SettingsModal
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        handleCloseSettings={handleCloseSettings}
      />
      <DatePickerModal
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        handleCloseDatePicker={handleCloseDatePicker}
        date={date}
        onDateChange={onDateChange}
        time={time}
        onTimeChange={onTimeChange}
        dateSelected={dateSelected}
        setDateSelected={setDateSelected}
      />
      <Row className='justify-content-between align-items-center'>
        <Link to="/Artists/Home">
          <IoMdArrowBack
            style={{margin:'.5vh', fontSize: '3vh', color: '#fff'}}
          />
        </Link>
        <h3 style={button}>Recommendations</h3>
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
                      <Card.Link href={recommendedItem.yelp_url}>Website Link</Card.Link> <br/>
                      <b>Address</b>: {recommendedItem.address} <br/>
                      <b>Phone</b> : {recommendedItem.phone} <br/>
                      <Button
                        variant="success"
                        value={recommendedItem.id}
                        onClick={handleAddBooking}
                        style={button}
                      >
                        Add to Bookings
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })}
        </Accordion>
      </Row>
          : null
        }
    </Container>
    </>
  );
}

export default ArtistRecommendations;