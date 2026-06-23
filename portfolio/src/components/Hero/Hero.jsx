import "./Hero.css";

import profile from "../../assets/hero.png";
<img src={profile} alt="Ayush Kumar" />

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h4>Hello, I'm 👋</h4>

        <h1>
          Ayush <span>Kumar</span>
        </h1>

        <h2>
          B.Tech CSE Student
        </h2>

        <div className="roles">

          <span>Developer</span>

          <span>|</span>

          <span>Innovator</span>

          <span>|</span>

          <span>Problem Solver</span>

        </div>

        <p>
          Passionate about building smart
          solutions with code. I love Web
          Development, Cloud Computing,
          AI and solving real-world
          problems.
        </p>

        <div className="hero-buttons">

          <button>
            Download Resume
          </button>

          <button className="contact-btn">
            Contact Me
          </button>

        </div>

        <div className="socials">

          <FaLinkedin />

          <FaGithub />

          <FaEnvelope />

        </div>

      </div>

      <div className="hero-right">

        <div className="circle"></div>

        <img
          src={profile}
          alt=""
        />

      </div>

    </section>
  );
}

export default Hero;