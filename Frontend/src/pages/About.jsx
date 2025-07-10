import '../styles/About.css'
import { useState } from 'react';

const sections = [
  {
    title: "Our Vision",
    content:
      "To become a leading center of academic excellence that transforms students into responsible global citizens through innovation and value-based education."
  },
  {
    title: "Our Mission",
    content: (
      <ul>
        <li>Deliver quality education that empowers students to excel in life.</li>
        <li>Foster research, creativity, and entrepreneurial spirit.</li>
        <li>Encourage community service, leadership, and ethical conduct.</li>
      </ul>
    )
  },
  {
    title: "Academic Excellence",
    content:
      "Our curriculum is continuously updated to match the latest academic and industrial trends. We take pride in our students' performance across national and state-level competitive exams."
  },
  {
    title: "Student Achievements",
    content: (
      <ul>
        <li>National Coding Championship Winners (2024)</li>
        <li>Gold Medal in Inter-University Debate (2023)</li>
        <li>State Topper in MCA (2023)</li>
        <li>100+ Students Placed in TCS, Infosys & Wipro</li>
      </ul>
    )
  },
  {
    title: "Industry Collaboration",
    content:
      "Tie-ups with top companies provide our students with internships, training, and placement opportunities. We host regular industry talks and job fairs."
  },
  {
    title: "Research & Innovation",
    content:
      "Faculty and students are involved in over 150+ research publications and multiple funded projects. Several innovations are patented yearly."
  },
  {
    title: "Global Outreach",
    content:
      "Our collaborations with international universities offer student exchange, dual degrees, and global internship opportunities."
  }
];

function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="about-collapsible">
      <h1 className="about-title">About Our College</h1>

      {sections.map((section, index) => (
        <div key={index} className="collapsible-section">
          <div
            className="collapsible-header"
            onClick={() => toggleSection(index)}
          >
            <h2>{section.title}</h2>
            <span>{openSection === index ? "−" : "+"}</span>
          </div>

          {openSection === index && (
            <div className="collapsible-content">
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          )}
        </div>
      ))}

      <div className="director-section">
        <h2>Message from the Director</h2>
        <div className="director-content">
          <img src="../images/director.jpg" alt="College Director" className="director-img" />
          <p>
            "As the Director of this prestigious institution, I am proud to lead a team committed to academic brilliance and student-centric growth. We are not just imparting education but shaping responsible citizens who will lead the world with knowledge and integrity."
            <br /><br />
            <strong>- Dr. Rajesh Mehta, Director</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
