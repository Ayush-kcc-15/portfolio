import "./TechStack.css";

import {
 FaJava,
 FaReact,
 FaNodeJs,
 FaHtml5,
 FaCss3Alt,
 FaGitAlt
} from "react-icons/fa";

import {
  SiPython,
  SiJavascript,
  SiMongodb
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

function TechStack() {

  const techs = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaAws />, name: "AWS" },
  ];

  return (
    <section id="tech" className="tech-section">

      <h4>TECH STACK</h4>

      <h2>Tools & Technologies</h2>

      <div className="tech-grid">

        {techs.map((tech,index) => (

          <div
            className="tech-card"
            key={index}
          >
            <div className="tech-icon">
              {tech.icon}
            </div>

            <p>{tech.name}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TechStack;