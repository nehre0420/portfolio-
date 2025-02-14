// App.js
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className="navcunt">
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
       
     

        {/* Hamburger Menu (Mobile) */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
