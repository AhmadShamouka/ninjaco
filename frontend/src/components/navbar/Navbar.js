import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo-nobg.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <span
        className="navbar-toggle"
        id="js-navbar-toggle"
        onClick={toggleNavbar}
      >
        <i>-</i>
        <i>-</i>
        <i>-</i>
      </span>
      <img href="#" src={logo} alt="logo" className="logo" />
      <ul className={`main-nav ${isActive ? "active" : ""}`} id="js-menu">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
