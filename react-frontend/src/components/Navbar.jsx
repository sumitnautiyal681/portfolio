import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <img src="images.png" alt="Logo" className="logo" />

      {/* Hamburger Icon */}
      <i
        className={`fas ${menuOpen ? "fas fa-circle-xmark" : "fas fa-bars"}`}
        onClick={toggleMenu}
        id="menu-icon"
      ></i>

      {/* Navigation Links */}
      <ul
        id="sidemenu"
        style={{
          right: menuOpen ? "0" : "-220px",
        }}
      >
        <li>
          <a href="#header" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
