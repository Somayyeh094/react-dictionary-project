import { useState,useEffect } from 'react';
import './App.css';
import sunIcon from "./sunIcon.svg";
import moonIcon from "./moonIcon.svg";
function App() {

  function changeTheme() {
    let body = document.querySelector(".App");
    body.classList.toggle("dark");
    document.querySelector(".moon-color").classList.toggle("hidden");
    document.querySelector(".sun-color").classList.toggle("hidden");
  }
  return (
    <div className="App">
      <button class="change-theme" onClick={changeTheme}>
            <img
              src={sunIcon}
              width="25"
              alt="light-mode"
              className="sun-color hidden" title='Light theme'
            />{" "}
            <img src={moonIcon} width="25" alt="light-mode" className="moon-color" title='Dark theme' />
          </button>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
