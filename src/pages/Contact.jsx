import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("contactMessages", JSON.stringify(updated));

    setFormData({ name: '', email: '', message: '' });
    alert("Message saved locally!");
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

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
