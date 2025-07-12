import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

function Signup({ setIsLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // ⬅️ for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/'); // ⬅️ redirect after signup
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <button className="link-btn" onClick={() => setIsLogin(true)}>
          Log in
        </button>
      </p>
    </div>
  );
}

export default Signup;
