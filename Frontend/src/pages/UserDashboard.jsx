import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/UserDashboard.css'; // Assuming you have a CSS file for styling

function UserDashboard() {
  const navigate = useNavigate();

  // Simulate user session check
  const user = {
    name: "Param Tripathi",
    email: "param@example.com",
    role: "Student",
    course: "BCA",
    year: "Final Year"
  };

  useEffect(() => {
    // Redirect if not logged in (dummy check here)
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Course:</strong> {user.course}</p>
        <p><strong>Year:</strong> {user.year}</p>
      </div>

      <div className="dashboard-links">
        <button onClick={() => navigate("/notices")}>📢 View Notices</button>
        <button onClick={() => navigate("/syllabus/bca")}>📘 View Syllabus</button>
        <button onClick={() => navigate("/gallery")}>🖼️ View Gallery</button>
        <button onClick={() => navigate("/student-corner")}>⭐ Student Corner</button>
      </div>
    </div>
  );
}

export default UserDashboard;
