import "./Hero.css";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import CodeWindow from "./CodeWindow";
import HeroStats from "./HeroStats";
import FloatingIcons from "./FloatingIcons";
import { SiCredly } from "react-icons/si";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* Decorative Background */}

      <div className="hero-bg-text">

  <span>AYUSH</span>

  <span>KUMAR</span>

</div>

      <div className="hero-blob hero-blob-one"></div>
      <div className="hero-blob hero-blob-two"></div>

      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity:0, x:-50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
        >

          <div className="availability">

            <span className="dot"></span>

            Available for Internship

          </div>

          <h4>

            Hi, I'm

          </h4>

          <h1>

            Ayush

            <span>

              Kumar.

            </span>

          </h1>

          <div className="hero-role">

            <TypeAnimation

              sequence={[

                "Full Stack Developer",
                2000,

                "Cloud Enthusiast",
                2000,

                "AI Explorer",
                2000,

                "Cyber Security Learner",
                2000,

              ]}

              speed={40}

              repeat={Infinity}

            />

          </div>

          <p>

            Passionate about building clean,
            scalable and intelligent digital
            experiences that solve real-world
            problems.

          </p>

          <div className="hero-buttons">

            <a
              href="/Ayush_Kumar_Resume.pdf"
              download
              className="primary-btn"
            >

              Download Resume

            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >

              Contact Me

            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://www.linkedin.com/in/ayush-kumar-659ab0329"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Ayush-kcc-15"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

        
            <a
              href="mailto:ayush.kccitm@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

                 <a
  href="https://www.credly.com/users/ayush-kumar.bfdaf45e"
  target="_blank"
  rel="noopener noreferrer"
  className="credly-card"
>
  <div className="credly-left">
    <div className="credly-badge">
      🏅
    </div>

    <div>
      <h4>Verified Certifications</h4>

      <span>View my Credly badges</span>
    </div>
  </div>

  <div className="credly-arrow">
    →
  </div>
</a>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          className="hero-right"

          initial={{ opacity:0, x:50 }}

          animate={{ opacity:1, x:0 }}

          transition={{ duration:0.8 }}

        >

          <FloatingIcons />

          <CodeWindow />

          <HeroStats />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;