import { useEffect, useState } from "react";
import Pixel from "./Pixel"

function EtchaSketch() {
  const [boxSize, setBoxSize] = useState(30)
  return (
    <div className="etch-a-sketch-cont">
      <div className="game-title-cont">
        <span className="game-title">Etch-a-Sketch</span>
      </div>
      <div className="game-board">
      <Pixel />
      </div>
    </div>
  );
}

export default EtchaSketch;
