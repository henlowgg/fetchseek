import React, { useState } from 'react';
import Login from './Login';


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
    </div>
  );
};

export default App;
