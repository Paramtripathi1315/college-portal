// src/pages/AdminDashboard.jsx
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
        const admissionRes = await axios.get(
          "http://localhost:5000/api/admissions"
        );
        const grievanceRes = await axios.get(
          "http://localhost:5000/api/grievances"
        );

        setAdmissions(
          Array.isArray(admissionRes.data) ? admissionRes.data : []
        );
        setGrievances(
          Array.isArray(grievanceRes.data) ? grievanceRes.data : []
        );
      } catch (error) {
        console.error("Error fetching form data:", error);
        setAdmissions([]);
        setGrievances([]);
      }
    };

    fetchUser();
  }, [navigate]);
  console.log("Grievances:", grievances);

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
          <div className="details-box">
            <h4>📌 Admission Details</h4>
            <table
              border="1"
              cellPadding="10"
              style={{ borderCollapse: "collapse", width: "100%" }}
            >
              <tbody>
                <tr>
                  <td>
                    <strong>Full Name</strong>
                  </td>
                  <td>{selectedAdmission.fullName}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Enrollment No</strong>
                  </td>
                  <td>{selectedAdmission.enrollmentNo}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td>{selectedAdmission.email}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone</strong>
                  </td>
                  <td>{selectedAdmission.phone}</td>
                </tr>
                <tr>
                  <td>
                    <strong>DOB</strong>
                  </td>
                  <td>{selectedAdmission.dob}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Course</strong>
                  </td>
                  <td>{selectedAdmission.course}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Qualification</strong>
                  </td>
                  <td>{selectedAdmission.qualification}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address</strong>
                  </td>
                  <td>{selectedAdmission.address}</td>
                </tr>
                {selectedAdmission.photo && (
                  <tr>
                    <td>
                      <strong>Photo</strong>
                    </td>
                    <td>
                      <img
                        src={`http://localhost:5000/uploads/${selectedAdmission.photo}`}
                        width="100"
                        alt={`${selectedAdmission.fullName}`}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </td>
                  </tr>
                )}
                {selectedAdmission.signature && (
                  <tr>
                    <td>
                      <strong>Signature</strong>
                    </td>
                    <td>
                      <img
                        src={`http://localhost:5000/uploads/${selectedAdmission.signature}`}
                        width="100"
                        alt={`${selectedAdmission.fullName}'s signature`}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <button
              onClick={() => setSelectedAdmission(null)}
              style={{ marginTop: "1rem" }}
            >
              Close
            </button>
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
          <div className="details-box">
            <h4>📌 Grievance Details</h4>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>{selectedGrievance.name}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td>{selectedGrievance.email}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Course</strong>
                  </td>
                  <td>{selectedGrievance.course}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Enrollment</strong>
                  </td>
                  <td>{selectedGrievance.enrollment}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Message</strong>
                  </td>
                  <td>{selectedGrievance.message}</td>
                </tr>
              </tbody>
            </table>

            <button
              onClick={() => setSelectedGrievance(null)}
              style={{ marginTop: "10px" }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
