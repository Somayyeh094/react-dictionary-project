import "./Definition.css";

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
                  <div className="word-section" id="section" key={index}>
                    <button class="copy-btn" id="copy-btn" onClick={copyText}>
                      Copy
                    </button>
                    <br />
                    <h2>{defineword.partOfSpeech}</h2>
                    <div>
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
