import "./Phonetic.css";
import audioIcon from "./audioIcon.svg";
export default function Phonetic({ data }) {
  if (data != null) {
    let phonetics = data[0].phonetics;
    function playAudio() {
      document.getElementById("myAudio").play();
    }

    return (
      <div className="Phonetic">
        <h1>{data[0].word.charAt(0).toUpperCase() + data[0].word.slice(1)}</h1>
        {phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              {" "}
              <img
                src={audioIcon}
                width={"30px"}
                onClick={playAudio}
                className="pointer"
                alt="audio"
              />
              <audio src={phonetic.audio} id="myAudio" controls></audio>{" "}
              {phonetic.text}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
