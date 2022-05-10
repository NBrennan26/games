import { useEffect, useState } from "react";
// import uniqid from "uniqid";
import Scoreboard from "./Scoreboard";
import Table from "./Table";

const GameContainer = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bestTime, setBestTime] = useState(null);

  const increaseCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

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
  }, [startTime, currentTime, currentScore]);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  const handleScore = (count) => {
    if (count >= 1) {
      resetCurrentScore();
    } else {
      handleTimer();
      increaseCurrentScore();
    }
  };

  return (
    <div id="game-container">
      <Scoreboard
        currentScore={currentScore}
        highScore={highScore}
        currentTime={currentTime}
        bestTime={bestTime}
      />
      <Table handleScore={handleScore} currentScore={currentScore} />
    </div>
  );
};

export default GameContainer;
