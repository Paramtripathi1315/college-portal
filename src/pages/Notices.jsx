import './Notices.css';

const notices = [
  {
    title: "Mid-Sem Exam Timetable Released",
    date: "2025-07-01",
    content: "Mid-semester exam schedule for all UG and PG programs is now available on the notice board and portal.",
  },
  {
    title: "Workshop on Data Science (BCA Dept)",
    date: "2025-06-28",
    content: "A 2-day workshop on Data Science and Python is being conducted on 5th–6th July for BCA students. Register in CS Lab-2.",
  },
  {
    title: "Library Summer Hours",
    date: "2025-06-25",
    content: "The library will operate from 9 AM to 5 PM during the summer semester break (July 1–31).",
  },
  {
    title: "Call for Campus Ambassadors",
    date: "2025-06-22",
    content: "Students interested in representing the college at events and seminars can apply for the Campus Ambassador Program.",
  },
  {
    title: "Semester Results Announcement",
    date: "2025-06-15",
    content: "Results for Semester 2 and 4 have been published. Check the results portal using your roll number.",
  }
];


function Notices() {
  return (
    <div className="notices">
      <h1>Latest Notices</h1>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            <h3>{notice.title}</h3>
            <p>{notice.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notices;
