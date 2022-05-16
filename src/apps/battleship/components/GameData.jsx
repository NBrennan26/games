function GameData(props) {
  const {
    p1Fleet,
    p2Fleet,
    p1Board,
    p2Board,
    counter,
    p1ShipsPlaced,
    p2ShipsPlaced
  } = props;

  return (
    <>
      <div className="bs-data">
        <span>
          {p1ShipsPlaced === 0
            ? "Place your Carrier"
            : p1ShipsPlaced === 1
            ? "Place your Battleship"
            : p1ShipsPlaced === 2
            ? "Place your Submarine"
            : p1ShipsPlaced === 3
            ? "Place your Cruiser"
            : p1ShipsPlaced === 4
            ? "Place your Destroyer"
            : ""}
        </span>
        <div className="ship-status-cont">
          {p1ShipsPlaced === 5 ? (
            <div className="p1-ship-status">
              <span>Carrier Status: {p1Fleet[0].status}</span>
              <span>Battleship Status: {p1Fleet[1].status}</span>
              <span>Submarine Status: {p1Fleet[2].status}</span>
              <span>Crusier Status: {p1Fleet[3].status}</span>
              <span>Destroyer Status: {p1Fleet[4].status}</span>
            </div>
          ) : (
            <div className="p1-ship-status"></div>
          )}
          {p2ShipsPlaced === 5 ? (
            <div className="p2-ship-status">
              <span>Carrier Status: {p2Fleet[0].status}</span>
              <span>Battleship Status: {p2Fleet[1].status}</span>
              <span>Submarine Status: {p2Fleet[2].status}</span>
              <span>Crusier Status: {p2Fleet[3].status}</span>
              <span>Destroyer Status: {p2Fleet[4].status}</span>
            </div>
          ) : (
            <div className="p2-ship-status"></div>
          )}
        </div>
      </div>
    </>
  );
}

export default GameData;
