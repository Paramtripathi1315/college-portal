import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import '../styles/LoginSignup.css';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Signup setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default LoginSignup;
