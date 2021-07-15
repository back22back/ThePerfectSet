import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IoMdCloseCircle } from 'react-icons/Io';

const SettingsModal = ({showSettings, setShowSettings, handleCloseSettings}) => {
  const handleLogOut = () => console.log('logged out');

  return (
    <>
      <Modal show={showSettings} onHide={handleCloseSettings}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Username</b>: Username1 <br/>
          <b>Website</b>: http://rocker.com <br/>
          <b>Bio</b>: I always turn it up to 11
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

// render(<SettingsModal />);

export default SettingsModal;