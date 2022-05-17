import { useEffect, useState } from "react";

function BoardSquare(props) {
  const {
    square,
    handlePlaceShip,
    handleHoverIn,
    handleHoverOut,
    handlePlayerAttack,
    player,
    counter,
  } = props;

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
    } else {
      if (square.isHit && !squareClass.includes("hit")) {
        setSquareClass(squareClass + " hit");
      } else if (square.isMiss && !squareClass.includes("miss")) {
        setSquareClass(squareClass + " miss");
      }
    }
  }, [player, square, squareClass, props, counter]);

  return (
    <>
      <div
        className={squareClass}
        id={square.index}
        onClick={(e) => {
          if (player === "player1") {
            handlePlaceShip(e);
          } else {
            handlePlayerAttack(e);
          }
        }}
        onMouseEnter={(e) => {
          handleHoverIn(e);
        }}
        onMouseLeave={(e) => {
          handleHoverOut(e);
        }}
      ></div>
    </>
  );
}

export default BoardSquare;
