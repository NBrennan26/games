import { useEffect, useState } from "react";
import SketchPad from "./SketchPad";
import "./eas.css";

function EtchaSketch() {
  const [boxSize, setBoxSize] = useState(30);

  return (
    <div className="etch-a-sketch-cont">
      <div className="game-title-cont">
        <span className="game-title">Etch-a-Sketch</span>
      </div>
      <div className="etch-sketch-board">
        <SketchPad pixels={boxSize ** 2} />
      </div>
    </div>
  );
}

export default EtchaSketch;
