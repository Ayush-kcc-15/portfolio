import "./Stats.css";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaGraduationCap />,
    value: 8.8,
    suffix: "",
    decimals: 1,
    label: "Current CGPA",
  },
  {
    icon: <FaLaptopCode />,
    value: 5,
    suffix: "+",
    decimals: 0,
    label: "Projects Built",
  },
  {
    icon: <FaLightbulb />,
    value: 4,
    suffix: "",
    decimals: 0,
    label: "Patent Applications",
  },
  {
    icon: <FaCertificate />,
    value: 20,
    suffix: "+",
    decimals: 0,
    label: "Certifications",
  },
  {
    icon: <FaUsers />,
    value: 2,
    suffix: "+",
    decimals: 0,
    label: "Hackathons",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>
              <AnimatedCounter
                value={item.value}
                decimals={item.decimals}
              />
              {item.suffix}
            </h2>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;