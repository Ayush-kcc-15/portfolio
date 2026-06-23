import "./Stats.css";
import CountUp from "react-countup";

<h2>
 <CountUp
   end={8.8}
   duration={3}
   decimals={1}
 />
</h2>

function Stats() {
  const stats = [
    { number: "8.8", title: "CGPA" },
    { number: "10+", title: "Projects" },
    { number: "2", title: "Patents" },
    { number: "20+", title: "Certificates" },
    { number: "5+", title: "Hackathons" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;