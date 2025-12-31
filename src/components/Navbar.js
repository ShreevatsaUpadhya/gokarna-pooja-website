import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-bg.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-left" onClick={closeMenu}>
        <img src={logo} alt="Gokarna Seva Kaarya" className="navbar-logo" />
      </Link>

      {/* Mobile / Desktop Menu */}
      <div className={`navbar-right ${open ? "open" : ""}`}>
        {/* ❌ Close button (mobile only) */}
        <span className="menu-close" onClick={closeMenu}>×</span>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/poojas" onClick={closeMenu}>Poojas</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
