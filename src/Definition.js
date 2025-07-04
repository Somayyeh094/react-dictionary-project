import "./Definition.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Definition({ data }) {
  if (data != null) {
    let definitions = data;
    function copyText() {
      let section = document.getElementById("section");
      navigator.clipboard.writeText(section.innerText);
      alert("copied!");
    }
    return (
      <div className="Definition">
        {definitions.map(function (define, index) {
          return (
            <div key={index}>
              {define.meanings.map(function (defineword, index) {
                return (
                  <div className="word-section" key={index}>
                    <button
                      className="copy-btn"
                      id="copy-btn"
                      onClick={copyText}
                    >
                      Copy
                    </button>
                    <div id="section">
                      <h3>{defineword.partOfSpeech}</h3>
                      {defineword.definitions.map(function (word, index) {
                        if (word.hasOwnProperty("example")) {
                          return (
                            <div key={index}>
                              <p>
                                <strong> {index + 1}-Definition</strong>:{" "}
                                {word.definition}
                              </p>

                              <p>
                                <em>Example : {word.example}</em>
                              </p>
                            </div>
                          );
                        } else {
                          return (
                            <div key={index}>
                              <p>
                                <strong> {index + 1}-Definition</strong>:{" "}
                                {word.definition}
                              </p>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <Synonyms data={defineword} />
                    <Antonyms data={defineword} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
