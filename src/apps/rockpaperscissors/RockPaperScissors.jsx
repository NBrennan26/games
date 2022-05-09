/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./rps.css";

function RockPaperScissors() {
  const [playerRounds, setPlayerRounds] = useState(0);
  const [aiRounds, setAiRounds] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [playerSelect, setPlayerSelect] = useState("");
  const [aiSelect, setAiSelect] = useState("");
  const [roundResult, setRoundResult] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [gameWinner, setGameWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [playerMessage, setPlayerMessage] = useState("");
  const [aiMessage, setAiMessage] = useState("");
  const [gameMessage, setGameMessage] = useState("");

  const selectRock = () => {
    setPlayerSelect("rock");
    setPlayerRounds(playerRounds + 1);
    aiTurn();
  };
  const selectPaper = () => {
    setPlayerSelect("paper");
    setPlayerRounds(playerRounds + 1);
    aiTurn();
  };
  const selectScissors = () => {
    setPlayerSelect("scissors");
    setPlayerRounds(playerRounds + 1);
    aiTurn();
  };

  const aiTurn = () => {
    setAiRounds(aiRounds + 1);
    let num = Math.random();
    num <= 0.3333
      ? setAiSelect("rock")
      : num <= 0.6666 && num >= 0.3334
      ? setAiSelect("paper")
      : setAiSelect("scissors");
  };

  const checkRound = () => {
    if (
      (playerSelect === "rock" && aiSelect === "scissors") ||
      (playerSelect === "scissors" && aiSelect === "paper") ||
      (playerSelect === "paper" && aiSelect === "rock")
    ) {
      setRoundResult("player");
      setGameMessage("Player Wins this Round");
    } else if (
      (playerSelect === "rock" && aiSelect === "paper") ||
      (playerSelect === "paper" && aiSelect === "scissors") ||
      (playerSelect === "scissors" && aiSelect === "rock")
    ) {
      setRoundResult("ai");
      setGameMessage("Computer Wins this Round");
    } else if (
      (playerSelect === "rock" && aiSelect === "rock") ||
      (playerSelect === "paper" && aiSelect === "paper") ||
      (playerSelect === "scissors" && aiSelect === "scissors")
    ) {
      setRoundResult("tie");
      setGameMessage("This Round is a Tie");
    }
  };

  const updateStanding = () => {
    if (roundResult === "player") {
      setPlayerScore(playerScore + 1);
      checkForWin();
    } else if (roundResult === "ai") {
      setAiScore(aiScore + 1);
      checkForWin();
    }
  };

  const checkForWin = () => {
    if (playerScore === 3) {
      setGameResult("player");
      setGameWinner("Player");
      setGameOver(true);
    } else if (aiScore === 3) {
      setGameResult("ai");
      setGameWinner("Computer");
      setGameOver(true);
    } else {
      setRoundResult("");
    }
  };

  useEffect(() => {
    setPlayerMessage(`Player throws ${playerSelect}`);
    setAiMessage(`Computer throws ${aiSelect}`);
    checkRound();
  }, [aiRounds]);

  useEffect(() => {
    updateStanding();
  }, [roundResult]);

  useEffect(() => {
    checkForWin();
  }, [playerScore, aiScore]);

  const resetGame = () => {
    setPlayerRounds(0);
    setPlayerSelect("");
    setAiRounds(0);
    setAiSelect("");
    setPlayerScore(0);
    setAiScore(0);
    setRoundResult("");
    setGameResult("");
    setGameWinner("");
    setGameOver(false);
  };

  return (
    <div className="game-main">
      <div className="game-title-cont">
        <span className="game-title">Rock Paper Scissors</span>
      </div>
      {!gameOver ? (
        <div className="game-board">
          <div className="scoreboard">
            <div>Player Score: {playerScore}</div>
            <div>Computer Score: {aiScore}</div>
          </div>
          <div className="game-controls">
            <button className="rock-btn" onClick={selectRock}>
              Rock
            </button>
            <button className="paper-btn" onClick={selectPaper}>
              Paper
            </button>
            <button className="scissors-btn" onClick={selectScissors}>
              Scissors
            </button>
          </div>
          <div className="game-scripts">
            {aiRounds > 0 && (
              <div>
                <div>{playerMessage}</div>
                <div>{aiMessage}</div>
                <div>{gameMessage}</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="game-board">
          <div className="game-outcome">{gameWinner} Won!</div>
          <button className="game-reset-btn" onClick={resetGame}>
            Play Again?
          </button>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
