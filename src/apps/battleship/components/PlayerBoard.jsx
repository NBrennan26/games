import { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";

function PlayerBoard(props) {
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
    props.setPlayerBoard(curBoardArr)
  }, []);

  return (
    <>
      <div className="bs-player-board">
        {boardArr.map((square) => {
          return <BoardSquare square={square} key={square.index} />;
        })}
      </div>
    </>
  );
}

export default PlayerBoard;
