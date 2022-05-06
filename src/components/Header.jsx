import { Link } from "react-router-dom";
import MenuToggle from "./MenuToggle";

function Header() {
  return (
    <header>
      <MenuToggle />
      <div className="header-title-cont">
        <Link to="/">Games</Link>
      </div>
    </header>
  );
}

export default Header;
