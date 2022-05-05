import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <span>Games</span>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/battleship">Battleship</Link>
          </li>
          <li>
            <Link to="/etchasketch">Etch-A-Sketch</Link>
          </li>
          <li>
            <Link to="/memory-card">Memory Card</Link>
          </li>
          <li>
            <Link to="/picture-search">Picture Search</Link>
          </li>
          <li>
            <Link to="/rock-paper-scissors">Rock Paper Scissors</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
