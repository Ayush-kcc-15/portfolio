import "./Achievements.css";

function Achievements() {
  const achievements = [
    "Patent Applications Filed",
    "IBM Skill Badges Earned",
    "Cloud Computing Certified",
    "Generative AI Certified",
    "Hackathon Participant",
    "Strong Academic Performance"
  ];

  return (
    <section
      id="achievements"
      className="achievement-section"
    >
      <h4>ACHIEVEMENTS</h4>

      <h2>My Achievements</h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="achievement-card"
          >
            ✅ {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;