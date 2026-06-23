import "./About.css";
import profile from "../../assets/hero.png";


function About() {
  return (
   <section id="about" className="about-section">
 
 <div className="about-image">
  <h2>About Me</h2>
</div>
  

      <div className="about-content">

        <h4>ABOUT ME</h4>

        <h2>
          Passionate Developer &
          Technology Enthusiast
        </h2>

        <p>
          I am Ayush Kumar, a B.Tech CSE student
          with a strong passion for software
          development, cloud computing,
          cybersecurity, and AI solutions.

          I enjoy building innovative projects,
          participating in hackathons,
          and solving real-world problems
          using technology.
        </p>

        <button>
          Download Resume
        </button>

      </div>

    </section>
  );
}

export default About;