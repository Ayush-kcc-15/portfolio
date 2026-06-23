import "./Skills.css";

function Skills() {

  const skills = [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "MongoDB",
    "Git",
    "AWS",
    "Cyber Security"
  ];

  return (
   <section id="skills" className="skills-section">

      <h4>SKILLS</h4>

      <h2>
        Technical Expertise
      </h2>

      <div className="skills-grid">

        {skills.map((skill,index) => (

          <div
            className="skill-card"
            key={index}
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;