import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <ul className="nav-list">
      <li onClick={props.handleToggle}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={props.handleToggle}>
        <Link to="/battleship">Battleship</Link>
      </li>
      <li onClick={props.handleToggle}>
        <Link to="/etchasketch">Etch-A-Sketch</Link>
      </li>
      <li onClick={props.handleToggle}>
        <Link to="/memory-card">Memory Card</Link>
      </li>
      <li onClick={props.handleToggle}>
        <Link to="/picture-search/">Picture Search</Link>
      </li>
      <li onClick={props.handleToggle}>
        <Link to="/rock-paper-scissors">Rock Paper Scissors</Link>
      </li>
      <li onClick={props.handleToggle}>
        <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
