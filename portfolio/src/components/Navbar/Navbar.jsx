import "./Navbar.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav
      className={`navbar ${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className="logo">
        Ayush Kumar
      </div>

      <div className="navbar-actions">
        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>

        <a
          href="/Ayush_Kumar_Resume.pdf"
          download
          className="nav-resume-btn"
        >
          Download Resume
        </a>

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>
      </div>

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#patents">Patents</a>
        </li>

        <li>
          <a href="#certificates">
            Certificates
          </a>
        </li>

        <li>
          <a href="#education">
            Education
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;