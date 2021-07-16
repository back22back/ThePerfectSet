import React, {useState, useContext} from 'react';
import AppContext from './../AppContext.js';

const ThemeSetter = (props) => {
  const {user_id, username, website, bio, setUsername, setBio, setWebsite, serverUrl, isArtist, setIsArtist} = useContext(AppContext)
  const {page, form, button, selected, heading} = useContext(AppContext).theme;

  return (
    <div className="theme-switch">
      <input className="theme-switch"input type="range"></input>
    </div>

  )

};

export default ThemeSetter;