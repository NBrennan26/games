import SketchPad from "./SketchPad";
import "./eas.css";

function EtchaSketch() {

  const handleReset = () => {
    window.location.reload(false)
  }

  return (
    <div className="etch-a-sketch-cont">
      <div className="etch-sketch-board">
        <span className="etch-sketch-title">Etch-A-Sketch</span>
        <SketchPad pixels={4704} />
        <div className="dial left-dial"></div>
        <div className="dial right-dial"></div>
      </div>
      <div className="etch-sketch-controls">
        <button className="etch-sketch-btn" onClick={handleReset}>Shake</button>
      </div>
    </div>
  );
}

export default EtchaSketch;
