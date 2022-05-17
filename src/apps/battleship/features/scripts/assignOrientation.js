const assignOrientation = function (player) {
  if (player === 2) {
    let randomNo = Math.random();
    if (randomNo < 0.5) {
      return "Vertical";
    } else {
      return "Horizontal";
    }
  } else {
    return "Horizontal";
  }
};

export default assignOrientation;
