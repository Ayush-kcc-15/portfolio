import "./Projects.css";


import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
 const projects = [
  {
    title: "Agree2Met",

    desc: "Smart Agreement Management SaaS Platform with secure agreements, digital verification, AI-powered workflows, escrow support, and modern dashboard experience.",

    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
    ],

    github: "https://github.com/Ayush-kcc-15",
    demo: "#",
  },

  {
    title: "Amazon Clone",

    desc: "A fully responsive Amazon-inspired e-commerce platform featuring product listings, cart management, user authentication, and modern UI built with React.",

    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",

    tech: [
      "React",
      "Firebase",
      "CSS",
    ],

    github: "https://github.com/Ayush-kcc-15",
    demo: "#",
  },

  {
    title: "AI Chatbot Assistant",

    desc: "Intelligent AI-powered chatbot capable of answering queries, providing instant responses, and enhancing user interaction using NLP and machine learning techniques.",

    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",

    tech: [
      "Python",
      "NLP",
      "AI/ML",
    ],

    github: "https://github.com/Ayush-kcc-15",
    demo: "#",
  },
];

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-header">
        <span>PROJECTS</span>

        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="tags">
                {project.tech.map(
                  (tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;