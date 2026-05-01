import React from 'react';
import './HorecaRiseTeaser.css';

const HorecaRiseTeaser: React.FC = () => {
  return (
    <section className="rise-teaser">
      {/* Label */}
      <div className="rise-label-row">
        <span className="rise-label">Horeca Rise — Investment Programme</span>
        <div className="rise-label-line" />
      </div>

      {/* Heading */}
      <h2 className="rise-heading">
        Where Horeca Businesses Meet the{' '}
        <span className="rise-heading-accent">Capital They Need.</span>
      </h2>

      {/* Subtext */}
      <p className="rise-subtext">
        India's first structured investment programme for Horeca businesses. Apply for ₹1,000.
        Whether selected to pitch or not — your profile reaches every confirmed investor.
      </p>

      {/* Cards */}
      <div className="rise-cards">
        {/* Card 1 */}
        <div className="rise-card">
          <div className="rise-card-price">₹1,000</div>
          <div className="rise-card-title">Application Fee</div>
          <div className="rise-card-desc">
            Open to all Horeca businesses. Everyone who applies gets investor visibility.
          </div>
        </div>

        {/* Card 2 */}
        <div className="rise-card">
          <div className="rise-card-price">100</div>
          <div className="rise-card-title">Selected to Pitch Live</div>
          <div className="rise-card-desc">
            5 minutes to present, 5 minutes direct investor Q&A. On stage at Horeca Meet.
          </div>
        </div>

        {/* Card 3 */}
        <div className="rise-card">
          <div className="rise-card-price">₹5,000</div>
          <div className="rise-card-title">Total If Selected</div>
          <div className="rise-card-desc">
            Additional ₹4,000 after selection. Stage, brochure, post-event introductions.
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="rise-cta-wrap">
        <button className="rise-cta-btn" onClick={() => { window.location.href = 'https://horecameet.com/investor'; }}>Apply for Horeca Rise — ₹1,000</button>
      </div>
    </section>
  );
};

export default HorecaRiseTeaser;