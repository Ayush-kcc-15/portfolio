import "./Certifications.css";

import { motion } from "framer-motion";

import { certifications } from "./certificationData";

import CertificationCard from "./CertificationCard";

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      {/* Header */}

      <motion.div
        className="certifications-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>CERTIFICATIONS</span>

        <h2>
          Continuous Learning Journey
        </h2>

        <p>
          Over <strong>40+</strong> certifications and
          digital badges earned across Artificial
          Intelligence, Cloud Computing,
          Cybersecurity, Full Stack Development,
          Programming and Professional Skills.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="certifications-grid">
        {certifications.map((item, index) => (
          <CertificationCard
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Certifications;