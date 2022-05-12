import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameData from "./components/GameData";
import buildShip from "./features/scripts/buildship";
import "./bs.css";

function Battleship() {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [p1Fleet, setP1Fleet] = useState([]);
  const [p2Fleet, setP2Fleet] = useState([]);
  const [p1Board, setP1Board] = useState([]);
  const [p2Board, setP2Board] = useState([]);

  const handlePlaceShip = (e) => {
    console.log(e.target.parentElement.classList[1]);
    console.log(e.target.classList[1]);
    console.log(p1Board[e.target.classList[1]]);
    if (e.target.parentElement.classList[1] === "player1-board") {
      let square = p1Board[e.target.classList[1]];
      square.hasShip = true;
      let board = p1Board;
      board[e.target.classList[1]] = square;
      setP1Board(board);
    } else {
      let square = p2Board[e.target.classList[1]];
      square.hasShip = true;
      let board = p2Board;
      board[e.target.classList[1]] = square;
      setP2Board(board);
    }
  };

  useEffect(() => {
    const p1Carrier = buildShip("Carrier", 5, 1);
    const p1Battle = buildShip("Battleship", 4, 1);
    const p1Sub = buildShip("Submarine", 3, 1);
    const p1Cruise = buildShip("Cruiser", 3, 1);
    const p1Dest = buildShip("Destroyer", 2, 1);
    const p2Carrier = buildShip("Carrier", 5, 2);
    const p2Battle = buildShip("Battleship", 4, 2);
    const p2Sub = buildShip("Submarine", 3, 2);
    const p2Cruise = buildShip("Cruiser", 3, 2);
    const p2Dest = buildShip("Destroyer", 2, 2);

    let p1Fleet = []
    let p2Fleet = []

    p1Fleet.push(p1Carrier, p1Battle, p1Sub, p1Cruise, p1Dest)
    p2Fleet.push(p2Carrier, p2Battle, p2Sub, p2Cruise, p2Dest)

    console.log("//////")
    console.log("fleets")
    console.log("//////")
    console.log(p1Fleet)
    console.log(p2Fleet)
  }, [])


  useEffect(() => {
    console.log(p1Board);
    console.log(p2Board);
  }, [p1Board, p2Board]);

  return (
    <div className="battleship-cont">
      <div className="bs-title-cont">
        <span className="bs-title">Battleship</span>
      </div>
      <div className="bs-board-cont">
        <GameBoard
          p1Board={p1Board}
          setP1Board={setP1Board}
          p2Board={p2Board}
          setP2Board={setP2Board}
          handlePlaceShip={handlePlaceShip}
        />
        <GameData />
      </div>
    </div>
  );
}

export default Battleship;
