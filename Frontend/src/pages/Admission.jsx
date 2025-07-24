import "../styles/Admission.css";
import axios from "axios";
import { useState } from "react";

function Admission() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    dob: "",
    gender: "",
    category: "",
    fatherName: "",
    motherName: "",
    address: "",
    qualification: "",
    photo: "",
    signature: "",
    enrollmentNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, [e.target.name]: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admissions",
        formData
      );
      alert(
        `Admission Successful! Enrollment No: ${response.data.enrollmentNo}`
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        dob: "",
        address: "",
        qualification: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="admission">
      <h1>Admission Form</h1>
      <form className="admission-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Father's Name</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />

        <label>Mother's Name</label>
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob ? formData.dob.split("T")[0] : ""}
          onChange={handleChange}
          required
        />
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="General">General</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="Other">Other</option>
        </select>

        <label>Highest Qualification</label>
        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="12th">12th</option>
          <option value="Diploma">Diploma</option>
          <option value="Graduation">Graduation</option>
        </select>

        <label>Course Applying For</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
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

        <label>Address</label>
        <textarea
          name="address"
          rows="4"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label>Upload Passport Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          
        />

        <label>Upload Signature</label>
        <input
          type="file"
          name="signature"
          accept="image/*"
          onChange={handleFileChange}
          
        />

        <button type="submit">Submit Admission</button>
      </form>
    </div>
  );
}

export default Admission;
