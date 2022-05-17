function GameOver(props) {
  const { gameWinner, handleReset } = props;

  return (
    <div className="bs-game-over-cont">
      <span className="bs-game-over-mess">
        {gameWinner === "player1" ? "You Won" : "Bad Luck, You Lost This Time"}
      </span>
      <button className="bs-reset-btn bs-btn" onClick={() => handleReset()}>
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
