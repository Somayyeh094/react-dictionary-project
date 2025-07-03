import "./Definition.css"



export default function Definition({ data }) {
  if (data != null) {
    let definitions = data;

    return (
      <div className="Definition">
        {definitions.map(function (define, index) {
          return (
            <div key={index}>
              {define.meanings.map(function (defineword, index) {
                return (
                  <div className="word-section" key={index}>
                    <h2>
                    {defineword.partOfSpeech}
                    </h2>
                    <div>
                      {defineword.definitions.map(function (word, index) {
                        return (
                          <div key={index}>
                            <p>
                              <strong> {index + 1}-Definition</strong>:{" "}
                              {word.definition}
                            </p>
                            <p>
                              <strong>Example</strong>: <em>{word.example}</em>
                            </p>
                          </div>
                        );
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
