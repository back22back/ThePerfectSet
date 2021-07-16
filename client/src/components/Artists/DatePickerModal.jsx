import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';

const DatePickerModal = ({date, onDateChange, time, onTimeChange, showDatePicker, setShowDatePicker, handleCloseDatePicker, dateSelected, setDateSelected}) => {

  return (
    <>
      <Modal show={showDatePicker} onHide={handleCloseDatePicker} >
        <Modal.Header closeButton>
          <Modal.Title>Date Picker</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:'30vh', width:'auto'}}>
          <Calendar
            onChange={onDateChange}
            value={date}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => {
            setDateSelected(true);
            handleCloseDatePicker();
            }
          }>
            Save Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DatePickerModal;