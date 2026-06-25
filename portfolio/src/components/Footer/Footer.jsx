import "./Footer.css";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-left">

          <h2>

            Ayush Kumar

          </h2>

          <p>

            Passionate Computer Science student focused on
            Full Stack Development, Artificial Intelligence,
            Cloud Computing and Cybersecurity.

          </p>

        </div>

        {/* Center */}

        <div className="footer-center">

          <h3>

            Quick Links

          </h3>

          <a href="#home">

            Home

          </a>

          <a href="#about">

            About

          </a>

          <a href="#projects">

            Projects

          </a>

          <a href="#contact">

            Contact

          </a>

        </div>

        {/* Right */}

        <div className="footer-right">

          <h3>

            Connect

          </h3>

          <div className="footer-socials">

            <a
              href="mailto:ayush.kccitm@gmail.com"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/Ayush-kcc-15"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayush-kumar-659ab0329"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>

          © {new Date().getFullYear()} Ayush Kumar.
          All Rights Reserved.

        </p>

        <button
          className="scroll-top"
          onClick={scrollToTop}
        >

          <FaArrowUp />

        </button>

      </div>

    </footer>
  );
}

export default Footer;