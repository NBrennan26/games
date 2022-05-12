import { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";

function PlayerBoard() {
  const [boardArr, setBoardArr] = useState([])

  useEffect(() => {
    const curBoardArr = []
    for (let i = 0; i < 100; i++) {
      curBoardArr.push(i)
    }
    setBoardArr(curBoardArr)
  }, [])

  return (
    <>
      <div className="bs-player-board">
        {boardArr.map((box) => {
          return <BoardSquare />
        })}
      </div>
    </>
  );
}

export default PlayerBoard;
