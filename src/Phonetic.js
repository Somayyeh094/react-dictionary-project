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
        {phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              {" "}
              <img src={audioIcon} width={"30px"} onClick={playAudio} className="pointer" alt="audio" />
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
