import "./Education.css";

function Education() {
  const education = [
    {
      year: "2024 - 2028",
      title: "B.Tech Computer Science & Engineering",
      institute: "KCC Institute of Technology & Management",
      score: "CGPA: 8.8 / 10",
    },

    {
      year: "2021 - 2023",
      title: "Intermediate (Science)",
      institute: "SRKG College, Sitamarhi",
      score: "BSEB Board",
    },

    {
      year: "2020 - 2021",
      title: "Matriculation (10th)",
      institute: "Saraswati Vidya Mandir, Sitamarhi, Bihar",
      score: "CBSE Board",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-header">
        <span>EDUCATION</span>
        <h2>Academic Journey</h2>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-year">
              {item.year}
            </div>

            <div className="education-content">
              <h3>{item.title}</h3>

              <h4>{item.institute}</h4>

              <p>{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;