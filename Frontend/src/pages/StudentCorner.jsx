import '../styles/StudentCorner.css';

const testimonials = [
  {
    name: "Priya Sharma",
    batch: "BCA 2022",
    message: "Amazing faculty and campus life! I learned a lot here.",
    rating: 5
  },
  {
    name: "Aman Gupta",
    batch: "M.Sc. 2021",
    message: "The labs and library facilities are top-notch.",
    rating: 4
  },
  {
    name: "Ankit Soni",
    batch: "M.Sc. CS (2024)",
    message: "The faculty members are always ready to guide and mentor. Labs are very well equipped too.",
    rating: 5
  },
  {
    name: "Harshita Jain",
    batch: "B.Com (Hons.) 2023",
    message: "The commerce department has a great teaching approach, and I loved participating in fests!",
    rating: 4
  },
  {
    name: "Mohit Parmar",
    batch: "B.Sc. Physics",
    message: "Physics labs and experiments gave us a lot of practical insights. Loved the exposure through national seminars.",
    rating: 4
  },
  {
    name: "Riya Shah",
    batch: "BBA 2025",
    message: "Case studies and presentations prepared me well for internships and interviews. Highly recommend the program!",
    rating: 5
  },
  {
    name: "Imran Qureshi",
    batch: "BA English 2024",
    message: "From poetry to post-colonial literature, the content was rich and the discussions were engaging.",
    rating: 4
  }
];

function StudentCorner() {
  const renderStars = (count) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < count ? "filled" : ""}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="student-corner">
      <h1>Student Corner</h1>
      <div className="testimonial-section">
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            <h3>{t.name}</h3>
            <p><strong>{t.batch}</strong></p>
            <p>{t.message}</p>
            {renderStars(t.rating)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCorner;
