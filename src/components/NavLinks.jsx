import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-list">
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
  );
}

export default NavLinks;

// <>
//   <a id="home" className="menu-item" href="/">
//     Home
//   </a>
//   <a id="" className="menu-item" href="/battleship">
//     Battleship
//   </a>
//   <a id="etchasketch" className="menu-item" href="/etchasketch">
//     Etch-A-Sketch
//   </a>
//   <a id="memory-card" className="menu-item" href="/memory-card">
//     Memory Card
//   </a>
//   <a id="picture-search" className="menu-item" href="/picture-search">
//     Picture Search
//   </a>
//   <a
//     id="rock-paper-scissors"
//     className="menu-item"
//     href="/rock-paper-scissors"
//   >
//     Rock-Paper-Scissors
//   </a>
//   <a id="tic-tac-toe" className="menu-item" href="/tic-tac-toe">
//     Tic-Tac-Toe
//   </a>
// </>
