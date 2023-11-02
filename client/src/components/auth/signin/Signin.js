// src/components/SignUpForm.js
import React, { useState } from 'react';
import './Signin.css';

const SignIn = () => {
  

  const [signInData, setSignInData] = useState({
    signInEmail: '',
    signInPassword: '',
  });

 

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };



  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in form submission, e.g., authentication
  };

  return (
   

      <div className="sign-in-form">
        
        <h2 class="form-title">Sign In</h2>
        <form className="form" onSubmit={handleSignInSubmit}>
          <input
            type="email"
            name="signInEmail"
            placeholder="Email"
            value={signInData.signInEmail}
            onChange={handleSignInChange}
            required
          />
          <input
            type="password"
            name="signInPassword"
            placeholder="Password"
            value={signInData.signInPassword}
            onChange={handleSignInChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        
      </div>
    
  );
};

export default SignIn;
