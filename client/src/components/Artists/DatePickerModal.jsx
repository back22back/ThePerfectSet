import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';


const DatePickerModal = () => {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Header>
        <Modal.Body>
          <DateTimePicker
            onChange={onChange}
            value={value}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Select
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<DatePickerModal />);

export default DatePickerModal;