import { useEffect, useState } from "react";

function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [playerSelect, setPlayerSelect] = useState("");
  const [aiSelect, setAiSelect] = useState("");
  const [roundResult, setRoundResult] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [gameMessage, setGameMessage] = useState("");
  const [roundCount, setRoundCount] = useState(0);

  const selectRock = () => {
    setPlayerSelect("rock");
    setRoundCount(roundCount + 1);
  };
  const selectPaper = () => {
    setPlayerSelect("paper");
  };
  const selectScissors = () => {
    setPlayerSelect("scissors");
  };

  const aiTurn = () => {
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
    } else if (roundCount > 1) {
      setGameMessage(`Both Players Chose ${playerSelect}. Try Again`);
    } else {
      setGameMessage("Select Your First Throw");
    }
  };

  const checkForWin = () => {
    if (playerScore === 3) {
      setGameResult("player");
      resetGame();
    } else if (aiScore === 3) {
      setGameResult("ai");
      resetGame();
    }
  };

  useEffect(() => {
    aiTurn();
    setGameMessage(`Player Chooses ${playerSelect}`);
  }, [playerSelect]);

  useEffect(() => {
    checkRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aiSelect]);

  useEffect(() => {
    updateStanding();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundResult]);

  useEffect(() => {
    checkForWin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerScore, aiScore]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameResult]);

  const resetGame = () => {
    setPlayerScore(0);
    setAiScore(0);
    setRoundCount(0)
    setPlayerSelect("");
    setAiSelect("");
  };

  return (
    <>
      <div className="game-title-cont">
        <span className="game-title">Rock Paper Scissors</span>
      </div>
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
          <div>{gameMessage}</div>
          <div>{gameResult}</div>
        </div>
      </div>
    </>
  );
}

export default RockPaperScissors;
