import React from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Pokemon Logo" className="nav-logo" />
    </nav>
  );
}
