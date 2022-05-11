import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import Table from "./Table";

const GameContainer = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bestTime, setBestTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const increaseCurrentScore = () => {
    if (currentScore >= 11) {
      setGameOver(true);
      setGameWon(true);
    }
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
    setGameOver(true);
  };

  // Start timer, set best time if needed
  const handleTimer = () => {
    if (currentScore === 0) {
      setStartTime(Date.now());
    } else if (currentScore >= 11) {
      let endTime = Date.now();
      let runTime = ((endTime - startTime) / 1000).toFixed(1);
      if (bestTime == null) {
        setBestTime(runTime);
      } else if (runTime < bestTime) {
        setBestTime(runTime);
      }
    }
  };

  // Update times
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentScore > 0) {
        const newTime = Date.now();
        setCurrentTime(((newTime - startTime) / 1000).toFixed(0));
      } else if (currentScore >= 11) {
        setCurrentTime(0);
      } else {
        setCurrentTime(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, currentTime, currentScore, gameOver, bestTime]);

  // Check and update highscore if needed
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  // Check if clicked, and handle score
  const handleScore = (clicked) => {
    if (clicked) {
      resetCurrentScore();
    } else {
      handleTimer();
      increaseCurrentScore();
    }
  };

  // Check for gameWon, reset accordingly
  useEffect(() => {
    if (gameWon) {
      setCurrentScore(0);
      setStartTime(0);
      setCurrentTime(0);
      // setGameWon(false);
    }
  }, [gameWon]);

  return (
    <div id="mc-game-container">
      <Scoreboard
        currentScore={currentScore}
        highScore={highScore}
        currentTime={currentTime}
        bestTime={bestTime}
      />
      {!gameOver ? (
        <Table handleScore={handleScore} currentScore={currentScore} />
      ) : (
        <div className="mc-game-over">
          {gameWon ? (
            <span className="mc-game-over-mess">You Won!</span>
          ) : (
            <span className="mc-game-over-mess">Bad Luck this time...</span>
          )}
          <button
            className="mc-reset-btn"
            onClick={() => {
              setGameWon(false);
              setGameOver(false);
            }}
          >
            Play Again?
          </button>
        </div>
      )}
    </div>
  );
};

export default GameContainer;
