import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const stats = [
  { number: '3', label: 'DAYS' },
  { number: '7', label: 'FORMATS' },
  { number: '5k+', label: 'HORECA DECISION MAKERS' },
  { number: '8k+', label: 'TOTAL ATTENDEES' },
];

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Hero First - Badge + Title */}
      <div className="hero-first">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span className="badge-text">INDIA'S FIRST CURATED B2B HORECA PLATFORM</span>
        </div>

        <div className="hero-logo-block">
          <h1 className="hero-title">
            H<span className="hero-title-icon"><img src="logo-static2.png" alt="Logo" /></span>RECA
          </h1>
          <div className="hero-subtitle-container">
            <div className="hero-subtitle-line-element" />
            <span className="hero-subtitle-text">MEET EXPO 2026</span>
          </div>
        </div>

        <p className="hero-tagline">
          Where Hospitality &amp; Food Come Together · ITEC Noida Sector 62
        </p>
      </div>



      {/* Hero Second - Stats + Buttons */}

      <div className="hero-second">

        <div className="hero-actions">
          <button className="btn-register" onClick={() => navigate('/register')}>Register Now — Free for Delegates</button>
          <button className="btn-explore" onClick={() => {document.querySelector(".format-card")?.scrollIntoView({ behavior: "smooth" });}}>Explore 7 Formats ↓</button>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
