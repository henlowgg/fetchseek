import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    // TODO: Implement the API call to /auth/login
    try {
      // Mock API call
      const response = await fetch('https://frontend-take-home-service.fetch.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        // Extract the token from the response headers
        const authToken = response.headers.get('fetch-access-token');
        
        // Store the token securely (for simplicity, using localStorage here)
        localStorage.setItem('authToken', authToken);

        // Trigger the onLogin callback
        onLogin();
      } else {
        console.error('Login failed:', response.status, response.statusText);
        // TODO: Handle login failure (show error message, etc.)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // TODO: Handle unexpected errors
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className="error-message">{emailError}</p>}
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
