
import "./Synonyms.css"

export default function Synonyms({ data }) {
  if (data.synonyms.length>0) {
    let synonyms = data.synonyms;
    return (
      <div className="Synonyms">
        <strong>Synonyms</strong>:
        {synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
             
                {index + 1}-{synonym}
           
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
