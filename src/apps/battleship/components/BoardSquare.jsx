function BoardSquare(props) {

  return (
    <>
      <div className={`bs-board-square ${props.square.index}`} onClick={(e) => props.handlePlaceShip(e)}>
        {props.square.index}
      </div>
    </>
  );
}

export default BoardSquare;
