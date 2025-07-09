import { useParams, Link } from 'react-router-dom';
import './CourseDetails.css';

const courseInfo = {
  bca: {
    name: "Bachelor of Computer Applications (BCA)",
    seats: 120,
    fees: "₹35,000 per semester",
    duration: "3 years (6 semesters)",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/bca.pdf",
    description: "An undergraduate program focused on foundational computer science, programming languages, and software development. Prepares students for careers in IT, software, and systems management."
  },
  mca: {
    name: "Master of Computer Applications (MCA)",
    seats: 60,
    fees: "₹45,000 per semester",
    duration: "2 years (4 semesters)",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/mca.pdf",
    description: "A postgraduate course focusing on advanced computer applications, software engineering, data structures, and cloud computing. Suitable for graduates in CS or IT."
  },
  "b_sc_cs": {
    name: "Bachelor of Science in Computer Science",
    seats: 100,
    fees: "₹30,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_sc_cs.pdf",
    description: "Focuses on scientific and mathematical foundations of computing. Includes data science, algorithms, and computational theory."
  },
  "m-sc-cs": {
    name: "Master of Science in Computer Science",
    seats: 40,
    fees: "₹50,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_sc_cs.pdf",
    description: "Advanced academic study of theoretical and applied computing, with research options and specializations."
  },
  "b-sc-it": {
    name: "Bachelor of Science in Information Technology",
    seats: 100,
    fees: "₹30,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_sc_it.pdf",
    description: "Covers networking, databases, programming, and system administration with industry-focused IT training."
  },
  "m-sc-it": {
    name: "Master of Science in Information Technology",
    seats: 50,
    fees: "₹45,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_sc_it.pdf",
    description: "Advanced IT curriculum with focus on software development, data analytics, and enterprise systems."
  },
  "b-com": {
    name: "Bachelor of Commerce (B.Com)",
    seats: 150,
    fees: "₹25,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_com.pdf",
    description: "Covers commerce, accounting, taxation, business law, and economics. Prepares students for CA, CS, or business careers."
  },
  "m-com": {
    name: "Master of Commerce (M.Com)",
    seats: 80,
    fees: "₹30,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_com.pdf",
    description: "Advanced concepts in finance, economics, and business analytics. Suitable for commerce graduates pursuing higher careers."
  },
  "bba": {
    name: "Bachelor of Business Administration (BBA)",
    seats: 90,
    fees: "₹40,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/bba.pdf",
    description: "Focuses on management, leadership, marketing, and HR. Gateway to MBA and corporate roles."
  },
  "mba": {
    name: "Master of Business Administration (MBA)",
    seats: 60,
    fees: "₹60,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/mba.pdf",
    description: "Equips students with business strategies, finance, marketing, and operations knowledge."
  },
  "b-sc-mathematics": {
    name: "Bachelor of Science in Mathematics",
    seats: 80,
    fees: "₹28,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_sc_math.pdf",
    description: "Algebra, calculus, and applied math. Prepares for research, analytics, and teaching."
  },
  "m-sc-mathematics": {
    name: "Master of Science in Mathematics",
    seats: 40,
    fees: "₹32,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_sc_math.pdf",
    description: "Advanced study in pure and applied mathematics, including topology and mathematical modeling."
  },
  "b-sc-physics": {
    name: "Bachelor of Science in Physics",
    seats: 70,
    fees: "₹28,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_sc_phy.pdf",
    description: "Core physics concepts, mathematics, and laboratory skills. Good foundation for research and technical careers."
  },
  "m-sc-physics": {
    name: "Master of Science in Physics",
    seats: 40,
    fees: "₹35,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_sc_phy.pdf",
    description: "Advanced quantum mechanics, solid-state physics, and experimental methods."
  },
  "b-sc-chemistry": {
    name: "Bachelor of Science in Chemistry",
    seats: 70,
    fees: "₹28,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_sc_chem.pdf",
    description: "Organic, inorganic, and physical chemistry with lab work. Useful for pharma, teaching, and research roles."
  },
  "m-sc-chemistry": {
    name: "Master of Science in Chemistry",
    seats: 40,
    fees: "₹35,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_sc_chem.pdf",
    description: "In-depth study of chemical reactions, spectroscopy, and material science."
  },
  "b-sc-biology": {
    name: "Bachelor of Science in Biology",
    seats: 80,
    fees: "₹28,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/b_sc_bio.pdf",
    description: "Botany, zoology, cell biology. Foundation for life sciences and health sectors."
  },
  "m-sc-biology": {
    name: "Master of Science in Biology",
    seats: 50,
    fees: "₹32,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/m_sc_bio.pdf",
    description: "Cell biology, genetics, ecology, and lab techniques. Suitable for research, biotech, and higher education."
  },
  "ba": {
    name: "Bachelor of Arts (B.A.)",
    seats: 120,
    fees: "₹22,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/ba.pdf",
    description: "Core subjects in humanities including history, political science, sociology, and languages."
  },
  "ma": {
    name: "Master of Arts (M.A.)",
    seats: 80,
    fees: "₹25,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/ma.pdf",
    description: "Postgraduate study in humanities subjects with specialization and research opportunities."
  },
  "b-ed": {
    name: "Bachelor of Education (B.Ed.)",
    seats: 100,
    fees: "₹30,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/b_ed.pdf",
    description: "Professional training for teaching in schools. Includes pedagogy, psychology, and practical teaching."
  },
  "ba-english": {
    name: "Bachelor of Arts in English",
    seats: 100,
    fees: "₹22,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/ba_english.pdf",
    description: "Literature, linguistics, and communication. Great for writing, media, teaching, and civil services."
  },
  "ba-history": {
    name: "Bachelor of Arts in History",
    seats: 90,
    fees: "₹22,000 per semester",
    duration: "3 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2028",
    syllabus: "/syllabus/ba_history.pdf",
    description: "Ancient to modern history, culture, archaeology. Useful for teaching, research, and competitive exams."
  },
  "ma-political-science": {
    name: "Master of Arts in Political Science",
    seats: 60,
    fees: "₹26,000 per semester",
    duration: "2 years",
    startDate: "August 1, 2025",
    endDate: "July 31, 2027",
    syllabus: "/syllabus/ma_pol_science.pdf",
    description: "Political theory, public administration, international relations. Ideal for UPSC, academics, and policy-making."
  }
};

function CourseDetails() {
  const { id } = useParams();
  const course = courseInfo[id];

  return (
    <div className="course-details">
      {course ? (
        <div className="card">
          <h1>{course.name}</h1>
          <div className="info-grid">
            <p><strong>Seats:</strong> {course.seats}</p>
            <p><strong>Fees:</strong> {course.fees}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Start Date:</strong> {course.startDate}</p>
            <p><strong>End Date:</strong> {course.endDate}</p>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Syllabus:</strong> <a href={course.syllabus} target="_blank" rel="noreferrer">Download PDF</a></p>
          </div>
          <Link to="/courses" className="back-link">← Back to Courses</Link>
        </div>
      ) : (
        <p className="error">No information found for this course.</p>
      )}
    </div>
  );
}

export default CourseDetails;
