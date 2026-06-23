import "./About.css";
import profile from "../../assets/hero.png";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-header">
        <span>ABOUT ME</span>
        <h2>Passionate Developer & Technology Enthusiast</h2>
      </div>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-image">

          <div className="image-glow"></div>

          <img
            src={profile}
            alt="Ayush Kumar"
          />

        </div>

        {/* RIGHT */}
        <div className="about-content">

          <p>
            I am Ayush Kumar, a B.Tech Computer Science
            student at KCC Institute of Technology &
            Management with a strong passion for software
            development, cloud computing, cybersecurity,
            and AI solutions.
          </p>

          <p>
            I enjoy building innovative projects,
            participating in hackathons, filing patents,
            and solving real-world problems through
            technology.
          </p>

          <div className="about-tags">

            <span>Full Stack</span>
            <span>Cloud</span>
            <span>Cyber Security</span>
            <span>AI</span>
            <span>Patents</span>

          </div>

          <div className="about-cards">

            <div className="about-card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="about-card">
              <h3>20+</h3>
              <p>Certificates</p>
            </div>

            <div className="about-card">
              <h3>4</h3>
              <p>Patents</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;