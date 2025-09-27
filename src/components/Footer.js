import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-line">
      <p>© {new Date().getFullYear()} Gokarna Seva. All Rights Reserved.</p>
    </footer>
  );
}
export default Footer;