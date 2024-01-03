// SignupForm.js
import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signing up...');
  };

  return (
    <div className="signup_contianer">
    <div className="signup-form">
      <h2>Signup Form</h2>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div></div>
  );
}

export default SignupForm;
