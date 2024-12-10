import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <h1 className="logo">The Closers Fund</h1>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon" />
          )}
        </div>

        {/* Default Menu for large screens */}
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Dropdown menu for small screens */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        </li>
        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
