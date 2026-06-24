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
      {/* LOGO */}
      <div className="logo">
        Ayush Kumar
      </div>

      {/* NAV LINKS */}
      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#patents"
            onClick={() => setMenuOpen(false)}
          >
            Patents
          </a>
        </li>

        <li>
          <a
            href="#certificates"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>
        </li>

        <li>
          <a
            href="#education"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
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
      </div>

      {/* MOBILE MENU */}
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
    </nav>
  );
}

export default Navbar;