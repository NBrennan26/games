/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./ttt.css";

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
  const [gameBoard, setGameBoard] = useState({
    square0: null,
    square1: null,
    square2: null,
    square3: null,
    square4: null,
    square5: null,
    square6: null,
    square7: null,
    square8: null,
  });

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
      <div className={playerTurn === "player1" ? ("ttt-board-cont p1-board") : ("ttt-board-cont p2-board")}>
        <div className="ttt-square square-zero"></div>
        <div className="ttt-square square-one"></div>
        <div className="ttt-square square-two"></div>
        <div className="ttt-square square-three"></div>
        <div className="ttt-square square-four"></div>
        <div className="ttt-square square-five"></div>
        <div className="ttt-square square-six"></div>
        <div className="ttt-square square-seven"></div>
        <div className="ttt-square square-eight"></div>
      </div>
    </>
  );
}

export default TicTacToe;
