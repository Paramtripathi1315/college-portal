import React, { useState } from "react";
import axios from "axios";
import "../styles/Admission.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    category: "",
    fatherName: "",
    motherName: "",
    course: "",
    address: "",
    qualification: "",
  });

  const [image, setImage] = useState(null);
  const [signature, setSignature] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "photo") setImage(e.target.files[0]);
    if (e.target.name === "signature") setSignature(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !signature) {
      setMessage("Please upload both photo and signature.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("photo", image);        // ✅ Must match backend
    data.append("signature", signature);

    try {
      const res = await axios.post("http://localhost:5000/api/admissions", data);
      if (res.status === 201) {
        setMessage("Admission form submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          category: "",
          fatherName: "",
          motherName: "",
          course: "",
          address: "",
          qualification: "",
        });
        setImage(null);
        setSignature(null);
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      setMessage("Error submitting form. Check console.");
      console.error(err);
    }
  };

  return (
    <div className="admission-form-container">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="General">General</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>

        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" required />
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother's Name" required />

        <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course Applying For" required />
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Highest Qualification" required />

        <label>Upload Photo:</label>
        <input type="file" name="photo" onChange={handleFileChange} accept="image/*" required />

        <label>Upload Signature:</label>
        <input type="file" name="signature" onChange={handleFileChange} accept="image/*" required />

        <button type="submit">Submit</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default AdmissionForm;
