import './Gallery.css';

const images = [
  "/campus.jpg",
  "/building.jpg",
  "/auditoriam.jpg",
  "/lab1.jpg",
  "/lab2.jpg",
  "/lab3.jpg",
  "/classroom.jpg",
  "/library.jpg",
  "/staffroom.jpg",
  "/parking.jpg",
  "/sports.jpg",
  "/ground.jpg",
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
