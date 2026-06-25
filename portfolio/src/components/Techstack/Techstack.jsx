import "./Techstack.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const techCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
  },

  {
    title: "Backend",
    icon: <FaDatabase />,
    technologies: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaDatabase />, name: "MongoDB" },
      { icon: <FaDatabase />, name: "MySQL" },
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: <FaCloud />,
    technologies: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ],
  },

  {
    title: "Programming",
    icon: <FaCode />,
    technologies: [
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
    ],
  },
];

function Techstack() {
  return (
    <section id="techstack" className="techstack-section">

      {/* Header */}

      <motion.div
        className="techstack-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>TECH STACK</span>

        <h2>Technologies I Love Working With</h2>

        <p>
          A collection of technologies, programming languages,
          frameworks and cloud platforms that I use to build
          modern, scalable and user-friendly applications.
        </p>

      </motion.div>

      {/* Grid */}

      <div className="techstack-grid">

        {techCategories.map((category, index) => (

          <motion.div
            key={index}
            className="tech-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <div className="tech-card-header">

              <div className="tech-main-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

            </div>

            <div className="tech-list">

              {category.technologies.map((tech, i) => (

                <div
                  className="tech-item"
                  key={i}
                >

                  <div className="tech-icon">
                    {tech.icon}
                  </div>

                  <span>{tech.name}</span>

                </div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Techstack;