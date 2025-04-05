import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
           <Link to=""> Home</Link>
           </li>
           <li>
           <Link to="/about">about</Link>
          </li>
          
        </ul>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;