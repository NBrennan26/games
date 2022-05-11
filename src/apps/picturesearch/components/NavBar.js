import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/poppy">
            Poppy
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/corn">
            Corn
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/squirrel">
            Squirrel
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/hay">
            Hay
          </NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/scores">
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
