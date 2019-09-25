import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/tours" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
