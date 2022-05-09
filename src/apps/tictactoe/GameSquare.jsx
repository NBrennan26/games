function GameSquare(props) {

  return (
    <div
      className={
        props.gameBoard[props.square] === "player2" ||
        props.gameBoard[props.square] === "player1"
          ? `ttt-square square-${props.square} ${
              props.gameBoard[props.square]
            }-square`
          : `ttt-square square-${props.square} neutral-square`
      }
      onClick={props.claimSquare}
    >
      {props.gameBoard[props.square] === "player2"
        ? "O"
        : props.gameBoard[props.square] === "player1"
        ? "X"
        : ""}
    </div>
  );
}

export default GameSquare;
