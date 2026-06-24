import "./Stats.css";

function Stats() {
  const stats = [
    { number: "8.8", label: "SGPA" },
    { number: "5+", label: "Projects" },
    { number: "4", label: "Patents" },
    { number: "20+", label: "Certificates" },
    { number: "2+", label: "Hackathons" },
  ];

  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;