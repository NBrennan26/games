/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

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
  const [playerMessage, setPlayerMessage] = useState("")
  const [aiMessage, setAiMessage] = useState("")
  const [gameMessage, setGameMessage] = useState("")


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
    } else if (
      (playerSelect === "rock" && aiSelect === "paper") ||
      (playerSelect === "paper" && aiSelect === "scissors") ||
      (playerSelect === "scissors" && aiSelect === "rock")
    ) {
      setRoundResult("ai");
    } else if (
      (playerSelect === "rock" && aiSelect === "rock") ||
      (playerSelect === "paper" && aiSelect === "paper") ||
      (playerSelect === "scissors" && aiSelect === "scissors")
    ) {
      setRoundResult("tie");
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
    console.log(playerSelect);
    console.log(aiSelect);
    checkRound();
  }, [aiRounds]);

  useEffect(() => {
    updateStanding();
  }, [roundResult]);

  useEffect(() => {
    checkForWin();
  }, [playerScore, aiScore]);

  useEffect(() => {}, [gameResult]);

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
    <>
      <div className="game-title-cont">
        <span className="game-title">Rock Paper Scissors</span>
      </div>
      {!gameOver ? (
        <div className="game-board">
          <div className="scorebaord">
            <div>Player Score: {playerScore}</div>
            <div>Computer Score: {aiScore}</div>
          </div>
          <div className="game-controls">
            <button onClick={selectRock}>Rock</button>
            <button onClick={selectPaper}>Paper</button>
            <button onClick={selectScissors}>Scissors</button>
          </div>
          <div className="game-scripts">
            
            
            <div>Player: {playerMessage}</div>
            <div>Ai: {aiMessage}</div>
            <div>Game Message: {gameMessage}</div>
            <div>Round Result: {roundResult}</div>
          </div>
        </div>
      ) : (
        <>
          <div>{gameWinner} Won!</div>
          <button onClick={resetGame}>Play Again? </button>
        </>
      )}

      <br />
      <br />
      <br />
      <div>
        <span>Current Values: </span>
        <div>Player Rounds: {playerRounds}</div>
        <div>AI Rounds: {aiRounds}</div>
        <div>Player Score: {playerScore}</div>
        <div>AI Score: {aiScore}</div>
        <div>Player Select: {playerSelect}</div>
        <div>AI Select: {aiSelect}</div>
        <div>Round Result: {roundResult}</div>
        <div>Game Result: {gameResult}</div>
        <div>Game Winner: {gameWinner}</div>
        <div>Game Over: {gameOver}</div>
        <div>Game Message: {gameMessage}</div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default RockPaperScissors;
