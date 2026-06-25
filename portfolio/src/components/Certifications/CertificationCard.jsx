import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaCertificate,
} from "react-icons/fa";

function CertificationCard({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`certificate-card ${
        open ? "active" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
    >
      {/* ================= Header ================= */}

      <div
        className="certificate-top"
        onClick={() => setOpen(!open)}
      >
        <div
          className="certificate-logo"
          style={{
            background: item.color,
          }}
        >
          <img
            src={item.logo}
            alt={item.company}
            className="certificate-logo-img"
          />
        </div>

        <div className="certificate-info">
          <h3>{item.company}</h3>

          <span>
            {item.certificates.length}{" "}
            {item.certificates.length === 1
              ? "Certification"
              : "Certifications"}
          </span>
        </div>

        <FaChevronDown
          className={`dropdown-icon ${
            open ? "rotate" : ""
          }`}
        />
      </div>

      {/* ================= Skills ================= */}

      <div className="certificate-skills">
        {item.skills.map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>

      {/* ============== Expandable List ============== */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="certificate-list"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            {item.certificates.map(
              (certificate, i) => (
                <motion.div
                  key={i}
                  className="certificate-item"
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.04,
                  }}
                >
                  <FaCertificate />

                  <span>{certificate}</span>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CertificationCard;