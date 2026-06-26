import "./About.css";
import { motion } from "framer-motion";

import {
  FaCode,
  FaCloud,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      


      {/* Header */}

      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>ABOUT ME</span>

        <h2>
          Crafting Digital Experiences
          <br />
          with Passion & Innovation
        </h2>

        <p>
          I'm <strong>Ayush Kumar</strong>, a B.Tech Computer Science student
          passionate about creating modern web applications,
          solving real-world problems, and continuously exploring
          Cloud Computing, Artificial Intelligence, and Cyber Security.
        </p>
      </motion.div>

      {/* Content */}

      <div className="about-container">

        {/* Left Side */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="about-card">

            <div className="about-icon">
              <FaCode />
            </div>

            <div>

              <h3>Full Stack Development</h3>

              <p>
                Building responsive, scalable, and modern web
                applications using React, Node.js, and MongoDB.
              </p>

            </div>

          </div>

          <div className="about-card">

            <div className="about-icon">
              <FaCloud />
            </div>

            <div>

              <h3>Cloud Computing</h3>

              <p>
                Learning AWS services and cloud-native technologies
                to deploy secure and scalable applications.
              </p>

            </div>

          </div>

          <div className="about-card">

            <div className="about-icon">
              <FaBrain />
            </div>

            <div>

              <h3>AI & Cyber Security</h3>

              <p>
                Exploring Artificial Intelligence, Machine Learning,
                and Cyber Security to build smarter digital solutions.
              </p>

            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="journey-card">

            <h3>My Journey</h3>

            <div className="timeline">

              <div className="timeline-item">

                <span>2024</span>

                <div>

                  <h4>Started B.Tech</h4>

                  <p>
                    Began my Computer Science journey and
                    built a strong programming foundation.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <span>2025</span>

                <div>

                  <h4>Web Development</h4>

                  <p>
                    Started building websites using React
                    and modern frontend technologies.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <span>2026</span>

                <div>

                  <h4>Patents & Certifications</h4>

                  <p>
                    Filed multiple patent applications and
                    earned certifications in AWS, IBM, Microsoft,
                    and AI.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <span>2026</span>

                <div>

                  <h4>Building Real Products</h4>

                  <p>
                    Developing full-stack projects,
                    participating in hackathons,
                    and preparing for internships.
                  </p>

                </div>

              </div>

            </div>

            <a
              href="#projects"
              className="about-btn"
            >
              View My Projects

              <FaArrowRight />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}


export default About;