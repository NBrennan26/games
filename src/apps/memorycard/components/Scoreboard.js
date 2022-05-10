const Scoreboard = (props) => {
  return (
    <div>
      <div>Current Score: {props.currentScore}</div>
      <div>High Score: {props.highScore}</div>
      <div>Current Time: {props.currentTime}</div>
      <div>Best Time: {props.bestTime}</div>
    </div>
  );
};

export default Scoreboard;
