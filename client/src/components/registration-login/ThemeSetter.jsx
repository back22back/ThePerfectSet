import React, {useState, useContext} from 'react';
import AppContext from './../AppContext.js';
import themes from './../themes.js';

const ThemeSetter = (props) => {
  const {theme, setTheme} = useContext(AppContext)
  const {page, form, button, selected, heading} = useContext(AppContext).theme;
  const handleChange = (e) => {
    if (e.target.value === "2") {
      setTheme(themes.rocker)
    } else {
      setTheme(themes.neon)
    }
  }
  return (
    <div className="theme-switch">
      <input className="theme-switch"input type="range" onChange={handleChange} min="0" max="2" step="2"></input>
    </div>
  )
};

export default ThemeSetter;