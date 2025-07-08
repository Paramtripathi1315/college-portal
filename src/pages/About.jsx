import './About.css';
// import directorImg from '/director.jpg'; // place image in public folder or src/assets

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Our College</h1>
        <p>
          Welcome to our institution – a hub of academic excellence, innovation, and holistic development.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become a leading center of academic excellence that transforms students into responsible global citizens through innovation and value-based education.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <ul>
          <li>Deliver quality education that empowers students to excel in life.</li>
          <li>Foster research, creativity, and entrepreneurial spirit.</li>
          <li>Encourage community service, leadership, and ethical conduct.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Key Highlights</h2>
        <ul>
          <li>State-of-the-art laboratories and smart classrooms</li>
          <li>Highly qualified faculty with industry and research experience</li>
          <li>Vibrant campus with cultural, technical & sports events</li>
          <li>Strong industry tie-ups and placement support</li>
        </ul>
      </div>

      <div className="director-section">
        <h2>Message from the Director</h2>
        <div className="director-content">
          <img src="" alt="College Director" className="director-img" />
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
