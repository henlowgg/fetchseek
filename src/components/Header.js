import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="header">
      <h1>Rescue</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;