import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/GrievanceDetail.css"; // Assuming you have some styles

function GrievanceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [grievance, setGrievance] = useState(null);

  useEffect(() => {
    const fetchGrievance = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/grievances/${id}`);
        setGrievance(res.data);
      } catch (err) {
        console.error("Error loading grievance:", err);
        navigate("/admin-dashboard");
      }
    };
    fetchGrievance();
  }, [id, navigate]);

  const handlePrint = () => {
    window.print();
  };

  if (!grievance) return <div>Loading...</div>;

  return (
    <div className="detail-page" style={{ padding: "2rem" }}>
      <h2>📄 Grievance Form - {grievance.name}</h2>
      <p><strong>Email:</strong> {grievance.email}</p>
      <p><strong>Course:</strong> {grievance.course}</p>
      <p><strong>Enrollment No:</strong> {grievance.enrollment}</p>
      <p><strong>Message:</strong> {grievance.message}</p>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => navigate(-1)}>🔙 Back</button>
        <button onClick={handlePrint} style={{ marginLeft: "1rem" }}>🖨️ Print</button>
      </div>
    </div>
  );
}

export default GrievanceDetail;
