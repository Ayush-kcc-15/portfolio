import "./Achievements.css";

import {
  FaTrophy,
  FaAward,
  FaCloud,
  FaRobot,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Patent Applications",
      desc: "4+ Patent Applications Filed",
    },

    {
      icon: <FaAward />,
      title: "IBM Skill Badges",
      desc: "20+ IBM & Credly Badges Earned",
    },

    {
      icon: <FaCloud />,
      title: "Cloud Certifications",
      desc: "AWS & Microsoft Certified",
    },

    {
      icon: <FaRobot />,
      title: "Generative AI",
      desc: "Multiple AI & LLM Certifications",
    },

    {
      icon: <FaLaptopCode />,
      title: "Hackathons",
      desc: "HackCraft & Innovation Events",
    },

    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      desc: "8.8 CGPA in B.Tech CSE",
    },
  ];

  return (
    <section
      id="achievements"
      className="achievement-section"
    >
      <div className="achievement-header">
        <span>ACHIEVEMENTS</span>

        <h2>My Achievements</h2>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="achievement-card"
          >
            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;