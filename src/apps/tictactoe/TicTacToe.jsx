/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./ttt.css";
import GameSquare from "./GameSquare";

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState("player1");
  const [turnCount, setTurnCount] = useState(1);
  const [player1, setPlayer1] = useState({
    name: "Player One",
    human: true,
  });
  const [player2, setPlayer2] = useState({
    name: "Player Two",
    human: false,
  });
  const [selectedSquare, setSelectedSquare] = useState("");
  const [gameBoard, setGameBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // Click to claim a square
  const claimSquare = (e) => {
    let tgtSquare = parseInt(e.target.classList[1].slice(7));
    setSelectedSquare(tgtSquare);
  };

  // When selectedSquare changes, update gameBoard accordingly
  useEffect(() => {
    if (selectedSquare !== "" && gameBoard[selectedSquare] == null) {
      let updatedBoard = [...gameBoard];
      updatedBoard[selectedSquare] = playerTurn;
      setGameBoard(updatedBoard);
    }
  }, [selectedSquare]);

  // Upon gameBoard change, advanceGame
  useEffect(() => {
    if (selectedSquare !== "") {
      checkForWin();
      advanceGame();
    }
  }, [gameBoard]);

  // Increase turn count, change current player
  const advanceGame = () => {
    setTurnCount(turnCount + 1);
    if (playerTurn === "player1") {
      setPlayerTurn("player2");
    } else {
      setPlayerTurn("player1");
    }
  };

  // Check for game won (three in a row) or draw
  const checkForWin = () => {
    console.log(gameBoard[0]);
    console.log(gameBoard[3]);
    console.log(gameBoard[6]);

    if (
      (gameBoard[0] === gameBoard[3] &&
        gameBoard[3] === gameBoard[6] &&
        gameBoard[6] === "player1") ||
      (gameBoard[1] === gameBoard[4] &&
        gameBoard[4] === gameBoard[7] &&
        gameBoard[7] === "player1") ||
      (gameBoard[2] === gameBoard[5] &&
        gameBoard[5] === gameBoard[8] &&
        gameBoard[8] === "player1") ||
      (gameBoard[0] === gameBoard[1] &&
        gameBoard[1] === gameBoard[2] &&
        gameBoard[2] === "player1") ||
      (gameBoard[3] === gameBoard[4] &&
        gameBoard[4] === gameBoard[5] &&
        gameBoard[5] === "player1") ||
      (gameBoard[6] === gameBoard[7] &&
        gameBoard[7] === gameBoard[8] &&
        gameBoard[8] === "player1") ||
      (gameBoard[0] === gameBoard[4] &&
        gameBoard[4] === gameBoard[8] &&
        gameBoard[8] === "player1") ||
      (gameBoard[2] === gameBoard[4] &&
        gameBoard[4] === gameBoard[6] &&
        gameBoard[6] === "player1")
    ) {
      // player one wins
      console.log("player 1 wins");
    } else if (
      (gameBoard[0] === gameBoard[3] &&
        gameBoard[3] === gameBoard[6] &&
        gameBoard[6] === "player2") ||
      (gameBoard[1] === gameBoard[4] &&
        gameBoard[4] === gameBoard[7] &&
        gameBoard[7] === "player2") ||
      (gameBoard[2] === gameBoard[5] &&
        gameBoard[5] === gameBoard[8] &&
        gameBoard[8] === "player2") ||
      (gameBoard[0] === gameBoard[1] &&
        gameBoard[1] === gameBoard[2] &&
        gameBoard[2] === "player2") ||
      (gameBoard[3] === gameBoard[4] &&
        gameBoard[4] === gameBoard[5] &&
        gameBoard[5] === "player2") ||
      (gameBoard[6] === gameBoard[7] &&
        gameBoard[7] === gameBoard[8] &&
        gameBoard[8] === "player2") ||
      (gameBoard[0] === gameBoard[4] &&
        gameBoard[4] === gameBoard[8] &&
        gameBoard[8] === "player2") ||
      (gameBoard[2] === gameBoard[4] &&
        gameBoard[4] === gameBoard[6] &&
        gameBoard[6] === "player2")
    ) {
      // player two wins
      console.log("player 2 wins");
    } else if (turnCount === 9) {
      // Draw
      console.log("draw");
    }
  };

  return (
    <>
      <div className="game-title-cont">
        <span className="game-title">Tic-Tac-Toe</span>
      </div>
      <div className="ttt-data-cont">
        <div className="ttt-controls"></div>
        <div className="ttt-scripts"></div>
        <div className="scorebaord"></div>
      </div>
      <div
        className={
          playerTurn === "player1"
            ? "ttt-board-cont p1-board"
            : "ttt-board-cont p2-board"
        }
      >
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={0}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={1}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={2}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={3}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={4}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={5}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={6}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={7}
        />
        <GameSquare
          claimSquare={claimSquare}
          gameBoard={gameBoard}
          square={8}
        />
      </div>
    </>
  );
}

export default TicTacToe;
