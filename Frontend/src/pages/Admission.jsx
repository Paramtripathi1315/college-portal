import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [admissions, setAdmissions] = useState([]);
  const [grievances, setGrievances] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [selectedGrievance, setSelectedGrievance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const fetchedUser = res.data.user;
        setUser(fetchedUser);

        if (fetchedUser.role !== "admin") {
          alert("Access denied. Admins only.");
          navigate("/");
        } else {
          fetchForms();
        }
      } catch (err) {
        console.error("User fetch error:", err);
        navigate("/auth");
      } finally {
        setLoading(false);
      }
    };

    const fetchForms = async () => {
      try {
        const admissionRes = await axios.get("http://localhost:5000/api/admissions");
        const grievanceRes = await axios.get("http://localhost:5000/api/grievances");
        setAdmissions(Array.isArray(admissionRes.data) ? admissionRes.data : []);
        setGrievances(Array.isArray(grievanceRes.data) ? grievanceRes.data : []);
      } catch (error) {
        console.error("Error fetching form data:", error);
        setAdmissions([]);
        setGrievances([]);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <div>Loading admin dashboard...</div>;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {user && <h2>Welcome, {user.name}</h2>}

      {/* ADMISSIONS */}
      <div className="form-section">
        <h3>📋 Admission Submissions</h3>
        {admissions.length === 0 ? (
          <p>No admission submissions found.</p>
        ) : (
          <ul>
            {admissions.map((admission, idx) => (
              <li key={idx} onClick={() => setSelectedAdmission(admission)}>
                <strong>{admission.fullName}</strong> - {admission.email}
              </li>
            ))}
          </ul>
        )}

        {selectedAdmission && (
          <div className="detail-box">
            <h4>Admission Details</h4>
            <p><strong>Full Name:</strong> {selectedAdmission.fullName}</p>
            <p><strong>Email:</strong> {selectedAdmission.email}</p>
            <p><strong>Phone:</strong> {selectedAdmission.phone}</p>
            <p><strong>DOB:</strong> {selectedAdmission.dob}</p>
            <p><strong>Course:</strong> {selectedAdmission.course}</p>
            <p><strong>Qualification:</strong> {selectedAdmission.qualification}</p>
            <p><strong>Address:</strong> {selectedAdmission.address}</p>
            <p><strong>Enrollment No:</strong> {selectedAdmission.enrollmentNo}</p>

            {selectedAdmission.photo && (
              <p>
                <strong>Photo:</strong>
                <img
                  src={`http://localhost:5000/uploads/${selectedAdmission.photo}`}
                  width="100"
                  alt="Student"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </p>
            )}

            {selectedAdmission.signature && (
              <p>
                <strong>Signature:</strong>
                <img
                  src={`http://localhost:5000/uploads/${selectedAdmission.signature}`}
                  width="100"
                  alt="Signature"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </p>
            )}

            <button onClick={() => setSelectedAdmission(null)}>Close</button>
          </div>
        )}
      </div>

      {/* GRIEVANCES */}
      <div className="form-section">
        <h3>📨 Grievance Submissions</h3>
        {grievances.length === 0 ? (
          <p>No grievance submissions found.</p>
        ) : (
          <ul>
            {grievances.map((grievance, idx) => (
              <li key={idx} onClick={() => setSelectedGrievance(grievance)}>
                <strong>{grievance.name}</strong> - {grievance.email}
              </li>
            ))}
          </ul>
        )}

        {selectedGrievance && (
          <div className="detail-box">
            <h4>Grievance Details</h4>
            <p><strong>Name:</strong> {selectedGrievance.name}</p>
            <p><strong>Enrollment No:</strong> {selectedGrievance.enrollment}</p>
            <p><strong>Course:</strong> {selectedGrievance.course}</p>
            <p><strong>Email:</strong> {selectedGrievance.email}</p>
            <p><strong>Message:</strong> {selectedGrievance.message}</p>
            <button onClick={() => setSelectedGrievance(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
