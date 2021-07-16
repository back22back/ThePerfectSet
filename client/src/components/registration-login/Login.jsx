import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import AppContext from './../AppContext.js';
import axios from 'axios';

const Login = (props) => {
  const {user_id, setUser_id, username, website, bio, setUsername, setBio, setWebsite, serverUrl, isArtist, setIsArtist} = useContext(AppContext)
  const {page, form, button, selected, heading} = useContext(AppContext).theme;
  const handleAccountNameChange = (e) => {
    setUsername(e.target.value);
  }

  // const redirect = () => {
  //   console.log('isArtist', isArtist)
  //     if (isArtist) {
  //       props.history.push('/Artists/Home')
  //     } else {
  //       props.history.push('/Fans/Home')
  //    }
  // }

  const loginHandler = ()=> {
    axios.get(`http://localhost:4545/user?user=${username}`)
    .then((data)=>{
      let results = (data.data[0])
      setIsArtist(results.is_artist)
      setUser_id(results.user_id)
      setBio(results.bio)
      setWebsite(results.website)
      if (results.is_artist) {
        props.history.push('/Artists/Home')
      } else {
        props.history.push('/Fans/Home')
     }
    })
    .catch(()=>{alert('invalid username')})
  }


console.log(isArtist)
  return (
    <div className="rl">
      <Link to="/">Back</Link>
      <h1 style={heading}className="rl-title">Login</h1>
      <img src='/images/coversplash.jpeg' className="rl rl-img"/>
      <input className="rl-input" style={form} type="text" value={username} onChange={handleAccountNameChange}></input>
      <div className="btn-container">
        <button className="rl-lower-btn" style={button} onClick={()=>{loginHandler()}}>Login</button>
      </div>
    </div>
  )

};

export default Login;