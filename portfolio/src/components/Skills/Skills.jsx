import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaAws />, name: "Cloud" },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-header">
        <span>SKILLS</span>
        <h2>Technical Expertise</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;