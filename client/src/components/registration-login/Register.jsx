import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import AppContext from './../AppContext.js';
import axios from 'axios'

const Register = (props) => {

  const {username, website, bio, setUsername, setBio, setWebsite, serverUrl, isArtist, setIsArtist} = useContext(AppContext)

  const handleAccountNameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  }

  const handleBioChange = (e) => {
    setBio(e.target.value);
  }

  const handleRegister = () => {

    // axios.post(serverUrl + '/user', {
    //   username,
    //   website,
    //   bio,
    //   isArtist,
    // })
    console.log ('posted', username, website, bio)
    props.history.push('/TestHome')
  }

const handleArtist = (bool) => {
  setIsArtist(bool)
}

  return (
    <div className="rl">
    <h1>Register</h1>
    <Link to="/">Back</Link>
    <button onClick={()=> {handleArtist(true)}} className={isArtist ? "btn-selected" : ''}>Artist</button>
    <button onClick={()=> {handleArtist(false)}} className={!isArtist ? "btn-selected" : ''}>Fan</button>
    <input type="text" value={username} onChange={handleAccountNameChange}></input>
    <input type="text" value={website} onChange={handleWebsiteChange}></input>
    <input type="textarea" value={bio} onChange={handleBioChange}></input>
    <button onClick={handleRegister}>Create Account</button>
    </div>
  )

}

export default Register;