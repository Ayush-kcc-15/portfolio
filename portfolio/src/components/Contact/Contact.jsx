import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <motion.div
        className="contact-header"
        initial={{
          opacity:0,
          y:40,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        transition={{
          duration:.6,
        }}
        viewport={{
          once:true,
        }}
      >

        <span>

          CONTACT

        </span>

        <h2>

          Let's Build Something Amazing

        </h2>

        <p>

          Whether it's a project, internship,
          collaboration or just a friendly hello,
          feel free to reach out. I'm always open
          to discussing new opportunities.

        </p>

      </motion.div>

      <div className="contact-container">

        {/* ==========================
                LEFT CARD
        =========================== */}

        <motion.div

          className="contact-info"

          initial={{
            opacity:0,
            x:-60,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:.6,
          }}

          viewport={{
            once:true,
          }}

        >

          <h3>

            Get in Touch

          </h3>

          <p>

            I'm always interested in discussing
            software development, AI, internships,
            freelance work, or exciting
            collaboration opportunities.

          </p>

          <div className="contact-items">

            <div className="contact-item">

              <div className="contact-icon">

                <FaEnvelope />

              </div>

              <div>

                <h4>Email</h4>

                <span>

                  ayush.kccitm@gmail.com

                </span>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">

                <FaPhoneAlt />

              </div>

              <div>

                <h4>Phone</h4>

                <span>

                  +91 8709556402

                </span>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h4>Location</h4>

                <span>

                  Greater Noida,
                  Uttar Pradesh

                </span>

              </div>

            </div>

          </div>

          <div className="social-links">
                        <a
              href="https://github.com/Ayush-kcc-15"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub />

              <span>

                GitHub

              </span>

            </a>

            <a
              href="https://www.linkedin.com/in/ayush-kumar-659ab0329"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaLinkedin />

              <span>

                LinkedIn

              </span>

            </a>

          </div>

        </motion.div>

        {/* ==========================
                RIGHT CARD
        =========================== */}

        <motion.div

          className="contact-form"

          initial={{
            opacity:0,
            x:60,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:.6,
          }}

          viewport={{
            once:true,
          }}

        >

          <form>

            <div className="input-group">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

            </div>

            <div className="input-group">

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                placeholder="Subject"
                required
              />

            </div>

            <div className="input-group">

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              />

            </div>

            <button
              type="submit"
              className="send-btn"
            >

              <FaPaperPlane />

              <span>

                Send Message

              </span>

            </button>

          </form>

        </motion.div>

      </div>

    </section>

  );

}

export default Contact;