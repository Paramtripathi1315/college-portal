import '../styles/Contact.css';
import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    enrollment: '',
    course: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/grievance', formData);
      setSubmitted(true);
      setError('');
      setFormData({
        name: '',
        enrollment: '',
        course: '',
        email: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
  console.error("Grievance submission error:", err); // ← Add this
  setError(err.response?.data?.message || 'Submission failed. Try again.');
  setSubmitted(false);
}

  };

  return (
    <div className="contact">
      <h1>Student Grievance Portal</h1>

      <div className="contact-container">
        {error && <p className="error-msg">{error}</p>}
        {submitted && <p className="success-msg">✅ Grievance submitted successfully!</p>}

        {!submitted && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Enrollment Number</label>
            <input
              type="text"
              name="enrollment"
              placeholder="Enrollment number"
              value={formData.enrollment}
              onChange={handleChange}
              required
            />

            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Course --</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="B.Com">B.Com</option>
              <option value="M.Com">M.Com</option>
              <option value="B.Sc. CS">B.Sc. CS</option>
              <option value="M.Sc. CS">M.Sc. CS</option>
              <option value="B.Sc. IT">B.Sc. IT</option>
              <option value="M.Sc. IT">M.Sc. IT</option>
              <option value="B.Sc. Mathematics">B.Sc. Mathematics</option>
              <option value="M.Sc. Mathematics">M.Sc. Mathematics</option>
              <option value="B.Sc. Physics">B.Sc. Physics</option>
              <option value="M.Sc. Physics">M.Sc. Physics</option>
              <option value="B.Sc. Chemistry">B.Sc. Chemistry</option>
              <option value="M.Sc. Chemistry">M.Sc. Chemistry</option>
              <option value="B.Sc. Biology">B.Sc. Biology</option>
              <option value="M.Sc. Biology">M.Sc. Biology</option>
              <option value="B.A.">B.A.</option>
              <option value="M.A.">M.A.</option>
              <option value="B.Ed.">B.Ed.</option>
            </select>

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Registered email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Grievance Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Explain your issue..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Grievance</button>
          </form>
        )}

        <div className="contact-info">
          <h3>📍 College Address</h3>
          <p><b>123 Knowledge Lane, Udaipur, Rajasthan</b></p>

          <h3>📞 Phone</h3>
          <p><b>+91 12345 67890</b></p>

          <h3>📧 Email</h3>
          <p><b>info@college.edu</b></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
