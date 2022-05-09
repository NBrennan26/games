/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./ttt.css";
import GameSquare from "./GameSquare";

function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState("player1");
  const [turnCount, setTurnCount] = useState(0);
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

  const claimSquare = (e) => {
    console.log(e.target);
    let tgtSquare = parseInt(e.target.classList[1].slice(7));
    setSelectedSquare(tgtSquare);
  };

  useEffect(() => {
    if (selectedSquare !== "" && gameBoard[selectedSquare] == null) {
      let updatedBoard = [...gameBoard]
      updatedBoard[selectedSquare] = playerTurn
      setGameBoard(updatedBoard);
      stateCheck();
    }
  }, [selectedSquare]);

  useEffect(() => {
    if (selectedSquare !== "") {
      advanceGame();
      stateCheck();
    }
  }, [gameBoard]);

  const stateCheck = () => {
    console.log("Player Turn", playerTurn);
    console.log("Turn Count", turnCount);
    console.log("Selected Square", selectedSquare);
    console.log("Game Board", gameBoard);
  };

  const advanceGame = () => {
    setTurnCount(turnCount + 1);
    if (playerTurn === "player1") {
      setPlayerTurn("player2");
    } else {
      setPlayerTurn("player1");
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

/*
<div
          className={
            gameBoard.square1 === "player2"
              ? "ttt-square square-1 p2-square"
              : gameBoard.square1 === "player1"
              ? "ttt-square square-1 p1-square"
              : "ttt-square square-1 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square1 === "player2"
            ? "O"
            : gameBoard.square1 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square2 === "player2"
              ? "ttt-square square-2 p2-square"
              : gameBoard.square2 === "player1"
              ? "ttt-square square-2 p1-square"
              : "ttt-square square-2 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square2 === "player2"
            ? "O"
            : gameBoard.square2 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square3 === "player2"
              ? "ttt-square square-3 p2-square"
              : gameBoard.square3 === "player1"
              ? "ttt-square square-3 p1-square"
              : "ttt-square square-3 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square3 === "player2"
            ? "O"
            : gameBoard.square3 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square4 === "player2"
              ? "ttt-square square-4 p2-square"
              : gameBoard.square4 === "player1"
              ? "ttt-square square-4 p1-square"
              : "ttt-square square-4 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square4 === "player2"
            ? "O"
            : gameBoard.square4 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square5 === "player2"
              ? "ttt-square square-5 p2-square"
              : gameBoard.square5 === "player1"
              ? "ttt-square square-5 p1-square"
              : "ttt-square square-5 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square5 === "player2"
            ? "O"
            : gameBoard.square5 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square6 === "player2"
              ? "ttt-square square-6 p2-square"
              : gameBoard.square6 === "player1"
              ? "ttt-square square-6 p1-square"
              : "ttt-square square-6 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square6 === "player2"
            ? "O"
            : gameBoard.square6 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square7 === "player2"
              ? "ttt-square square-7 p2-square"
              : gameBoard.square7 === "player1"
              ? "ttt-square square-7 p1-square"
              : "ttt-square square-7 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square7 === "player2"
            ? "O"
            : gameBoard.square7 === "player1"
            ? "X"
            : ""}
        </div>
        <div
          className={
            gameBoard.square8 === "player2"
              ? "ttt-square square-8 p2-square"
              : gameBoard.square8 === "player1"
              ? "ttt-square square-8 p1-square"
              : "ttt-square square-8 neutral-square"
          }
          onClick={claimSquare}
        >
          {gameBoard.square8 === "player2"
            ? "O"
            : gameBoard.square8 === "player1"
            ? "X"
            : ""}
        </div>
        */
