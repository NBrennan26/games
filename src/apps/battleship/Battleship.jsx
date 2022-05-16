import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameData from "./components/GameData";
import buildShip from "./features/scripts/buildship";
import checkOverflow from "./features/scripts/checkOverflow";
import checkCollision from "./features/scripts/checkCollision";
import random100 from "./features/scripts/random100";
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
        // Check for overflow && collision with already placed ship
        if (
          checkOverflow(
            e.target.classList[1],
            p1Fleet[p1ShipsPlaced].length,
            p1Fleet[p1ShipsPlaced].orientation
          ) &&
          checkCollision(
            e.target.classList[1],
            p1Fleet[p1ShipsPlaced].length,
            p1Fleet[p1ShipsPlaced].orientation,
            p1Board
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

          // Trigger p2 ship placement
          if (p1ShipsPlaced === 0) {
            for (let i = 0; i < 5; i++) {
              checkP2Ship(i);
            }
          }

          // Increase Counters
          setP1ShipsPlaced(p1ShipsPlaced + 1);
          setCounter({
            player1: counter.player1 + 1,
            player2: counter.player2,
          });
        }
      }
    }
  };

  const handleHoverIn = (e) => {
    if (
      e.target.parentElement.classList[1] === "player1-board" &&
      p1ShipsPlaced < 5
    ) {
      if (p1Fleet[p1ShipsPlaced]) {
        if (
          checkOverflow(
            e.target.classList[1],
            p1Fleet[p1ShipsPlaced].length,
            p1Fleet[p1ShipsPlaced].orientation
          ) &&
          checkCollision(
            e.target.classList[1],
            p1Fleet[p1ShipsPlaced].length,
            p1Fleet[p1ShipsPlaced].orientation,
            p1Board
          )
        ) {
          if (p1Fleet[p1ShipsPlaced].orientation === "Horizontal") {
            let gridNo = parseInt(e.target.classList[1]);
            for (let i = 0; i < p1Fleet[p1ShipsPlaced].length; i++) {
              let tgtGrid = document.getElementById(gridNo + i);
              tgtGrid.classList.add("shadow");
            }
          } else {
            let gridNo = parseInt(e.target.classList[1]);
            for (let i = 0; i < p1Fleet[p1ShipsPlaced].length; i++) {
              let tgtGrid = document.getElementById(gridNo + i * 10);
              tgtGrid.classList.add("shadow");
            }
          }
        }
      }
    }
  };

  const handleHoverOut = (e) => {
    if (
      e.target.parentElement.classList[1] === "player1-board" &&
      p1ShipsPlaced < 5
    ) {
      if (p1Fleet[p1ShipsPlaced]) {
        if (p1Fleet[p1ShipsPlaced].orientation === "Horizontal") {
          let gridNo = parseInt(e.target.classList[1]);
          for (let i = 0; i < p1Fleet[p1ShipsPlaced].length; i++) {
            let tgtGrid = document.getElementById(gridNo + i);
            if (tgtGrid) {
              tgtGrid.classList.remove("shadow");
            }
          }
        } else {
          let gridNo = parseInt(e.target.classList[1]);
          for (let i = 0; i < p1Fleet[p1ShipsPlaced].length; i++) {
            let tgtGrid = document.getElementById(gridNo + i * 10);
            if (tgtGrid) {
              tgtGrid.classList.remove("shadow");
            }
          }
        }
      }
    }
  };

  const handleRotate = () => {
    if (p1ShipsPlaced < 5) {
      let ship = p1Fleet[p1ShipsPlaced];
      if (ship.orientation === "Horizontal") {
        ship.orientation = "Vertical";
      } else if (ship.orientation === "Vertical") {
        ship.orientation = "Horizontal";
      }
    }
  };

  const checkP2Ship = (shipNo) => {
    // Get Ship and update Orientation randomly
    let ship = p2Fleet[shipNo];
    let randomNo = Math.random();
    if (randomNo < 0.5) {
      ship.orientation = "Vertical";
      setP2Fleet([...p2Fleet, (p2Fleet[shipNo] = ship)]);
    }

    // Get random grid and check for overflow/overlap
    let gridNo = random100();
    if (
      checkOverflow(
        gridNo,
        p2Fleet[shipNo].length,
        p2Fleet[shipNo].orientation
      ) &&
      checkCollision(
        gridNo,
        p2Fleet[shipNo].length,
        p2Fleet[shipNo].orientation,
        p2Board
      )
    ) {
      // No Overflow/Overlap, so continue to place
      placeP2Ship(shipNo, gridNo);
    } else if (
      !checkOverflow(
        gridNo,
        p2Fleet[shipNo].length,
        p2Fleet[shipNo].orientation
      ) ||
      !checkCollision(
        gridNo,
        p2Fleet[shipNo].length,
        p2Fleet[shipNo].orientation,
        p2Board
      )
    ) {
      // Overflow/Overlap occurs, get new values
      checkP2Ship(shipNo);
    }
  };

  const placeP2Ship = (shipNo, gridNo) => {
    // Add ship's grids to the ship in the fleet
    p2Fleet[shipNo].placeShip(gridNo);

    // For each ship's grid, mark as hasShip on board
    p2Fleet[shipNo].grids.forEach((grid) => {
      let square = p2Board[grid.coord];
      square.hasShip = true;
      let board = p2Board;
      board[grid.coord] = square;
      setP2Board(board);
    });
  };

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
          p1ShipsPlaced={p1ShipsPlaced}
          handlePlaceShip={handlePlaceShip}
          handleHoverIn={handleHoverIn}
          handleHoverOut={handleHoverOut}
          handleRotate={handleRotate}
          counter={counter}
        />
        <GameData
          p1Fleet={p1Fleet}
          p2Fleet={p2Fleet}
          p1Board={p1Board}
          p2Board={p2Board}
          counter={counter}
          p1ShipsPlaced={p1ShipsPlaced}
        />
      </div>
    </div>
  );
}

export default Battleship;
