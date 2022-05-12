const buildShip = function (name, length, player) {
  return {
    name: name,
    length: length,
    player: player,
    grids: [],
    isSunk: false,
    orientation: "horizontal",
    status: "Okay",

    // grid {coord: Num, hit: false}

    // Place Ship (checks against edge of board)
    placeShip(grid) {
      let gridNo = parseInt(grid);
      let shipArr = [];
      if (length === 5 && this.direction === "Horizontal") {
        if (
          ![
            6, 7, 8, 9, 16, 17, 18, 19, 26, 27, 28, 29, 36, 37, 38, 39, 46, 47,
            48, 49, 56, 57, 58, 59, 66, 67, 68, 69, 76, 77, 78, 79, 86, 87, 88,
            89, 96, 97, 98, 99,
          ].includes(gridNo)
        ) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i,
              gridHit: false,
            };
            shipArr.push(gridNo + i);
          }
        }
      }
      if (length === 5 && this.direction === "Vertical") {
        if (gridNo <= 60) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i * 10,
              gridHit: false,
            };
            shipArr.push(gridNo + i * 10);
          }
        }
      }
      if (length === 4 && this.direction === "Horizontal") {
        if (
          ![
            7, 8, 9, 17, 18, 19, 27, 28, 29, 37, 38, 39, 47, 48, 49, 57, 58, 59,
            67, 68, 69, 77, 78, 79, 87, 88, 89, 97, 98, 99,
          ].includes(gridNo)
        ) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i,
              gridHit: false,
            };
            shipArr.push(gridNo + i);
          }
        }
      }
      if (length === 4 && this.direction === "Vertical") {
        if (gridNo <= 70) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i * 10,
              gridHit: false,
            };
            shipArr.push(gridNo + i * 10);
          }
        }
      }
      if (length === 3 && this.direction === "Horizontal") {
        if (
          ![
            8, 9, 18, 19, 28, 29, 38, 39, 48, 49, 58, 59, 68, 69, 78, 79, 88,
            89, 98, 99,
          ].includes(gridNo)
        ) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i,
              gridHit: false,
            };
            shipArr.push(gridNo + i);
          }
        }
      }
      if (length === 3 && this.direction === "Vertical") {
        if (gridNo <= 80) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i * 10,
              gridHit: false,
            };
            shipArr.push(gridNo + i * 10);
          }
        }
      }
      if (length === 2 && this.direction === "Horizontal") {
        if (![9, 19, 29, 39, 49, 59, 69, 79, 89, 99].includes(gridNo)) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i,
              gridHit: false,
            };
            shipArr.push(gridNo + i);
          }
        }
      }
      if (length === 2 && this.direction === "Vertical") {
        if (gridNo <= 90) {
          //Place the Ship
          for (let i = 0; i < length; i++) {
            this.grids[i] = {
              gridCoord: gridNo + i * 10,
              gridHit: false,
            };
            shipArr.push(gridNo + i * 10);
          }
        }
      }
      this.gridArr = shipArr;
    },

    // Rotate Ship (Horizontal/Vertical)
    rotateShip() {
      if (this.direction === "horizontal") {
        this.direction = "vertical";
      } else {
        this.direction = "Horizontal";
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
      if (this.player === "player1") {
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
