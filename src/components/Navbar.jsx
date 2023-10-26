import { useState } from "react";
import { Logo, CloseMenu, Menu } from "../assets";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="Menu">
        {isMenuOpen ? (
          <button
            aria-label="close menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={CloseMenu} alt="" />
          </button>
        ) : (
          <button
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Menu} alt="" />
          </button>
        )}
      </div>
      <a href="#" aria-label="room" className="Logo">
        <img src={Logo} alt="room" />
      </a>

      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            home
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            shop
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            about
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
