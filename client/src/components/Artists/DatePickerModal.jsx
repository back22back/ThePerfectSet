import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';


const DatePickerModal = ({showDatePicker, setShowDatePicker, handleCloseDatePicker}) => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Modal show={show} onHide={handleCloseDatePicker}>
        <Modal.Header closeButton>
          <Modal.Title>Date Time Picker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DateTimePicker
            onChange={onChange}
            value={value}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDatePicker}>
            Select
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DatePickerModal;