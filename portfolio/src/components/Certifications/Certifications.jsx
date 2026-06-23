import { useState } from "react";
import "./Certifications.css";

function Certifications() {

  const [selected, setSelected] = useState("AWS");

  const certifications = {

    AWS: [
      "Fundamentals of ML & AI",
      "AWS Billing and Cost Management",
      "Build with Amazon EC2",
      "AWS Cloud Practitioner",
      "AWS CLI Basics"
    ],

    IBM: [
      "Intelligent by Design",
      "Cybersecurity: On the Offense",
      "Ethical AI",
      "Foundations in Generative AI",
      "Introduction to LLMs"
    ],

    Microsoft: [
      "Describe Cloud Services",
      "Cloud Computing",
      "Cloud Infrastructure",
      "Cloud Service Types"
    ],

    Unstop: [
      "AWS with AI",
      "Cloud Computing with AI",
      "Cybersecurity Mastery",
      "GitHub Workflow Mastery",
      "HackCraft 3.0"
    ],

    HP: [
      "AI for Beginners",
      "Critical Thinking in AI Era"
    ]
  };

  return (
    <section className="cert-section">

      <h2>Certifications</h2>

      <div className="company-buttons">

        {Object.keys(certifications).map((company) => (

          <button
            key={company}
            onClick={() => setSelected(company)}
          >
            {company}
          </button>

        ))}

      </div>

      <div className="certificate-list">

        {certifications[selected].map(
          (item,index) => (

          <div
            className="certificate-card"
            key={index}
          >
            {item}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;