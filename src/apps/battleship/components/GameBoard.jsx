import PlayerBoard from "./PlayerBoard";

function GameBoard(props) {
  const { p1Board, setP1Board, p2Board, setP2Board, handlePlaceShip, counter } =
    props;

  return (
    <>
      <div className="bs-board">
        <PlayerBoard
          playerBoard={p1Board}
          setPlayerBoard={setP1Board}
          handlePlaceShip={handlePlaceShip}
          player="player1"
          counter={counter}
        />
        <PlayerBoard
          playerBoard={p2Board}
          setPlayerBoard={setP2Board}
          handlePlaceShip={handlePlaceShip}
          player="player2"
          counter={counter}
        />
      </div>
    </>
  );
}

export default GameBoard;
