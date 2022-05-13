import { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";

function PlayerBoard(props) {
  const { playerBoard, setPlayerBoard, handlePlaceShip, player, counter } =
    props;

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

  // useEffect(() => {
  //   console.log(playerBoard);
  //   let curBoardArr = playerBoard;
  //   console.log("curBoardArr", curBoardArr);
  //   setBoardArr(curBoardArr);
  // }, [playerBoard, props, counter]);

  return (
    <>
      <div className={`bs-player-board ${player}-board`}>
        {boardArr.map((square) => {
          return (
            <BoardSquare
              square={square}
              key={square.index}
              handlePlaceShip={handlePlaceShip}
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
