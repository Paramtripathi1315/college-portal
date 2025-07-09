import { Link } from 'react-router-dom';
import '../styles/Courses.css';

const programToRouteId = {
  "BCA": "bca",
  "MCA": "mca",
  "B.Sc. CS": "b_sc_cs",
  "M.Sc. CS": "m-sc-cs",
  "B.Sc. IT": "b-sc-it",
  "M.Sc. IT": "m-sc-it",
  "B.Com": "b-com",
  "M.Com": "m-com",
  "BBA": "bba",
  "MBA": "mba",
  "B.Sc. Mathematics": "b-sc-mathematics",
  "M.Sc. Mathematics": "m-sc-mathematics",
  "B.Sc. Physics": "b-sc-physics",
  "M.Sc. Physics": "m-sc-physics",
  "B.Sc. Chemistry": "b-sc-chemistry",
  "M.Sc. Chemistry": "m-sc-chemistry",
  "B.Sc. Biology": "b-sc-biology",
  "M.Sc. Biology": "m-sc-biology",
  "B.A.": "ba",
  "M.A.": "ma",
  "BA English": "ba-english",
  "BA History": "ba-history",
  "MA Political Science": "ma-political-science",
  "B.Ed.": "b-ed"
};

const coursesData = [
  {
    department: "Computer Science",
    programs: ["BCA", "MCA", "B.Sc. CS", "M.Sc. CS", "B.Sc. IT", "M.Sc. IT"]
  },
  {
    department: "Commerce",
    programs: ["B.Com", "M.Com", "BBA", "MBA"]
  },
  {
    department: "Science",
    programs: [
      "B.Sc. Mathematics",
      "M.Sc. Mathematics",
      "B.Sc. Physics",
      "M.Sc. Physics",
      "B.Sc. Chemistry",
      "M.Sc. Chemistry",
      "B.Sc. Biology",
      "M.Sc. Biology"
    ]
  },
  {
    department: "Arts",
    programs: [
      "B.A.",
      "M.A.",
      "BA English",
      "BA History",
      "MA Political Science",
      "B.Ed."
    ]
  }
];

function Courses() {
  return (
    <div className="courses">
      <h1>Academic Programs</h1>
       <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; Courses
      </nav>
      <div className="course-list">
        {coursesData.map((dept, index) => (
          <div className="course-card" key={index}>
            <h2>{dept.department}</h2>
            <ul>
              {dept.programs.map((program, i) => (
                <li key={i}>
                  <Link to={`/course/${programToRouteId[program] || program.toLowerCase().replace(/\s+/g, '-')}`}>
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
