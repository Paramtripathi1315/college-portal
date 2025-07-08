import './Home.css';
import About from './About';
import Notices from './Notices';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const sliderImages = [
  "/campus.jpg",
  "/building.jpg",
  "/auditoriam.jpg",
  "/lab1.jpg",
  "/lab2.jpg",
  "/lab3.jpg",
  "/classroom.jpg",
  "/library.jpg",
  "/parking.jpg",
  "/ground.jpg",
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

      <Notices />
      <About />
    </div>
  );
}

export default Home;
