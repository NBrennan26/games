import PlayerBoard from "./PlayerBoard";

function GameBoard(props) {
  return (
    <>
      <div className="bs-board">
        <PlayerBoard playerBoard={props.p1Board} setPlayerBoard={props.setP1Board} />
        <PlayerBoard playerBoard={props.p2Board} setPlayerBoard={props.setP2Board} />
      </div>
    </>
  );
}

export default GameBoard;
