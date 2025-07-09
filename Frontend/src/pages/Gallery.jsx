import '../styles/Gallery.css';

const images = [
  "/images/campus.jpg",
  "/images/building.jpg",
  "/images/auditoriam.jpg",
  "/images/lab1.jpg",
  "/images/lab2.jpg",
  "/images/lab3.jpg",
  "/images/classroom.jpg",
  "/images/library.jpg",
  "/images/staffroom.jpg",
  "/images/parking.jpg",
  "/images/sports.jpg",
  "/images/ground.jpg",
];

function Gallery() {
  return (
    <div className="gallery">
      <h1>Campus Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
