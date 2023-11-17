import React, { useState } from 'react';
import Login from './components/Login';
import HomePage from './components/HomePage';
import './styles.css';




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h2>Welcome to the Dog Adoption App!</h2>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      <HomePage />
    </div>
  );
};

export default App;
