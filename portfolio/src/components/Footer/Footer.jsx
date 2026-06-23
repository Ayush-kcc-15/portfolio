import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>Ayush Kumar</h2>

          <p>
            B.Tech CSE Student | Developer |
            Innovator | Patent Enthusiast
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/in/ayush-kumar-659ab0329"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Ayush-kcc-15"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:ayush.kccitm@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Ayush Kumar. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;