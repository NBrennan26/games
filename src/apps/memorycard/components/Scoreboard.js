import Logo from "../assets/futurama-logo.png";

const Scoreboard = (props) => {
  return (
    <div className="mc-scoreboard-cont">
      <div className="mc-logo-cont">
        <img src={Logo} alt="Futurama Logo" className="futurama-logo" />
      </div>
      <div className="mc-scoreboard">
        <div>Current Score: {props.currentScore}</div>
        <div>High Score: {props.highScore}</div>
        <div>Current Time: {props.currentTime}</div>
        <div>Best Time: {props.bestTime}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
