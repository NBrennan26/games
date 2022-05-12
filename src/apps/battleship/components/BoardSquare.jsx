function BoardSquare(props) {
  return (
    <>
      <div className={`bs-board-square ${props.square.index}`}>
        {props.square.index}
      </div>
    </>
  );
}

export default BoardSquare;
