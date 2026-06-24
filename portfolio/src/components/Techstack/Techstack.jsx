import "./Techstack.css";

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

import { SiMongodb, SiJavascript } from "react-icons/si";

function TechStack() {

  const techs = [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
  ];

  return (
    <section
      id="techstack"
      className="tech-stack"
    >
      <div className="tech-header">

        <span>TECH STACK</span>

        <h2>
          Tools & Technologies
        </h2>

      </div>

      <div className="tech-grid">

        {techs.map((tech, index) => (

          <div
            className="tech-card"
            key={index}
          >

            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>{tech.name}</h3>

          </div>

        ))}

      </div>
    </section>
  );
}

export default TechStack;