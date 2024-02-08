import React, { useState } from "react";
import "./Navbar.css";
import Button from "../button/Button";
import logo from "../../assets/images/logo.png";
import {
  UilBars,
  UilHome,
  UilGlobe,
  UilRocket,
  UilAt,
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <UilBars size="30" className="color-1" />
        </div>
        <ul className={`navbar-links flex center ${isActive ? "active" : ""}`}>
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </li>

          <li>
            <Button text="Login" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
