import axios from "axios";
import Phonetic from "./Phonetic.js";
import { useState } from "react";
import magnifier from "./magnifier.svg";
import "./Search.css";
import Definition from "./Definition.js";
import { BeatLoader } from "react-spinners";
import Photos from "./Photos.js"

export default function Search() {
  let [word, setWord] = useState("rain");
  let [dicData, setDicData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function getResponse(response) {
    setDicData(response.data);
    setLoaded(true);
    console.log(dicData);

    let photoApiKey =
      "puo43omyT4W3x3YUXWnFtDoxCDETPSNmntMUnFOGaQ19O2ymRKS1Sxrq";
    let photoUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios
      .get(photoUrl, {
        headers: {
          Authorization: `${photoApiKey}`,
        },
      })
      .then(getPhotoResponse);
  }
  function getPhotoResponse(response) {
    setPhotos(response.data);
    console.log(photos);
  }

  function errors(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      alert(`No Definitions Found for "${(word)}"`);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      alert("Please try it later...");
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      alert("Please try again!");
    }
    console.log(error.config);
  }

  function getApi() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(getResponse)
      .catch(errors);
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
        <h2 className="label text-center mt-3">
          What word do you want to look up?
        </h2>

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
          <Photos data={photos} />
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
