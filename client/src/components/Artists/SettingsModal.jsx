import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import { IoMdCloseCircle } from 'react-icons/Io';

import ReactDom from 'react-dom';


const SettingsModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogOut = () => console.log('logged out');

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
          {/* settings modal */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogOut}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<SettingsModal />);

export default SettingsModal;