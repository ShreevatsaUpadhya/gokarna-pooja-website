import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo-bg.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="DivyaKosha Logo" className="navbar-logo" />
      </div>
      <div className={`navbar-right ${isOpen ? "active" : ""}`}>
        <span className="navbar-close" onClick={() => setIsOpen(false)}>
          ×
        </span>
        <a href="/">Home</a>
         <a href="/about">About</a>
        <a href="/poojas">Poojas</a>
        <a href="/contact">Contact</a>
        
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
