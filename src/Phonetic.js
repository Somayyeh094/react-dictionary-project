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
        <h2>{data[0].word.charAt(0).toUpperCase() + data[0].word.slice(1)}</h2>
        {phonetics.map(function (phonetic, index) {
          if (phonetic.audio !== "") {
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
          } else {
            return (
              <span key={index}>
                {phonetic.text}
              </span>
            );
            
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
