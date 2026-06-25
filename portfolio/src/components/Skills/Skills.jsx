import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      { icon: <FaReact />, name: "React", level: 95 },
      { icon: <FaHtml5 />, name: "HTML5", level: 98 },
      { icon: <FaCss3Alt />, name: "CSS3", level: 96 },
      { icon: <FaJs />, name: "JavaScript", level: 90 },
    ],
  },

  {
    title: "Backend",
    icon: <FaDatabase />,
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", level: 85 },
      { icon: <FaDatabase />, name: "MongoDB", level: 82 },
      { icon: <FaDatabase />, name: "MySQL", level: 80 },
    ],
  },

  {
    title: "Programming",
    icon: <FaCode />,
    skills: [
      { icon: <FaJava />, name: "Java", level: 85 },
      { icon: <FaPython />, name: "Python", level: 88 },
    ],
  },

  {
    title: "Cloud & Tools",
    icon: <FaTools />,
    skills: [
      { icon: <FaAws />, name: "AWS", level: 82 },
      { icon: <FaGitAlt />, name: "Git", level: 90 },
      { icon: <FaGithub />, name: "GitHub", level: 92 },
      { icon: <FaCode />, name: "VS Code", level: 96 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>MY SKILLS</span>

        <h2>Technologies I Work With</h2>

        <p>
          My technical expertise spans frontend development,
          backend technologies, cloud platforms,
          databases and programming languages.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>

            {category.skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-top">
                  <div className="skill-name">
                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>

                  <span className="skill-percent">
                    {skill.level}%
                  </span>
                </div>

                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1.4,
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;