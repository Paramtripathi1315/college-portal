import { useParams, Link } from "react-router-dom";
import "../styles/NoticeDetails.css";

const notices = [
  {
    id: "mid-sem-exam",
    title: "Mid-Sem Exam Timetable Released",
    date: "2025-07-01",
    details:
      "Mid-semester exam schedule is available on the portal and department boards. Download the PDF and check your course code carefully. Practical exams will follow the theory schedule.",
  },
  {
    id: "data-science-workshop",
    title: "Workshop on Data Science (BCA Dept)",
    date: "2025-06-28",
    details:
      "2-day workshop on Python, Pandas, and Machine Learning basics for BCA students. Venue: CS Lab-2. Seats: 50 (first-come, first-served).",
  },
  {
    id: "library-hours",
    title: "Library Summer Hours",
    date: "2025-06-25",
    details:
      "Library will remain open from 9 AM to 5 PM during July 1–31. No late fines during this period. Carry your ID for entry.",
  },
  {
    id: "campus-ambassador",
    title: "Call for Campus Ambassadors",
    date: "2025-06-22",
    details:
      "Be the face of your college at conferences, workshops, and hackathons. Register at Student Welfare Cell by July 5.",
  },
  {
    id: "semester-results",
    title: "Semester Results Announcement",
    date: "2025-06-15",
    details:
      "Results for Semester 2 and 4 are out. Visit the student portal and use your roll number to view/download your marksheet.",
  },
  {
    id: "sports-trials",
    title: "Inter-College Sports Trials",
    date: "2025-06-12",
    details:
      "Sports trials for inter-college cricket and volleyball will be held on 18th June. Registration open till 15th June at Sports Office.",
  },
  {
    id: "internship-fair",
    title: "Internship Fair 2025",
    date: "2025-06-10",
    details:
      "Top companies including Infosys, TCS, and Wipro will visit on 25th June. Carry resumes and be dressed formally. Slots will be pre-registered.",
  },
  {
    id: "yoga-day",
    title: "International Yoga Day Celebration",
    date: "2025-06-08",
    details:
      "Join the Yoga session at 6:00 AM on 21st June. Venue: College Ground. Free T-shirts and refreshments for all participants.",
  },
  {
    id: "blood-donation",
    title: "Blood Donation Camp",
    date: "2025-06-05",
    details:
      "Organized by NSS on 10th June at Auditorium Hall. Timings: 10 AM to 2 PM. Please eat and hydrate before donation.",
  },
  {
    id: "holiday-announcement",
    title: "Holiday on 10th July (Election Day)",
    date: "2025-06-02",
    details:
      "As per government notification, the college will remain closed on 10th July due to state elections. Classes will resume on 11th July.",
  },
];

function NoticeDetails() {
  const { id } = useParams();
  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    return (
      <div className="notice-details">
        <div className="notice-detail-card">
          <h2>Notice not found</h2>
          <Link to="/notices" className="back-link">
            ← Back to Notices
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="notice-details">
      <div className="notice-detail-card">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/notices">Notices</Link> &gt; {notice.title}
        </nav>
        <h2>{notice.title}</h2>
        <p><strong>{notice.date}</strong></p>
        <p>{notice.details}</p>
        <Link to="/notices" className="back-link">← Back to Notices</Link>
      </div>
    </div>
  );
}

export default NoticeDetails;
