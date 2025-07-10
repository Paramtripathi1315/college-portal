import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdmissionDetail.css";


function AdmissionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [admission, setAdmission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmission = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/admissions/${id}`);
        setAdmission(res.data);
      } catch (err) {
        console.error("Error loading admission:", err);
        navigate("/admin-dashboard");
      } finally {
        setLoading(false);
      }
    };
    fetchAdmission();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (!admission) return <div>Admission not found.</div>;

  return (
    <div className="detail-page">
      <h2>Admission Form - {admission.fullName}</h2>
      <p><strong>Email:</strong> {admission.email}</p>
      <p><strong>Father's Name:</strong> {admission.fatherName}</p>
      <p><strong>Mother's Name:</strong> {admission.motherName}</p>
      <p><strong>Phone:</strong> {admission.phone}</p>
      <p><strong>DOB:</strong> {admission.dob}</p>
      <p><strong>Gender:</strong> {admission.gender}</p>
      <p><strong>Category:</strong> {admission.category}</p>
      <p><strong>Address:</strong> {admission.address}</p>
      <p><strong>Qualification:</strong> {admission.qualification}</p>
      <p><strong>Course:</strong> {admission.course}</p>
      <p><strong>Enrollment No:</strong> {admission.enrollmentNo}</p>

      {admission.photo && (
        <p>
          <strong>Photo:</strong><br />
          <img
            src={`http://localhost:5000/uploads/${admission.photo}`}
            width="150"
            alt={`${admission.fullName}`}
            onError={(e) => (e.target.style.display = "none")}
          />
        </p>
      )}
      {admission.signature && (
        <p>
          <strong>Signature:</strong><br />
          <img
            src={`http://localhost:5000/uploads/${admission.signature}`}
            width="150"
            alt={`${admission.fullName}'s signature`}
            onError={(e) => (e.target.style.display = "none")}
          />
        </p>
      )}
      <button onClick={() => navigate(-1)}>🔙 Back</button>
    </div>
  );
}

export default AdmissionDetail;
