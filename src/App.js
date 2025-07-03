import "./App.css";
import sunIcon from "./sunIcon.svg";
import moonIcon from "./moonIcon.svg";

import Search from "./Search.js";
function App() {
  function changeTheme() {
    document.querySelector(".App").classList.toggle("dark");
    document.querySelector(".moon-color").classList.toggle("hidden");
    document.querySelector(".sun-color").classList.toggle("hidden");
  }
  return (
    <div className="App">
      <header>
        <button className="change-theme" onClick={changeTheme}>
          <img
            src={sunIcon}
            alt="light-mode"
            className="sun-color hidden"
            title="Switch to light mode"
          />{" "}
          <img
            src={moonIcon}
            alt="light-mode"
            className="moon-color"
            title="Switch to dark mode"
          />
        </button>
      </header>
      <Search />
      <footer className="text-center">
        {" "}
        This project was powered by SheCodes API and{" "}
        <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">
          {" "}
          Free Dictionary API
        </a>
        , and is{" "}
        <a
          href="https://github.com/Somayyeh094/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}

export default App;
