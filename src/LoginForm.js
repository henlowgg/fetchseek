import React, { useState } from 'react';

const LoginForm = () => {
  // State variables to hold the user's name, email, and email error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  // Function to handle the login process
  const handleLogin = async () => {
    // Validate email format before proceeding
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear previous email error if any
    setEmailError(null);

    try {
      // Send a POST request to the login endpoint
      const response = await fetch('https://frontend-take-home-service.fetch.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
        credentials: 'include',
      });

      // Check if the login was successful (HTTP status code 200)
      if (response.ok) {
        console.log('Login successful!');
      } else {
        // Authentication failed, handle the error
        console.error('Login failed');
      }
    } catch (error) {
      // Handle any errors that occur during the login process
      console.error('Error during login:', error);
    }
  };

  // Basic email format validation function
  const validateEmail = (email) => {
    // Regular expression for a simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Render the login form JSX
  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* Input field for the user's name */}
      <label style={{ marginBottom: '10px', display: 'block' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '8px' }} />
      </label>
      {/* Input field for the user's email */}
      <label style={{ marginBottom: '10px', display: 'block' }}>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px' }} />
        {/* Display email error message if validation fails */}
        {emailError && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{emailError}</p>}
      </label>
      {/* Button to trigger the login process */}
      <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
        Login
      </button>
    </div>
  );
};

// Export the LoginForm component to be used in other parts of the application
export default LoginForm;
