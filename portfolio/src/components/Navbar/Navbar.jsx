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
  <a href="#certificates">Certificates</a>
</li>

<li>
  <a href="#education">Education</a>
</li>

<li>
  <a href="#contact">Contact</a>
</li>
        

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