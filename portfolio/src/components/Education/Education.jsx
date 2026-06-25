import "./Education.css";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
  FaAward,
} from "react-icons/fa";

const education = [
  {
    id: 1,

    year: "2024\n-\n2028",

    icon: <FaGraduationCap />,

    degree: "B.Tech Computer Science & Engineering",

    institute: "KCC Institute of Technology & Management",

    board: "Dr. A.P.J Abdul Kalam Technical University",

    badge: "CGPA\n: 8.8 /\n10",

    accent: "#C67C5A",
  },

  {
    id: 2,

    year: "2021\n-\n2023",

    icon: <FaBookOpen />,

    degree: "Intermediate (Science)",

    institute: "SRKG College, Sitamarhi",

    board: "BSEB Board",

    badge: "Higher\nSecondary",

    accent: "#4B82F1",
  },

  {
    id: 3,

    year: "2020\n-\n2021",

    icon: <FaSchool />,

    degree: "Matriculation (10th)",

    institute: "Saraswati Vidya Mandir, Sitamarhi, Bihar",

    board: "CBSE Board",

    badge: "Secondary\nEducation",

    accent: "#35C36E",
  },
];

function Education() {

  return (

    <section
      id="education"
      className="education-section"
    >

      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >

        <span>EDUCATION</span>

        <h2>Academic Journey</h2>

        <p>
          Building a strong academic foundation in
          Computer Science through continuous learning,
          innovation and practical experience.
        </p>

      </motion.div>

      <div className="education-timeline">
              {education.map((item, index) => (

          <motion.div
            key={item.id}
            className="timeline-row"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
              delay: index * .15,
            }}
            viewport={{ once: true }}
          >

            {/* Left Icon */}

            <div
              className="timeline-icon"
              style={{
                "--accent": item.accent,
              }}
            >

              {item.icon}

            </div>

            {/* Card */}

            <div
              className="education-card"
              style={{
                "--accent": item.accent,
              }}
            >

              <div className="education-top">

                <div
                  className="year-circle"
                  style={{
                    background: item.accent,
                  }}
                >

                  {item.year
                    .split("\n")
                    .map((line, i) => (

                      <span key={i}>

                        {line}

                      </span>

                    ))}

                </div>

                <div
                  className="grade-circle"
                >

                  {item.badge
                    .split("\n")
                    .map((line, i) => (

                      <span key={i}>

                        {line}

                      </span>

                    ))}

                </div>

              </div>

              <div className="education-content">

                <h3>

                  {item.degree}

                </h3>

                <h4>

                  {item.institute}

                </h4>

                <p>

                  {item.board}

                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Education;