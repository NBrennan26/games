import { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";

function PlayerBoard(props) {
  const {
    setPlayerBoard,
    handlePlaceShip,
    handleHoverIn,
    handleHoverOut,
    handlePlayerAttack,
    player,
    counter,
  } = props;

  const [boardArr, setBoardArr] = useState([]);

  useEffect(() => {
    const curBoardArr = [];
    for (let i = 0; i < 100; i++) {
      let square = {};
      square.index = i;
      square.hasShip = false;
      square.isShot = false;
      square.isHit = false;
      square.isMiss = false;
      curBoardArr.push(square);
    }
    setBoardArr(curBoardArr);
    setPlayerBoard(curBoardArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`bs-player-board ${player}-board`}>
        {boardArr.map((square) => {
          return (
            <BoardSquare
              square={square}
              key={square.index}
              handlePlaceShip={handlePlaceShip}
              handleHoverIn={handleHoverIn}
              handleHoverOut={handleHoverOut}
              handlePlayerAttack={handlePlayerAttack}
              player={player}
              counter={counter}
            />
          );
        })}
      </div>
    </>
  );
}

export default PlayerBoard;
