const buildShip = function (name, length, player, orientation) {
  return {
    name: name,
    length: length,
    player: player,
    grids: [],
    isSunk: false,
    orientation: orientation,
    status: "Okay",

    // Place Ship (checks against edge of board)
    placeShip(grid) {
      let gridNo = parseInt(grid);
      let shipArr = [];
      if (this.orientation === "Horizontal") {
        //Place the Ship
        for (let i = 0; i < length; i++) {
          this.grids[i] = {
            coord: gridNo + i,
            hit: false,
          };
          shipArr.push(gridNo + i);
        }
      }
      if (this.orientation === "Vertical") {
        //Place the Ship
        for (let i = 0; i < length; i++) {
          this.grids[i] = {
            coord: gridNo + i * 10,
            hit: false,
          };
          shipArr.push(gridNo + i * 10);
        }
      }
      this.gridArr = shipArr;
    },

    // Rotate Ship (Horizontal/Vertical)
    rotateShip() {
      if (this.orientation === "Horizontal") {
        this.orientation = "Vertical";
      } else {
        this.orientation = "Horizontal";
      }
    },

    // Receive Hit (And trigger checkSunk)
    receiveHit(grid) {
      for (let i = 0; i < this.length; i++) {
        if (this.grids[i].coord === grid) {
          this.grids[i].hit = true;
        }
      }
      this.checkSunk();
    },

    // Check isSunk
    checkSunk() {
      let hitCount = 0;
      for (let i = 0; i < this.length; i++) {
        if (this.grids[i].hit) {
          hitCount += 1;
        }
        if (hitCount === length) {
          this.isSunk = true;
        }
      }
    },

    // Update Status
    updateStatus() {
      if (this.player === 1) {
        if (this.isSunk) {
          this.status = "Sunk";
        } else {
          let hitCount = 0;
          this.grids.forEach((grid) => {
            if (grid.hit) {
              hitCount += 1;
            }
          });
          if (hitCount > 0) {
            this.status = "Damaged";
          } else {
            this.status = "Okay";
          }
        }
      } else {
        if (this.isSunk) {
          this.status = "Sunk";
        } else {
          this.status = "Unknown";
        }
      }
    },
  };
};

export default buildShip;
