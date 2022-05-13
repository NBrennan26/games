import { useEffect, useState } from "react";

function BoardSquare(props) {
  const { square, handlePlaceShip, player, counter } = props;

  const [squareClass, setSquareClass] = useState(
    `bs-board-square ${square.index}`
  );

  // Update square classes based on status
  useEffect(() => {
    if (player === "player1") {
      if (square.isHit && !squareClass.includes("hit")) {
        setSquareClass(squareClass + " hit");
      } else if (square.isMiss && !squareClass.includes("miss")) {
        setSquareClass(squareClass + " miss");
      } else if (square.hasShip && !squareClass.includes("ship")) {
        setSquareClass(squareClass + " ship");
      }
    }
  }, [square, squareClass, props, counter]);

  return (
    <>
      <div
        className={squareClass}
        onClick={(e) => {
          handlePlaceShip(e);
        }}
      >
        {square.index}
      </div>
    </>
  );
}

export default BoardSquare;
