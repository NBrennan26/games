import { useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  useEffect(() => {
    document.title = "Games | Home";
  }, []);

  return (
    <section className="home-cont">
      <div className="home-title-cont">GAMES</div>
      <div className="home-main-cont">
        <div className="game-desc-cont">
          <span className="home-game-title">
            <Link to="/battleship">Battleship</Link>
          </span>
          <p className="home-game-desc">
            Play Classic Battleship against a basic AI opponent
          </p>
        </div>
        <div className="game-desc-cont">
          <span className="home-game-title">
            <Link to="/etchasketch">Etch-A-Sketch</Link>
          </span>
          <p className="home-game-desc">
            Imitation version of Etch-A-Sketch. Shake to reset the pad
          </p>
        </div>
        <div className="game-desc-cont">
          <span className="home-game-title">
            <Link to="/memory-card">Memory Card</Link>
          </span>
          <p className="home-game-desc">
            Try to remember which of the 12 Futurama themed cards you've already
            clicked. Try to get them all as fast as you can
          </p>
        </div>
        <div className="game-desc-cont">
          <span className="home-game-title">
            <Link to="/picture-search/">Picture Search</Link>
          </span>
          <p className="home-game-desc">
            Search through images to find the hidden items, &aacute; la Where's
            Waldo. Compete for the best time
          </p>
        </div>
        <div className="game-desc-cont">
          <span className="home-game-title">
            <Link to="/rock-paper-scissors">Rock Paper Scissors</Link>
          </span>
          <p className="home-game-desc">
            Simple game of Rock Paper Scissors against random AI
          </p>
        </div>
        <div className="game-desc-cont">
          <span className="home-game-title">
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </span>
          <p className="home-game-desc">
            Play Rock Paper Scissors against a friend
          </p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
