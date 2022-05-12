import PlayerBoard from "./PlayerBoard";

function GameBoard(props) {
  return (
    <>
      <div className="bs-board">
        <PlayerBoard
          playerBoard={props.p1Board}
          setPlayerBoard={props.setP1Board}
          handlePlaceShip={props.handlePlaceShip}
          player="player1"
        />
        <PlayerBoard
          playerBoard={props.p2Board}
          setPlayerBoard={props.setP2Board}
          handlePlaceShip={props.handlePlaceShip}
          player="player2"
        />
      </div>
    </>
  );
}

export default GameBoard;
