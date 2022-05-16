import PlayerBoard from "./PlayerBoard";

function GameBoard(props) {
  const {
    p1Board,
    setP1Board,
    p2Board,
    setP2Board,
    handlePlaceShip,
    handleHoverIn,
    handleHoverOut,
    counter,
  } = props;

  return (
    <>
      <div className="bs-board">
        <PlayerBoard
          playerBoard={p1Board}
          setPlayerBoard={setP1Board}
          handlePlaceShip={handlePlaceShip}
          handleHoverIn={handleHoverIn}
          handleHoverOut={handleHoverOut}
          player="player1"
          counter={counter}
        />
        <PlayerBoard
          playerBoard={p2Board}
          setPlayerBoard={setP2Board}
          handlePlaceShip={handlePlaceShip}
          handleHoverIn={handleHoverIn}
          handleHoverOut={handleHoverOut}
          player="player2"
          counter={counter}
        />
      </div>
    </>
  );
}

export default GameBoard;
