import '../styles/Contact.css';
import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const admissions = JSON.parse(localStorage.getItem("admissionForms")) || [];

    const isValidStudent = admissions.some(
      (student) =>
        student.fullName.toLowerCase() === formData.name.toLowerCase() &&
        student.email.toLowerCase() === formData.email.toLowerCase() &&
        student.course === formData.course &&
        student.enrollment === formData.enrollment
    );

    if (!isValidStudent) {
      setError("❌ Student record not found. Please ensure your details match admission records.");
      setSubmitted(false);
      return;
    }

    const existing = JSON.parse(localStorage.getItem("grievanceForms")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("grievanceForms", JSON.stringify(updated));

    setFormData({
      name: '',
      enrollment: '',
      course: '',
      email: '',
      message: ''
    });
    setError('');
    setSubmitted(true);

    // ✅ Auto-hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <h1>Student Grievance Portal</h1>

      <div className="contact-container">
        {/* ✅ Show Success or Error */}
        {error && <p className="error-msg">{error}</p>}
        {submitted && <p className="success-msg">✅ Grievance submitted successfully!</p>}

        {/* ✅ Only show form if not submitted */}
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
