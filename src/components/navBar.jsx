import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css"
import translogo from "../assets/translogo.png"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };

  const getLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <nav className="navbar3">
      <div className="navbar__logo3">
        <img src={translogo} alt="" />
      </div>
      <div className={`navbar__links3 ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className={getLinkClass("/")}>
            <Link to="/">Acceuil</Link>
            <div id="rond3"></div>
          </li>
          <li className={getLinkClass("/Reserver")}>
            <Link to="/Reserver">Reserver</Link>
            <div id="rond3"></div>
          </li>
          <li className={getLinkClass("/Destination")}>
            <Link to="/Destination">Destination</Link>
            <div id="rond3"></div>
          </li>
        </ul>
      </div>
      {/* 
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span>{isMenuOpen ? "Close" : "Menu"}</span>
      </div> */}
    </nav>
  );
}

export default NavBar;
