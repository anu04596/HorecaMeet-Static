import React from 'react';
import './HeroSection.css';

const stats = [
  { number: '3', label: 'DAYS' },
  { number: '7', label: 'FORMATS' },
  { number: '5k+', label: 'HORECA DECISION MAKERS' },
  { number: '8k+', label: 'TOTAL ATTENDEES' },
];

const HeroSection: React.FC = () => {
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
            H<span className="hero-title-icon"><img src="logo-static.png" alt="Logo" /></span>RECA
          </h1>
          <div className="hero-subtitle-line">MEET EXPO 2026</div>
        </div>

        <p className="hero-tagline">
          Where Hospitality &amp; Food Come Together · ITEC Noida Sector 62
        </p>
      </div>

      {/* Hero Second - Stats + Buttons */}
      <div className="hero-second">
        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <button className="btn-register">Register Now — Free for Delegates</button>
          <button className="btn-explore">Explore 7 Formats ↓</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
