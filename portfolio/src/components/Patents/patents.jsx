import "./patents.css";
import { FaShieldAlt, FaTram } from "react-icons/fa";

function Patent() {
  const patents = [
  {
    title: "Automatic Gate System for Industrial Security",
    status: "Patent Published",
    icon: <FaShieldAlt />,
    desc: "AI-powered industrial gate automation system with vehicle identification, OTP verification, and secure access control.",
  },

  {
    title: "Real Time Geological Traffic Integrated Carry capacity in hilly Areas",
    status: "Patent Application Filed",
    icon: <FaShieldAlt />,
    desc: "An intelligent platform for traffic regulation based on geological conditions and carrying capacity.",
  },

  {
    title: "Cumulative Impact of Vehicular Vibrations and Monsoonal Rainfall on Landslide Triggering in Nainital",
    status: "Patent Application Filed",
    icon: <FaShieldAlt />,
    desc: "A research-based system analyzing the combined effects of vehicular vibrations and monsoonal rainfall on landslide triggering in the Nainital region to improve risk assessment and disaster mitigation.",
  },

  {
    title: "Integrated Ropeway System for Smart Transportation",
    status: "Patent Application Filed",
    icon: <FaTram />,
    desc: "Smart ropeway monitoring system using IoT sensors and AI for safety, maintenance prediction, and transport efficiency.",
  },
];
  return (
    <section id="patents" className="patent-section">

      <div className="patent-header">
        <span>PATENTS</span>
        <h2>Patents & Research Innovations</h2>
      </div>

      <div className="patent-grid">

        {patents.map((patent, index) => (
          <div className="patent-card" key={index}>

            <div className="patent-icon">
              {patent.icon}
            </div>

            <h3>{patent.title}</h3>

            <p>{patent.desc}</p>

            <span className="patent-status">
              {patent.status}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Patent;