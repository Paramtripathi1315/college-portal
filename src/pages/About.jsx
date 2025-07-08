import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Our College</h1>
        <p>Learn more about our mission, vision, and legacy.</p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a leading institution that fosters academic excellence, research innovation, and holistic development.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <ul>
          <li>Provide quality education through updated curriculum and teaching methods.</li>
          <li>Encourage student-centered learning and leadership.</li>
          <li>Support social, cultural, and ethical responsibility.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our History</h2>
        <p>
          Established in 1995, our college has grown from a humble campus into a thriving academic hub with 30+ departments and over 10,000 students.
        </p>
      </section>
    </div>
  );
}

export default About;
