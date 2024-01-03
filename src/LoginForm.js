// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log(`Logging in as ${username}`);
  };

  const handleSignup = () => {
   
    console.log('Signing up...');
  };

  const handleResetPassword = () => {
    
    console.log('Resetting password...');
  };

  return (
    <div className="form_container">
    <div className="login-form">
      <h2>Login Form</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="button-group">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
          <button type="button" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      </form>
    </div></div>
  );
}

export default LoginForm;
