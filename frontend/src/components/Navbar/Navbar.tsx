import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        {/* Logo placeholder - replace with actual logo.png */}
        <div className="logo-icon"><img src="logo-static.png" alt="Logo" /></div>
        <span className="navbar-brand">HORECA MEET</span>
      </div>
      <button className="register-btn-nav" onClick={() => navigate('/register')}>Register Now</button>
    </nav>
  );
};

export default Navbar;
