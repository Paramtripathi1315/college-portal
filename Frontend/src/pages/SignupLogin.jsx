// src/pages/SignupLogin.jsx
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import '../styles/LoginSignup.css';
import '../styles/SignupLogin.css';
function SignupLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [adminMode, setAdminMode] = useState(false); // true only for Admin Login

  return (
    <div className="signup-login-wrapper">
      <div className="toggle-buttons">
        <button onClick={() => { setIsLogin(true); setAdminMode(false); }}>User Login</button>
        <button onClick={() => { setIsLogin(false); setAdminMode(false); }}>Sign Up</button>
        <button onClick={() => { setIsLogin(true); setAdminMode(true); }}>Admin Login</button>
      </div>

      {isLogin ? (
        <Login setIsLogin={setIsLogin} isAdmin={adminMode} />
      ) : (
        <Signup setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default SignupLogin;
