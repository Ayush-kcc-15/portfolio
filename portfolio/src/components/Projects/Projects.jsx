import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "Agree2Met",
      desc: "Agreement Management SaaS Platform",
      image: "https://picsum.photos/500/300?1",
      tech: ["React", "Node.js", "MongoDB"]
    },

    {
      title: "Automatic Gate System",
      desc: "Industrial Vehicle Entry Automation",
      image: "https://picsum.photos/500/300?2",
      tech: ["Python", "OpenCV", "MongoDB"]
    },

    {
      title: "Integrated Ropeway System",
      desc: "Smart Ropeway Monitoring System",
      image: "https://picsum.photos/500/300?3",
      tech: ["IoT", "AI/ML", "Python"]
    }

  ];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <h4>PROJECTS</h4>

      <h2>
        Featured Projects
      </h2>

      <div className="projects-grid">

        {projects.map((project,index) => (

          <div
            className="project-card"
            key={index}
          >

            <img
              src={project.image}
              alt=""
            />

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.desc}
              </p>

              <div className="tags">

                {project.tech.map(
                  (tech,i) => (

                  <span key={i}>
                    {tech}
                  </span>

                ))}

              </div>

              <button>
                View Project →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;