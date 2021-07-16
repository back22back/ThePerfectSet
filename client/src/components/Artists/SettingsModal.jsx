import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoMdCloseCircle } from 'react-icons/io'
import AppContext from './../AppContext.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SettingsModal = ({showSettings, setShowSettings, handleCloseSettings}) => {
  const handleLogOut = () => console.log('logged out');
  const appContext = useContext(AppContext);

  return (
    <>
      <Modal show={showSettings} onHide={handleCloseSettings}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Username</b>: {appContext.username} <br/>
          <b>Website</b>: {appContext.website} <br/>
          <b>Bio</b>: {appContext.bio}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogOut}>
            <Link to="/" style={{color: '#fff'}}>Log Out</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;