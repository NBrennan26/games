import PlayerBoard from "./PlayerBoard";

function GameBoard(props) {
  const {
    p1Board,
    setP1Board,
    p2Board,
    setP2Board,
    p1ShipsPlaced,
    handlePlaceShip,
    handleHoverIn,
    handleHoverOut,
    handleRotate,
    handlePlayerAttack,
    counter,
  } = props;

  return (
    <div className="bs-board">
      <div className="bs-boards-cont">
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
          handlePlayerAttack={handlePlayerAttack}
          player="player2"
          counter={counter}
        />
      </div>
      {p1ShipsPlaced < 5 ? (
        <button className="bs-rotate-btn" onClick={() => handleRotate()}>
          Rotate Ship
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default GameBoard;
