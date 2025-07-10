// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';

function Login({ setIsLogin, isAdmin = false }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
      const { token, user } = res.data;

      if (isAdmin && user.role !== 'admin') {
        alert("You are not authorized as admin.");
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      alert(res.data.message || 'Login successful!');

navigate(user.role === 'admin' ? '/admin-dashboard' : '/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isAdmin ? 'Admin Login' : 'Login'}</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
      {!isAdmin && (
        <p>
          Don't have an account?{' '}
          <button className="link-btn" onClick={() => setIsLogin(false)}>
            Sign up
          </button>
        </p>
      )}
    </div>
  );
}

export default Login;
