const checkOverflow = function (grid, length, dir) {
  let gridNo = parseInt(grid);
  if (length === 5 && dir === "Horizontal") {
    if (
      ![
        6, 7, 8, 9, 16, 17, 18, 19, 26, 27, 28, 29, 36, 37, 38, 39, 46, 47, 48,
        49, 56, 57, 58, 59, 66, 67, 68, 69, 76, 77, 78, 79, 86, 87, 88, 89, 96,
        97, 98, 99,
      ].includes(gridNo)
    ) {
      return true;
    } else return false;
  } else if (length === 4 && dir === "Horizontal") {
    if (
      ![
        7, 8, 9, 17, 18, 19, 27, 28, 29, 37, 38, 39, 47, 48, 49, 57, 58, 59, 67,
        68, 69, 77, 78, 79, 87, 88, 89, 97, 98, 99,
      ].includes(gridNo)
    ) {
      return true;
    } else return false;
  } else if (length === 3 && dir === "Horizontal") {
    if (
      ![
        8, 9, 18, 19, 28, 29, 38, 39, 48, 49, 58, 59, 68, 69, 78, 79, 88, 89,
        98, 99,
      ].includes(gridNo)
    ) {
      return true;
    } else return false;
  } else if (length === 2 && dir === "Horizontal") {
    if (![9, 19, 29, 39, 49, 59, 69, 79, 89, 99].includes(gridNo)) {
      return true;
    } else return false;
  } else if (length === 5 && dir === "Vertical") {
    if (gridNo < 60) {
      return true;
    } else return false;
  } else if (length === 4 && dir === "Vertical") {
    if (gridNo < 70) {
      return true;
    } else return false;
  } else if (length === 3 && dir === "Vertical") {
    if (gridNo < 80) {
      return true;
    } else return false;
  } else if (length === 2 && dir === "Vertical") {
    if (gridNo < 90) {
      return true;
    } else return false;
  } else {
    return false;
  }
};

export default checkOverflow;
