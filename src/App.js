import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DogLoading from './components/DogLoading/DogLoading'; // Import DogLoading component
import './components/login.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setShouldRedirect(true);
    setIsLoading(true); // Set isLoading to true after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  useEffect(() => {
    if (shouldRedirect) {
      setShouldRedirect(false);
    }
  }, [shouldRedirect]);

  useEffect(() => {
    if (isLoading) {
      // Start a timeout to stop the loading animation after 5 seconds
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      // Clear the timeout if the component unmounts or the login status changes
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div className="App">
      <Router>
        {isLoading ? ( // Render the DogLoading component if isLoading is true
          <DogLoading />
        ) : (
          <>
            {isLoggedIn && <Header onLogout={handleLogout} />}
            <Routes>
              <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
              {isLoggedIn && <Route path="/home" element={<HomePage />} />}
              <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
              />
            </Routes>
            {isLoggedIn && <Navbar />}
          </>
        )}
      </Router>
    </div>
  );
};

export default App;