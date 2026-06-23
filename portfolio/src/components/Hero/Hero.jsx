import "./Hero.css";
import profile from "../../assets/hero.png";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import { SiCredly } from "react-icons/si";

function Hero() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`hero ${darkMode ? "dark" : "light"}`}>
      
      {/* LEFT SIDE */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h4>Hello, I'm 👋</h4>

        <h1>
          Ayush <span>Kumar</span>
        </h1>

        <h2>B.Tech CSE Student</h2>

        <div className="roles">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Cloud Enthusiast",
              2000,
              "Cyber Security Learner",
              2000,
              "AI Explorer",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <p>
          Passionate about building smart solutions with code.
          I love Web Development, Cloud Computing, AI,
          Cyber Security and solving real-world problems.
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="contact-btn"
          >
            Contact Me
          </a>

          <a
            href="https://www.credly.com/users/ayush-kumar.bfdaf45e"
            target="_blank"
            rel="noopener noreferrer"
            className="credly-btn"
          >
            View Badges
          </a>
        </div>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/ayush-kumar-659ab0329"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Ayush-kcc-15"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.credly.com/users/ayush-kumar.bfdaf45e"
            target="_blank"
            rel="noopener noreferrer"
            title="Credly"
          >
            <SiCredly />
          </a>

          <a
            href="mailto:ayush.kccitm@gmail.com"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-glow"></div>

        <div className="floating-icon react">
          <FaReact />
        </div>

        <div className="floating-icon node">
          <FaNodeJs />
        </div>

        <div className="floating-icon java">
          <FaJava />
        </div>

        <div className="floating-icon python">
          <FaPython />
        </div>

        <img
          src={profile}
          alt="Ayush Kumar"
          className="hero-image"
        />
      </motion.div>
    </section>
  );
}

export default Hero;