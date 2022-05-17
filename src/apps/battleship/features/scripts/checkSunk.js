const checkSunk = function (length, grids) {
  let hitCount = 0

  grids.forEach(grid => {
    if (grid.hit) {
      hitCount += 1
    }
  })

  if (hitCount === length) {
    return true
  } else return false
};

export default checkSunk;
