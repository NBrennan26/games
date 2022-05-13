import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameData from "./components/GameData";
import buildShip from "./features/scripts/buildship";
import checkOverflow from "./features/scripts/checkOverflow";
import "./bs.css";

function Battleship() {
  // const [player1, setPlayer1] = useState({});
  // const [player2, setPlayer2] = useState({});
  const [p1Fleet, setP1Fleet] = useState([]);
  const [p2Fleet, setP2Fleet] = useState([]);
  const [p1Board, setP1Board] = useState([]);
  const [p2Board, setP2Board] = useState([]);
  const [counter, setCounter] = useState({ player1: 0, player2: 0 });
  const [p1ShipsPlaced, setP1ShipsPlaced] = useState(0);
  const [p2ShipsPlaced, setP2ShipsPlaced] = useState(0);

  // Create ships and add them to player fleets
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

    let p1Ships = [];
    let p2Ships = [];

    p1Ships.push(p1Carrier, p1Battle, p1Sub, p1Cruise, p1Dest);
    p2Ships.push(p2Carrier, p2Battle, p2Sub, p2Cruise, p2Dest);

    setP1Fleet(p1Ships);
    setP2Fleet(p2Ships);
  }, []);

  const handlePlaceShip = (e) => {
    // Check which board was clicked
    if (e.target.parentElement.classList[1] === "player1-board") {
      // Check if there are still ships to place (0-4)

      if (p1Fleet[p1ShipsPlaced]) {
        // Check for overflow
        console.log(e.target.classList[1]);
        console.log(p1Fleet[p1ShipsPlaced].length);
        console.log(p1Fleet[p1ShipsPlaced].orientation);
  
        console.log(
          checkOverflow(
            e.target.classList[1],
            p1Fleet[p1ShipsPlaced].length,
            p1Fleet[p1ShipsPlaced].orientation
          )
        );
        if (
          checkOverflow(
            e.target.classList[1],
            p1Fleet[p1ShipsPlaced].length,
            p1Fleet[p1ShipsPlaced].orientation
          )
        ) {
          // Add ship's grids to the ship in the fleet
          p1Fleet[p1ShipsPlaced].placeShip(e.target.classList[1]);

          // For each ship's grid, mark as hasShip on board
          p1Fleet[p1ShipsPlaced].grids.forEach((grid) => {
            let square = p1Board[grid.coord];
            square.hasShip = true;
            let board = p1Board;
            board[grid.coord] = square;
            setP1Board(board);
          });

          // Increase Counters
          setP1ShipsPlaced(p1ShipsPlaced + 1);
          setCounter({
            player1: counter.player1 + 1,
            player2: counter.player2,
          });
        }
      }
    } else {
      // Same, but for player 2
      if (p2Fleet[p2ShipsPlaced]) {
        p2Fleet[p2ShipsPlaced].placeShip(e.target.classList[1]);

        p2Fleet[p2ShipsPlaced].grids.forEach((grid) => {
          let square = p2Board[grid.coord];
          square.hasShip = true;
          let board = p2Board;
          board[grid.coord] = square;
          setP2Board(board);
        });

        setP1ShipsPlaced(p2ShipsPlaced + 1);
        // p2ShipsPlaced += 1;
        setCounter({
          player1: counter.player1,
          player2: counter.player2 + 1,
        });
      }
    }
  };

  // const checkCollision = function (grid, length, dir) {
  //   let counter = 0;
  //   for (let i = 0; i < length; i++) {
  //     if (dir === "Horizontal") {
  //       if (!p1.board.board[grid - 1 + i].hasShip) {
  //         counter += 1;
  //       }
  //     }
  //     if (dir === "Vertical") {
  //       if (!p1.board.board[grid - 1 + i * 10].hasShip) {
  //         counter += 1;
  //       }
  //     }
  //   }
  //   if (counter === length) {
  //     return true;
  //   }
  // };

  // useEffect(() => {
  //   console.log(p1Fleet);
  //   console.log(p1Board);
  //   console.log(p2Fleet);
  //   console.log(p2Board);
  // }, [p1Board, p2Board, p1Fleet, p2Fleet]);

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
          counter={counter}
        />
        <GameData />
      </div>
    </div>
  );
}

export default Battleship;
