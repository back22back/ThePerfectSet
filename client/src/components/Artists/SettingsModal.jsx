import React, { useState } from 'React'
import ReactDom from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import { IoMdCloseCircle } from 'react-icons/Io'

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
          <Modal.Title>Settings</Modal.Title>
          <IoMdCloseCircle variant="secondary" onClick={handleClose}>
            Close
          </IoMdCloseCircle>
        </Modal.Header>
        <Modal.Body>
          {/* Name */}
          {/* Website */}
          {/* Bio */}
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