import axios from "axios";
import Phonetic from "./Phonetic.js";
import { useState } from "react";
import magnifier from "./magnifier.svg";
import "./Search.css";
import Definition from "./Definition.js";

export default function Search() {
  let [word, setWord] = useState("");
  let [dicData, setDicData] = useState(null);

  function getResponse(response) {
    setDicData(response.data);
    console.log(dicData);
  }

  function getApi() {
    console.log(word);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(getResponse);
  }
  function handleForm(event) {
    event.preventDefault();
    getApi();
  }
  function getWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <div className="form-control">
        <form onSubmit={handleForm} className="text-center">
          <input
            type="search"
            placeholder="Search a word"
            onChange={getWord}
            required
          />
          <button typ="submit" className="search-button">
            <img src={magnifier} alt="search icon" width="35%" />
          </button>
        </form>
      </div>
      <div className="results">
        <Phonetic data={dicData} />
        <Definition data={dicData} />
      </div>
    </div>
  );
}
