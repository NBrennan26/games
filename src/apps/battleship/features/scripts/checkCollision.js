const checkCollision = function (grid, length, dir, board) {
  let counter = 0;
  let gridNo = parseInt(grid);
  for (let i = 0; i < length; i++) {
    if (dir === "Horizontal") {
      if (!board[gridNo + i].hasShip) {
        counter += 1;
      }
    }
    if (dir === "Vertical") {
      if (!board[gridNo + i * 10].hasShip) {
        counter += 1;
      }
    }
  }
  if (counter === length) {
    return true;
  }
};

export default checkCollision;
