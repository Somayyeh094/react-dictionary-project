import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./sunIcon.svg";
import moonIcon from "./moonIcon.svg";
import magnifier from "./magnifier.svg";
import axios from "axios";
function App() {
  let [word, setWord] = useState("");
  function changeTheme() {
    let body = document.querySelector(".App");
    body.classList.toggle("dark");
    document.querySelector(".moon-color").classList.toggle("hidden");
    document.querySelector(".sun-color").classList.toggle("hidden");
  }
  function getResponse(response) {}
  function getApi(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(getResponse);
  }
  function getWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="App">
      <header className="">
        <button class="change-theme" onClick={changeTheme}>
          <img
            src={sunIcon}
            alt="light-mode"
            className="sun-color hidden"
            title="Light theme"
          />{" "}
          <img
            src={moonIcon}
            alt="light-mode"
            className="moon-color"
            title="Dark theme"
          />
        </button>
      </header>
      <form onSubmit={getApi} className="text-center">
        <input type="search" placeholder="Search a word" onChange={getWord} />
        <button>
          <img src={magnifier} width="25" alt="search icon" />
        </button>
      </form>
    </div>
  );
}

export default App;
