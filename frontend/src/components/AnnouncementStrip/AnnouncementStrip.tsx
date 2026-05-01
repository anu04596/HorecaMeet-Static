import React from 'react';
import './AnnouncementStrip.css';

const AnnouncementStrip: React.FC = () => {
  return (
    <div className="announcement-strip">
      <span className="strip-icon">🗓️</span>
      <div className="strip-content">
        <span className="strip-text">
          Horeca Meet Expo 2026 — Coming May 2026 · ITEC Noida Sector 62 · 
        </span>
      </div>
    </div>
  );
};

export default AnnouncementStrip;
