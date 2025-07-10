import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/AdminDashboard.css'; // Your styles

function AdminDashboard() {
  const navigate = useNavigate();
  const [admissions, setAdmissions] = useState([]);
  const [grievances, setGrievances] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/auth");

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userData = res.data.user;
        setUser(userData);

        if (userData.role !== "admin") {
          alert("Access denied. Admins only.");
          return navigate("/");
        }

        fetchForms(); // ✅ fetch only if admin
      } catch (err) {
        console.error(err);
        navigate("/auth");
      }
    };

    const fetchForms = async () => {
      try {
        const admissionRes = await axios.get("http://localhost:5000/api/admissions");
        const grievanceRes = await axios.get("http://localhost:5000/api/grievances");
        setAdmissions(admissionRes.data);
        setGrievances(grievanceRes.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {user && <h2>Welcome, {user.name}</h2>}

      <div className="form-section">
        <h3>📋 Admission Submissions</h3>
        <ul>
          {admissions.map((admission, idx) => (
            <li key={idx}>
              <strong>{admission.fullName}</strong> - {admission.email}
            </li>
          ))}
        </ul>
      </div>

      <div className="form-section">
        <h3>📨 Grievance Submissions</h3>
        <ul>
          {grievances.map((grievance, idx) => (
            <li key={idx}>
              <strong>{grievance.name}</strong> - {grievance.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
