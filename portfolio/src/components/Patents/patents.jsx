import "./Patents.css";

import { motion } from "framer-motion";

import {
  FaIndustry,
  FaMountain,
  FaRoad,
  FaTram,
  FaCheckCircle,
} from "react-icons/fa";

const patents = [
  {
    icon: <FaIndustry />,
    title: "Automatic Gate System for Industrial Security",
    status: "Patent Published",
    description:
      "A smart industrial security solution featuring intelligent vehicle identification, automated access control, OTP verification and real-time monitoring to improve operational safety and efficiency.",
    technologies: ["IoT", "Computer Vision", "Automation", "Security"],
  },

  {
    icon: <FaMountain />,
    title:
      "Real Time Geological Traffic Integrated Carry Capacity in Hilly Areas",
    status: "Patent Application Filed",
    description:
      "An intelligent traffic and geological monitoring framework that combines real-time sensing, AI analytics and environmental data to improve transportation safety in hilly regions.",
    technologies: ["AI", "IoT", "Sensors", "Cloud"],
  },

  {
    icon: <FaRoad />,
    title:
      "Cumulative Impact of Vehicular Vibrations and Monsoonal Rainfall on Landslide Triggering in Nainital",
    status: "Patent Application Filed",
    description:
      "A research-driven system analysing traffic vibrations and rainfall to predict landslide risks and support disaster mitigation.",
    technologies: ["GIS", "Data Analysis", "Geology", "AI"],
  },

  {
    icon: <FaTram />,
    title: "Integrated Ropeway System for Smart Transportation",
    status: "Patent Application Filed",
    description:
      "A smart ropeway transportation system with intelligent monitoring and passenger management for safer mobility in mountainous regions.",
    technologies: ["Smart Mobility", "IoT", "AI", "Transportation"],
  },
];

function Patents() {
  return (
    <section id="patents" className="patents-section">
      <motion.div
        className="patents-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>PATENTS</span>

        <h2>Innovation & Intellectual Property</h2>

        <p>
          Research-driven innovations focused on solving real-world problems
          through intelligent systems, automation and emerging technologies.
        </p>
      </motion.div>

      <div className="patents-grid">
        {patents.map((patent, index) => (
          <motion.div
            key={index}
            className="patent-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="patent-icon">
              {patent.icon}
            </div>

            <div className="patent-status">
              <FaCheckCircle />
              <span>{patent.status}</span>
            </div>

            <h3>{patent.title}</h3>

            <p>{patent.description}</p>

            <div className="patent-tags">
              {patent.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Patents;