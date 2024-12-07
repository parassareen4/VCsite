import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">VC Firm</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;