import './Admission.css';
import { useState } from 'react';

function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    dob: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("admissionForms")) || [];

    const alreadyExists = saved.some(
      (entry) => entry.email === formData.email && entry.course === formData.course
    );

    if (alreadyExists) {
      alert("An admission with this email and course already exists!");
      return;
    }

    const updated = [...saved, formData];
    localStorage.setItem("admissionForms", JSON.stringify(updated));

    alert("Admission form submitted and saved locally!");

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: '',
      dob: '',
      address: ''
    });
  };

  return (
    <div className="admission">
      <h1>Admission Form</h1>
      <form className="admission-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Course Applying For</label>
        <select name="course" value={formData.course} onChange={handleChange} required>
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

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Address</label>
        <textarea name="address" rows="4" value={formData.address} onChange={handleChange} required></textarea>

        <button type="submit">Submit Admission</button>
      </form>
    </div>
  );
}

export default Admission;
