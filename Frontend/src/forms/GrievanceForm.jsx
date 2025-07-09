import React, { useState } from "react";
import axios from "axios";
import "../styles/GrievanceForm.css";

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming there's a route like /api/grievance (create backend if needed)
      const res = await axios.post("http://localhost:5000/api/grievance", formData);
      if (res.data.success) {
        setStatus("Grievance submitted successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try later.");
    }
  };

  return (
    <div className="grievance-form-container">
      <h2>Grievance Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your grievance here..."
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {status && <p className="form-message">{status}</p>}
    </div>
  );
};

export default GrievanceForm;
