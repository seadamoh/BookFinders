import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './sign-in.styles.scss';


const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    if (email === 'test@gmail.com' && password === 'test123') {
      // Successful sign-in, navigate to the main page
      navigate('/Home');
    } else {
      // Invalid email or password, display error message
      setError('You need to register');
    }
  };

  return (
    
    <div className="sign-in-page">
      <h1>WelCOME TO BOOK FINDER</h1>
      <h3> Please Sign in to access all the book</h3>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="sign-in-button" onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default SignInPage;
