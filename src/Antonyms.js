
import "./Synonyms.css";

export default function Antonyms({ data }) {
  if (data.antonyms.length > 0) {
    let antonyms = data.antonyms;
    console.log(antonyms);
    return (
      <div className="Antonyms">
        <strong>Antonyms</strong>:
        {antonyms.map(function (antonym, index) {
          return (
            <span key={index}>
              {index + 1}-{antonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
