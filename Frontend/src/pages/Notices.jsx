import "../styles/Notices.css";
import { Link } from "react-router-dom";

const notices = [
  {
    id: "mid-sem-exam",
    title: "Mid-Sem Exam Timetable Released",
    date: "2025-07-01",
    content: "Mid-semester exam schedule is now available.",
  },
  {
    id: "data-science-workshop",
    title: "Workshop on Data Science (BCA Dept)",
    date: "2025-06-28",
    content: "2-day workshop on Python for BCA students.",
  },
  {
    id: "library-hours",
    title: "Library Summer Hours",
    date: "2025-06-25",
    content: "Library hours for summer break announced.",
  },
  {
    id: "campus-ambassador",
    title: "Call for Campus Ambassadors",
    date: "2025-06-22",
    content: "Students can apply for the Campus Ambassador Program.",
  },
  {
    id: "semester-results",
    title: "Semester Results Announcement",
    date: "2025-06-15",
    content: "Semester 2 and 4 results are published.",
  },
  {
    id: "sports-trials",
    title: "Inter-College Sports Trials",
    date: "2025-06-12",
    content: "Trials for cricket and volleyball on 18th June.",
  },
  {
    id: "internship-fair",
    title: "Internship Fair 2025",
    date: "2025-06-10",
    content: "Companies will be recruiting for internships on campus.",
  },
  {
    id: "yoga-day",
    title: "International Yoga Day Celebration",
    date: "2025-06-08",
    content: "Join the Yoga session at the college ground.",
  },
  {
    id: "blood-donation",
    title: "Blood Donation Camp",
    date: "2025-06-05",
    content: "NSS unit is organizing a blood donation drive.",
  },
  {
    id: "holiday-announcement",
    title: "Holiday on 10th July (Election Day)",
    date: "2025-06-02",
    content: "College will remain closed due to local elections.",
  },
];

function Notices() {
  return (
    <div className="notices">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; Notices
      </nav>

      <h1>Latest Notices</h1>
      <div className="notice-grid">
        {notices.map((notice, index) => (
          <Link
            to={`/notices/${notice.id}`}
            key={index}
            className="notice-card"
            aria-label={`View notice: ${notice.title}`}
          >
            <h3>{notice.title}</h3>
            <p>
              <strong>{notice.date}</strong>
            </p>
            <p>{notice.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Notices;
