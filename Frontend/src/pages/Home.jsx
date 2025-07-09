import '../styles/Home.css';
import About from './About';
import Notices from './Notices';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const sliderImages = [
  "/images/campus.jpg",
  "/images/building.jpg",
  "/images/auditoriam.jpg",
  "/images/lab1.jpg",
  "/images/lab2.jpg",
  "/images/lab3.jpg",
  "/images/classroom.jpg",
  "/images/library.jpg",
  "/images/parking.jpg",
  "/images/ground.jpg",
];

const festImages = [
  "/images/fest1.jpg",
  "/images/fest2.jpg",
  "/images/fest3.jpg",
  "/images/fest4.jpg",
];


function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="slider-container">
          {sliderImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`slider-image ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="hero-content">
          <h1>College Portal</h1>
          <p>Your gateway to academic resources, faculty, and campus life.</p>
          <a href="/courses" className="hero-btn">Explore Courses</a>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight">
          <Link to="/courses" className="highlight-link">
            <h3>📚 30+ Courses</h3>
            <p>Diverse UG & PG programs across various departments.</p>
          </Link>
        </div>
        <div className="highlight">
          <Link to="/faculty" className="highlight-link">
            <h3>👨‍🏫 Expert Faculty</h3>
            <p>Learn from experienced professors and researchers.</p>
          </Link>
        </div>
        <div className="highlight">
          <Link to="/gallery" className="highlight-link">
            <h3>🏛️ Campus Facilities</h3>
            <p>Modern labs, digital library, sports & more.</p>
          </Link>
        </div>
      </section>

      {/* 🎉 Fest Gallery Section */}
      <section className="fest-gallery">
        <h2>🎉 College Fest Highlights</h2>
        <div className="fest-images">
          {festImages.map((img, i) => (
            <img key={i} src={img} alt={`Fest ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* 🏆 Achievements Section */}
      <section className="achievements">
        <h2>🏆 College Achievements</h2>
        <ul>
          <li>NAAC Accredited with Grade A+</li>
          <li>Ranked Top 10 in State for BCA/MCA Program</li>
          <li>Winner of Smart India Hackathon 2024</li>
          <li>100+ Research Papers Published by Faculty</li>
          <li>Alumni placed in Infosys, Wipro, Google & more</li>
        </ul>
      </section>

      <Notices />
      <About />
    </div>
  );
}

export default Home;
