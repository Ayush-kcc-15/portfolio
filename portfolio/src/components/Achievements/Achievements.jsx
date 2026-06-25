import "./Achievements.css";

import { motion } from "framer-motion";

import {
  FaAward,
  FaCertificate,
  FaLightbulb,
  FaLaptopCode,
  FaUsers,
  FaRobot,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLightbulb />,
    number: "4",
    title: "Patent Applications",
    description:
      "Published and filed innovative patents in Industrial Automation, Smart Transportation and Geological Safety.",
  },

  {
    icon: <FaCertificate />,
    number: "40+",
    title: "Professional Certifications",
    description:
      "Completed certifications from IBM, AWS, Microsoft, Accenture, HP LIFE, TCS iON and more.",
  },

  {
    icon: <FaLaptopCode />,
    number: "5+",
    title: "Projects Developed",
    description:
      "Built real-world Full Stack, AI and Cloud-based applications with modern technologies.",
  },

  {
    icon: <FaUsers />,
    number: "2+",
    title: "Hackathons",
    description:
      "Participated in hackathons solving real-world problems using AI and software development.",
  },

  {
    icon: <FaAward />,
    number: "2",
    title: "IBM Digital Badges",
    description:
      "Earned industry-recognized IBM Credly digital badges in Artificial Intelligence.",
  },

  {
    icon: <FaRobot />,
    number: "AI",
    title: "Continuous Learning",
    description:
      "Focused on Generative AI, Cloud Computing, Cybersecurity and Full Stack Development.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>ACHIEVEMENTS</span>

        <h2>Milestones & Recognition</h2>

        <p>
          A collection of academic, technical and professional
          achievements that reflect my continuous learning
          journey and passion for innovation.
        </p>
      </motion.div>

      <div className="achievements-grid">
                {achievements.map((item, index) => (

          <motion.div
            key={index}
            className="achievement-card"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            <div className="achievement-icon">

              {item.icon}

            </div>

            <h3 className="achievement-number">

              {item.number}

            </h3>

            <h4 className="achievement-title">

              {item.title}

            </h4>

            <p className="achievement-description">

              {item.description}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Achievements;