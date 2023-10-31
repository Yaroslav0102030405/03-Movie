import { useLayoutEffect, useState } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';
// import { doc } from "prettier";

const DarkMode = () => {
  const setDarkMode = () => {
    document.body.className = 'dark-theme';
    localStorage.setItem('selectedTheme', 'dark-theme');
  };

  const setLightMode = () => {
    document.body.className = 'light-theme';
    localStorage.setItem('selectedTheme', 'light-theme');
  };

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark-theme') {
    setDarkMode();
  }

  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        // disabled="false"
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark-theme'}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
