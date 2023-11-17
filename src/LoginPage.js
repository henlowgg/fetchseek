import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  // Callback function to handle successful login
  const handleLoginSuccess = () => {
    // Redirect to the home page after successful login
    history.push('/home');
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* Pass the handleLoginSuccess callback to the LoginForm component */}
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
