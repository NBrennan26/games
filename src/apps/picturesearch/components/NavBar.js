import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="ps-navbar">
      <ul className="ps-nav-links">
        <li>
          <NavLink className="ps-nav-link" to="/picture-search/">
            Home
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="ps-nav-link" to="/picture-search/poppy">
            Poppy
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="ps-nav-link" to="/picture-search/corn">
            Corn
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="ps-nav-link" to="/picture-search/squirrel">
            Squirrel
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="ps-nav-link" to="/picture-search/hay">
            Hay
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="ps-nav-link" to="/picture-search/scores">
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
