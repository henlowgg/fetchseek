import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (value) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

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
