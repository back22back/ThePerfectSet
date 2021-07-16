import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import AppContext from './../AppContext.js';
import axios from 'axios'

const Register = (props) => {

  const {username, website, bio, setUsername, setBio, setWebsite, serverUrl, isArtist, setIsArtist} = useContext(AppContext)
  const {page, form, button, selected} = useContext(AppContext).theme;
  const [password, setPassword] = useState('password');
  const [portrait_url, setPortraitUrl] = useState('my-portrait.png')

  const handleAccountNameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  }
  const handleBioChange = (e) => {
    setBio(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setP(e.target.value);
  }
  const handlePortraitUrlChange = (e) => {
    setPortraitUrl(e.target.value);
  }
  const handleRegister = () => {

    // axios.post('http://localhost:4545' + '/user', {
    //   user_name: username,
    //   password,
    //   website,
    //   bio,
    //   portrait_url,
    //   isArtist,
    // })
    // .then(() => {
      if (isArtist) {
        props.history.push('/ArtistHome')
      } else {
        props.history.push('/FanHome')
      }
  //  })
    // console.log ('posted', username, website, bio)
  }

const handleArtist = (bool) => {
  setIsArtist(bool)
}

  return (
    <div className="rl" style={page}>
    <Link to="/">Back</Link>
    <h1>Register</h1>
    <div className="btn-container">
      <button className="reg-page-buttons"  onClick={()=> {handleArtist(true)}} style={isArtist ? selected : button}>Artist</button>
      <button className="reg-page-buttons"  onClick={()=> {handleArtist(false)}} style={!isArtist ? selected : button}>Fan</button>
    </div>
    <input type="text" value={username} onChange={handleAccountNameChange} className="rl-input" style={form}></input>
    <input type="textarea" value={password} onChange={handlePasswordChange} className="rl-input" style={form}></input>
    <input type="text" value={website} onChange={handleWebsiteChange} className="rl-input" style={form}></input>
    <input type="textarea" value={bio} onChange={handleBioChange} className="rl-input" style={form}></input>
    <input type="textarea" value={portrait_url} onChange={handlePortraitUrlChange} className="rl-input" style={form}></input>
    <button onClick={handleRegister}>Create Account</button>
    </div>
  )

}

export default Register;