import '../styles/Faculty.css';

const facultyData = [
  {
    name: "Dr. Ramesh Sharma",
    dept: "Computer Science",
    email: "rsharma@college.edu",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Dr. Anita Verma",
    dept: "Mathematics",
    email: "averma@college.edu",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Dr. Suresh Meena",
    dept: "Physics",
    email: "smeena@college.edu",
    photo: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Dr. Neha Patil",
    dept: "Chemistry",
    email: "npatil@college.edu",
    photo: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Dr. Rakesh Sharma",
    dept: "Computer Science",
    email: "rsharma2@college.edu",
    photo: "https://randomuser.me/api/portraits/men/72.jpg"
  },
  {
    name: "Prof. Meenakshi Joshi",
    dept: "Commerce",
    email: "mjoshi@college.edu",
    photo: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    name: "Dr. Anil Mehta",
    dept: "Physics",
    email: "amehta@college.edu",
    photo: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Prof. Sneha Verma",
    dept: "English",
    email: "sverma@college.edu",
    photo: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    name: "Dr. Kapil Dev",
    dept: "Chemistry",
    email: "kdev@college.edu",
    photo: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Prof. Nisha Jain",
    dept: "Management",
    email: "njain@college.edu",
    photo: "https://randomuser.me/api/portraits/women/75.jpg"
  },
  {
    name: "Dr. Saurabh Pandey",
    dept: "Political Science",
    email: "spandey@college.edu",
    photo: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    name: "Prof. Vaibhav Singh",
    dept: "Computer Applications",
    email: "vsingh@college.edu",
    photo: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    name: "Dr. Archana Gupta",
    dept: "Biology",
    email: "agupta@college.edu",
    photo: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Prof. Rahul Thakur",
    dept: "History",
    email: "rthakur@college.edu",
    photo: "https://randomuser.me/api/portraits/men/91.jpg"
  }
];

function Faculty() {
  return (
    <div className="faculty">
      <h1>Our Esteemed Faculty</h1>
      <div className="faculty-grid">
        {facultyData.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <img src={faculty.photo} alt={faculty.name} />
            <h3>{faculty.name}</h3>
            <p>{faculty.dept}</p>
            <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
