import './Faculty.css';

const facultyData = [
  {
    name: "Dr. Ramesh Sharma",
    dept: "Computer Science",
    email: "rsharma@college.edu",
  },
  {
    name: "Dr. Anita Verma",
    dept: "Mathematics",
    email: "averma@college.edu",
  },
  {
    name: "Dr. Suresh Meena",
    dept: "Physics",
    email: "smeena@college.edu",
  },
  {
    name: "Dr. Neha Patil",
    dept: "Chemistry",
    email: "npatil@college.edu",
  },
    {
    name: "Dr. Rakesh Sharma",
    dept: "Computer Science",
    email: "rsharma@college.edu",
  },
  {
    name: "Prof. Meenakshi Joshi",
    dept: "Commerce",
    email: "mjoshi@college.edu",
  },
  {
    name: "Dr. Anil Mehta",
    dept: "Physics",
    email: "amehta@college.edu",
  },
  {
    name: "Prof. Sneha Verma",
    dept: "English",
    email: "sverma@college.edu",
  },
  {
    name: "Dr. Kapil Dev",
    dept: "Chemistry",
    email: "kdev@college.edu",
  },
  {
    name: "Prof. Nisha Jain",
    dept: "Management",
    email: "njain@college.edu",
  },
  {
    name: "Dr. Saurabh Pandey",
    dept: "Political Science",
    email: "spandey@college.edu",
  },
  {
    name: "Prof. Vaibhav Singh",
    dept: "Computer Applications",
    email: "vsingh@college.edu",
  },
  {
    name: "Dr. Archana Gupta",
    dept: "Biology",
    email: "agupta@college.edu",
  },
  {
    name: "Prof. Rahul Thakur",
    dept: "History",
    email: "rthakur@college.edu",
  }

];

function Faculty() {
  return (
    <div className="faculty">
      <h1>Our Esteemed Faculty</h1>
      <div className="faculty-grid">
        {facultyData.map((faculty, index) => (
          <div className="faculty-card" key={index}>
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
