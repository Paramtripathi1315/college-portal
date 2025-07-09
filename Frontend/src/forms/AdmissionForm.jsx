import React, { useState } from "react";
import axios from "axios";
import "../styles/Admission.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    address: "",
  });

  const [image, setImage] = useState(null);
  const [signature, setSignature] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "image") setImage(e.target.files[0]);
    if (e.target.name === "signature") setSignature(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !signature) {
      setMessage("Please upload both image and signature.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("image", image);
    data.append("signature", signature);

    try {
      const res = await axios.post("http://localhost:5000/api/admission", data);
      if (res.data.success) {
        setMessage("Admission form submitted successfully!");
        setFormData({ fullName: "", email: "", phone: "", course: "", address: "" });
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
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
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
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course Applying For"
          required
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        ></textarea>

        <label>Upload Image:</label>
        <input type="file" name="image" onChange={handleFileChange} accept="image/*" required />

        <label>Upload Signature:</label>
        <input type="file" name="signature" onChange={handleFileChange} accept="image/*" required />

        <button type="submit">Submit</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default AdmissionForm;
