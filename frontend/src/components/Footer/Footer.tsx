import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const formats = [
    'Horeca Chef Competition',
    'Industry Sessions',
    'Exhibition Zone',
    'Star Awards',
    'B2B Interaction Zones',
    'Horeca Rise',
    'Consultant Connect',
  ];

  const quickActions = [
    'Register as Delegate — Free',
    'Register for Chef Competition',
    'Nominate for Star Awards',
    'Apply for Horeca Rise',
    'Franchise Discovery Zone',
    'Exhibition Enquiry',
  ];

  const contactLinks = [
    'info@horecameet.com',
    '+91 98919 10943',
    'Send Enquiry',
    'Speaker Application',
    'Media & Press',
  ];

  return (
    <footer className="footer">
      {/* Brand */}
      <div className="footer-brand">
        <div className="footer-logo-row">
          <div className="footer-logo-icon"><img src="public/logo-static.png" alt="" /></div>
          <span className="footer-logo-text">HORECA MEET</span>
        </div>
        <p className="footer-brand-desc">
          India's first curated B2B platform for the hospitality and food industry. Built from
          inside the industry — for the people who run it.
        </p>
        <p className="footer-tagline">Start · Build · Grow</p>
      </div>

      {/* 7 Formats */}
      <div className="footer-col">
        <h4 className="footer-col-title">7 Formats</h4>
        <ul className="footer-link-list">
          {formats.map((f, i) => (
            <li key={i}>
              <a href="#" className="footer-link">
                {f}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="footer-col">
        <h4 className="footer-col-title">Quick Actions</h4>
        <ul className="footer-link-list">
          {quickActions.map((a, i) => (
            <li key={i}>
              <a href="#" className="footer-link">
                {a}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-col">
        <h4 className="footer-col-title">Contact</h4>
        <ul className="footer-link-list">
          {contactLinks.map((c, i) => (
            <li key={i}>
              <a href="#" className="footer-link">
                {c}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Venue Card */}
      <div className="footer-venue">
        <span className="footer-venue-label">VENUE</span>
        <p className="footer-venue-address">
          International Trade Expo Centre
          <br />
          Sector 62, Noida NCR
        </p>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Horeca Meet Expo. All rights reserved.
        </p>
        <p className="footer-bottom-tagline">Start · Build · Grow</p>
      </div>
    </footer>
  );
};

export default Footer;