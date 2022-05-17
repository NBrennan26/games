import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameData from "./components/GameData";
import buildShip from "./features/scripts/buildship";
import checkOverflow from "./features/scripts/checkOverflow";
import checkCollision from "./features/scripts/checkCollision";
import random100 from "./features/scripts/random100";
import assignOrientation from "./features/scripts/assignOrientation";
import checkSunk from "./features/scripts/checkSunk";
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
  const [player1Turn, setPlayer1Turn] = useState(false);

  // Create ships and add them to player fleets
  useEffect(() => {
    const p1Carrier = buildShip("Carrier", 5, 1, assignOrientation(1));
    const p1Battle = buildShip("Battleship", 4, 1, assignOrientation(1));
    const p1Sub = buildShip("Submarine", 3, 1, assignOrientation(1));
    const p1Cruise = buildShip("Cruiser", 3, 1, assignOrientation(1));
    const p1Dest = buildShip("Destroyer", 2, 1, assignOrientation(1));
    const p2Carrier = buildShip("Carrier", 5, 2, assignOrientation(2));
    const p2Battle = buildShip("Battleship", 4, 2, assignOrientation(2));
    const p2Sub = buildShip("Submarine", 3, 2, assignOrientation(2));
    const p2Cruise = buildShip("Cruiser", 3, 2, assignOrientation(2));
    const p2Dest = buildShip("Destroyer", 2, 2, assignOrientation(2));

    let p1Ships = [];
    let p2Ships = [];

    p1Ships.push(p1Carrier, p1Battle, p1Sub, p1Cruise, p1Dest);
    p2Ships.push(p2Carrier, p2Battle, p2Sub, p2Cruise, p2Dest);

    setP1Fleet(p1Ships);
    setP2Fleet(p2Ships);
  }, []);

  // Place player 1 ships from click
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
    console.log(p2Fleet);
  };

  // Show placement preview on hover ovre player 1 board
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

  // Remove placement preview when mouse leaves the square
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

  // Rotate ship
  const handleRotate = () => {
    if (p1ShipsPlaced < 5) {
      p1Fleet[p1ShipsPlaced].rotateShip();
    }
  };

  // Find a safe grid on player 2 board to place ship, trigger placeP2Ship
  const checkP2Ship = (shipNo) => {
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

  // Place player 2 ship and update board
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

  const handlePlayerAttack = (e) => {
    if (p1ShipsPlaced === 5) {
      let tgtGrid = p2Board[e.target.classList[1]].index;
      let fleet = p2Fleet
      let board = p2Board
      let grid = board[tgtGrid]
      console.log(board);
      console.log(grid)
      // Check if ship is present at target grid
      if (p2Board[tgtGrid].hasShip) {
        // Ship Present - Process Hit
        fleet.forEach((ship) => {
          if (ship.gridArr.indexOf(tgtGrid) > -1) {
            
            ship.receiveHit(tgtGrid)
            console.log(ship)

            ship.updateStatus()
            console.log(fleet)


            
          }
        });
        // Update p2Fleet state
        setP2Fleet(fleet)
        console.log(p2Fleet)
        // console.log(p1Fleet)

        // Update board with Hit
        board[tgtGrid].isShot = true
        board[tgtGrid].isHit = true
        setP2Board(board)
      } else {
        // Update board with Miss
        board[tgtGrid].isShot = true
        board[tgtGrid].isMiss = true
        setP2Board(board)
      }
    }
    setCounter({
      player1: counter.player1 + 1,
      player2: counter.player2,
    });
  };

  const handleAiAttack = () => {
    let tgtGrid = random100();
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
          handlePlayerAttack={handlePlayerAttack}
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
