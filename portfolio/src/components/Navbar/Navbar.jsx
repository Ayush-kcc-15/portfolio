import "./Navbar.css";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  return (
    <nav className="navbar">

      <div className="logo">
        {"</>"} Ayush Kumar
      </div>

      <ul className="nav-links">

        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Patents</li>
        <li>Certificates</li>
        <li>Education</li>
        <li>Contact</li>

      </ul>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="resume-btn">
          Download Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;