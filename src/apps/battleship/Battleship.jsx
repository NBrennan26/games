import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameData from "./components/GameData";
import GameOver from "./components/GameOver";
import buildShip from "./features/scripts/buildship";
import checkOverflow from "./features/scripts/checkOverflow";
import checkCollision from "./features/scripts/checkCollision";
import random100 from "./features/scripts/random100";
import assignOrientation from "./features/scripts/assignOrientation";
import "./bs.css";
import icon from "./features/images/bs-icon.png";

function Battleship() {
  const [p1Fleet, setP1Fleet] = useState([]);
  const [p2Fleet, setP2Fleet] = useState([]);
  const [p1Board, setP1Board] = useState([]);
  const [p2Board, setP2Board] = useState([]);
  const [counter, setCounter] = useState({ player1: 0, player2: 0 });
  const [p1ShipsPlaced, setP1ShipsPlaced] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(false);
  const [p2ShotSquares, setP2ShotSquares] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWinner, setGameWinner] = useState(null);

  useEffect(() => {
    document.title = "Games | Battleship";
  }, []);

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

  // Update P1 Fleet Status
  useEffect(() => {
    if (p1Fleet.length === 5) {
      setPlayer1Turn(true);
      p1Fleet[0].updateStatus();
      p1Fleet[1].updateStatus();
      p1Fleet[2].updateStatus();
      p1Fleet[3].updateStatus();
      p1Fleet[4].updateStatus();
    }
  }, [p1Fleet]);

  // Update P2 Fleet Status
  useEffect(() => {
    if (p2Fleet.length === 5) {
      p2Fleet[0].updateStatus();
      p2Fleet[1].updateStatus();
      p2Fleet[2].updateStatus();
      p2Fleet[3].updateStatus();
      p2Fleet[4].updateStatus();
    }
  }, [p2Fleet]);

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
  };

  // Show placement preview on hover over player 1 board
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

  // Handle Player 1's attack click (and trigger computer attack)
  const handlePlayerAttack = (e) => {
    if (p1ShipsPlaced === 5 && player1Turn && !gameOver) {
      let tgtGrid = p2Board[e.target.classList[1]].index;
      let fleet = p2Fleet;
      let board = p2Board;
      // Check if ship is present at target grid
      if (p2Board[tgtGrid].hasShip) {
        // Ship Present - Process Hit
        fleet.forEach((ship) => {
          if (ship.gridArr.indexOf(tgtGrid) > -1) {
            ship.receiveHit(tgtGrid);
            ship.updateStatus();
          }
        });
        // Update p2Fleet state
        setP2Fleet(fleet);

        // Update board with Hit
        board[tgtGrid].isShot = true;
        board[tgtGrid].isHit = true;
        setP2Board(board);
      } else {
        // Update board with Miss
        board[tgtGrid].isShot = true;
        board[tgtGrid].isMiss = true;
        setP2Board(board);
      }
      setCounter({
        player1: counter.player1 + 1,
        player2: counter.player2,
      });
      setPlayer1Turn(false);
      handleAiAttack();
    }
  };

  // Handle Computer's Attack
  const handleAiAttack = () => {
    let tgtGrid = random100();
    let fleet = p1Fleet;
    let board = p1Board;
    let shotArr = p2ShotSquares;

    if (shotArr.indexOf(tgtGrid) === -1) {
      if (p1Board[tgtGrid].hasShip) {
        // Ship Present - Process Hit
        fleet.forEach((ship) => {
          if (ship.gridArr.indexOf(tgtGrid) > -1) {
            ship.receiveHit(tgtGrid);
            ship.updateStatus();
          }
        });
        // Update p2Fleet state
        setP1Fleet(fleet);

        // Update board with Hit
        board[tgtGrid].isShot = true;
        board[tgtGrid].isHit = true;
        setP1Board(board);
      } else {
        // Update board with Miss
        board[tgtGrid].isShot = true;
        board[tgtGrid].isMiss = true;
        setP1Board(board);
      }
      shotArr.push(tgtGrid);
      setP2ShotSquares(shotArr);
      setCounter({
        player1: counter.player1,
        player2: counter.player2 + 1,
      });
      setPlayer1Turn(true);
    } else {
      handleAiAttack();
    }
  };

  // Check End Game (All fleet ships sunk)
  useEffect(() => {
    let p1Sunk = 0;
    let p2Sunk = 0;
    p1Fleet.forEach((ship) => {
      if (ship.isSunk) {
        p1Sunk += 1;
      }
    });
    p2Fleet.forEach((ship) => {
      if (ship.isSunk) {
        p2Sunk += 1;
      }
    });
    if (p2Sunk === 5) {
      setGameWinner("player1");
      setGameOver(true);
    } else if (p1Sunk === 5) {
      setGameWinner("player2");
      setGameOver(true);
    }
  }, [p1Fleet, p2Fleet, counter]);

  // Reset Game Data
  const handleReset = () => {
    let p1TempFleet = p1Fleet;
    let p2TempFleet = p2Fleet;
    let p1TempBoard = p1Board;
    let p2TempBoard = p2Board;

    p1TempFleet.forEach((ship) => {
      ship.grids = [];
      ship.isSunk = false;
      ship.orientation = "Horizontal";
      ship.status = "Okay";
    });
    p2TempFleet.forEach((ship) => {
      ship.grids = [];
      ship.isSunk = false;
      ship.orientation = assignOrientation(2);
      ship.status = "Unknown";
    });
    p1TempBoard.forEach((square) => {
      square.hasShip = false;
      square.isShot = false;
      square.isHit = false;
      square.isMiss = false;
    });
    p2TempBoard.forEach((square) => {
      square.hasShip = false;
      square.isShot = false;
      square.isHit = false;
      square.isMiss = false;
    });

    setP1Fleet(p1TempFleet);
    setP2Fleet(p2TempFleet);
    setP1Board(p1TempBoard);
    setP2Board(p2TempBoard);
    setCounter({ player1: 0, player2: 0 });
    setP1ShipsPlaced(0);
    setPlayer1Turn(true);
    setP2ShotSquares([]);
    setGameOver(false);
    setGameWinner(null);
  };

  return (
    <div className="battleship-cont">
      <div className="bs-title-cont">
        <span className="bs-title">
          <img className="bs-title-icon" src={icon} alt="Battleship Icon" />
          Battleship
        </span>
      </div>
      {!gameWinner ? (
        <div className="bs-board-cont">
          <GameBoard
            setP1Board={setP1Board}
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
            p1ShipsPlaced={p1ShipsPlaced}
          />
        </div>
      ) : (
        <GameOver gameWinner={gameWinner} handleReset={handleReset} />
      )}
    </div>
  );
}

export default Battleship;
