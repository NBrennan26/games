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
  const [gameOutcome, setGameOutcome] = useState({});
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    document.title = "Games | Tic-Tac-Toe";
  }, []);

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

  useEffect(() => {
    if (gameOutcome === "player1" || gameOutcome === "player2") {
      console.log("game was won");
    }
  }, [gameOutcome]);

  // Check for game won (three in a row) or draw
  const checkForWin = () => {
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
      setGameOutcome(player1);
      setGameOver(true);
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
      setGameOutcome(player2);
      setGameOver(true);
    } else if (turnCount === 9) {
      // Draw
      console.log("draw");
      setGameOutcome("draw");
      setGameOver(true);
    }
  };

  // Reset Game
  const resetGame = () => {
    setPlayerTurn("player1");
    setTurnCount(1);
    setPlayer1({
      name: "Player One",
      human: true,
    });
    setPlayer2({
      name: "Player Two",
      human: false,
    });
    setSelectedSquare("");
    setGameBoard([null, null, null, null, null, null, null, null, null]);
    setGameOutcome({});
    setGameOver(false);
  };

  return (
    <div className="tic-tac-toe-cont">
      <div className="game-title-cont">
        <span className="game-title">Tic-Tac-Toe</span>
      </div>
      {!gameOver ? (
        <>
          <div className="ttt-turn-tracker">
            {playerTurn === "player1"
              ? `${player1.name}'s Turn`
              : `${player2.name}'s Turn`}
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
      ) : (
        <div className="ttt-game-board">
          <div className="ttt-game-outcome">
            {gameOutcome.name ? `${gameOutcome.name} Wins` : "It's a Draw"}
          </div>
          <button className="ttt-reset-btn" onClick={resetGame}>
            Play Again?
          </button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
