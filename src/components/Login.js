import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// Define the Login component
const Login = ({ onLogin }) => {
  // Define the state variables using the useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Define a function to validate the email using a regular expression
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple email validation regex
    return emailRegex.test(value); // Return true if the email is valid, false otherwise
  };

  // Define the submit handler function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (!validateEmail(email)) {
      return; // If the email is not valid, return early
    }
  
    try {
      // Send a POST request to the login endpoint
      const response = await axios.post('https://frontend-take-home-service.fetch.com/auth/login', { name, email }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Pass credentials (cookies) with the request
      });
  
      if (response.status === 200) {
        const authToken = response.headers['fetch-access-token']; // Extract the token from the response headers
  
        // Store the token securely using localStorage
        localStorage.setItem('authToken', authToken);
  
        // Trigger the onLogin callback passed from the parent component
        onLogin();
      } else {
        console.error('Login failed:', response.status, response.statusText);
        // TODO: Handle login failure
      }
    } catch (error) {
      console.error('Error during login:', error);
      // TODO: Handle unexpected errors
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Render the login form
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={handleSubmit} className="login-form">
            <span className="login-form-title"> Rescue </span>
  
            <span className="login-form-title">
              <img src={""} alt="" />
              {/* put an image here, prob use an 8bit doggo or a fuild doggo */}
            </span>
  
            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
  
            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit">Login</button>
            </div>
  
            <div className="text-center">
              <span className="txt1">Wanna check out my GitHub? </span>
              <a className="txt2" href="https://github.com/henlowgg">
                "github logo"
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;