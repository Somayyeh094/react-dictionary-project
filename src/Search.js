import axios from "axios";
import Phonetic from "./Phonetic.js";
import { useState } from "react";
import magnifier from "./magnifier.svg";
import "./Search.css";
import Definition from "./Definition.js";
import { BeatLoader } from "react-spinners";

export default function Search() {
  let [word, setWord] = useState("hope");
  let [dicData, setDicData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function getResponse(response) {
    setDicData(response.data);
    setLoaded(true);
    console.log(dicData);

    let photoApiKey =
      "puo43omyT4W3x3YUXWnFtDoxCDETPSNmntMUnFOGaQ19O2ymRKS1Sxrq";
    let photoUrl = `https://api.pexels.com/v1/search?query=${response.data.word}&per_page=10`;
    axios
      .get(photoUrl, {
        headers: {
          Authorization: `Bearer ${photoApiKey}`,
        },
      })
      .then(getPhotoResponse);
  }
  function getPhotoResponse(response) {
    setPhotos(response.data);
    console.log(photos);
  }

  function getApi() {
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
  if (loaded) {
    return (
      <div className="Search">
        <h2 className="label text-center mt-3">What word do you want to look up?</h2>

        <form onSubmit={handleForm}>
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

        <div className="results">
          <Phonetic data={dicData} />
          <Definition data={dicData} />
        </div>
      </div>
    );
  } else {
    getApi();
    return (
      <div className="loading-first">
        <BeatLoader
          color="silver"
          loading="true"
          cssOverride=""
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p>Please wait...</p>
      </div>
    );
  }
}
