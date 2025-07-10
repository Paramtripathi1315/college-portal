import React, { useState } from "react";
import axios from "axios";
import "../styles/GrievanceForm.css";

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    enrollment: "",
    course: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/grievances", formData);
      if (res.data.success) {
        setStatus("✅ Grievance submitted successfully.");
        setFormData({
          name: "",
          enrollment: "",
          course: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="grievance-form-container">
      <h2>Submit Grievance</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name (as per admission)"
          required
        />
        <input
          type="text"
          name="enrollment"
          value={formData.enrollment}
          onChange={handleChange}
          placeholder="Enrollment Number"
          required
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your grievance..."
          required
        ></textarea>
        <button type="submit">Submit Grievance</button>
      </form>
      {status && <p className="form-message">{status}</p>}
    </div>
  );
};

export default GrievanceForm;
