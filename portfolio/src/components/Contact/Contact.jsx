import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-header">
        <span>CONTACT</span>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            I'm always open to discussing new projects,
            internship opportunities, collaborations,
            and innovative ideas.
          </p>

          {/* EMAIL */}

          <div className="info-item">
            <FaEnvelope />

            <a
              href="mailto:ayush.kccitm@gmail.com"
              className="contact-link"
            >
              ayush.kccitm@gmail.com
            </a>
          </div>

          {/* PHONE */}

          <div className="info-item">
            <FaPhone />

            <a
              href="tel:+918709556402"
              className="contact-link"
            >
              +91 8709556402
            </a>
          </div>

          {/* LOCATION */}

          <div className="info-item">
            <FaMapMarkerAlt />

            <span>
              Greater Noida, Uttar Pradesh
            </span>
          </div>

          {/* SOCIAL LINKS */}

          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/ayush-kumar-659ab0329"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Ayush-kcc-15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;