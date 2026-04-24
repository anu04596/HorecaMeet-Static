import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo placeholder - replace with actual logo.png */}
        <div className="logo-icon"><img src="logo-static.png" alt="Logo" /></div>
        <span className="navbar-brand">HORECA MEET</span>
      </div>
      <button className="register-btn-nav">Register Now</button>
    </nav>
  );
};

export default Navbar;
