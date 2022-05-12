import { useState } from "react";
import GameBoard from "./components/GameBoard"
import GameData from "./components/GameData"
import "./bs.css"

function Battleship() {
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [p1Fleet, setP1Fleet] = useState([])
  const [p2Fleet, setP2Fleet] = useState([])
  const [p1Board, setP1Board] = useState([])
  const [p2Board, setP2Board] = useState([])


  return (
    <div className="battleship-cont">
      <div className="bs-title-cont">
        <span className="bs-title">Battleship</span>
      </div>
      <div className="bs-board-cont">
        <GameBoard />
        <GameData />
      </div>
    </div>
  );
}

export default Battleship;
