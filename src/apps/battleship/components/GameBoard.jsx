import PlayerBoard from "./PlayerBoard";

function GameBoard() {
  return (
    <>
      <div className="bs-board">
        <PlayerBoard />
        <PlayerBoard />
      </div>
    </>
  );
}

export default GameBoard;
