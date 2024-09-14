import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropdownMenu from "./DropdownMenu"; // Importing DropdownMenu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        

        {/* Hamburger Menu Icon */}
        <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Nav Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>

          {/* Dropdown Menu now behaves the same as desktop (hover-based) */}
          <li className="nav-item dropdown-hover">
            <DropdownMenu />
          </li>

          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={toggleMenu}>
              Events
            </Link>
          </li>

          {/* Login Button */}
          <li className="nav-item">
            <button
              onClick={() => {
                alert("Too Early for the Fest. The Fest will be live soon");
                toggleMenu();
              }}
              className="nav-button"
            >
              Login
            </button>
          </li>

          {/* Register Button */}
          <li className="nav-item">
            <button
              onClick={() => {
                alert("Too Early for the Fest. The Fest will be live soon");
                toggleMenu();
              }}
              className="nav-button register-button"
            >
              Register
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;