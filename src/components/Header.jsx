import React, { useState } from "react";
import logo from "../assets/logo.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul id="sidemenu" style={{ right: menuOpen ? "0" : "-200px" }}>
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
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <i className="fas fa-times" onClick={closeMenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-text">
          <p>UI/UX Designer</p>
          <h1>
            Hi, I'm <span> Pedro Sangy</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
