import React from 'react';
import './SocialProof.css';

interface ProofCard {
  icon: string;
  title: string;
  description: string;
}

const proofCards: ProofCard[] = [
  {
    icon: "/icon1-social.png",
    title: 'Venue Confirmed',
    description: 'International Trade Expo Centre, Noida Sector 62. 45,000+ sq ft across 3 halls.',
  },
  {
    icon: "/icon2-social.png",
    title: 'Jury Confirmed',
    description:
      'Chef Sai Kumar, Chef Michael, Chef Anil, Chef Harish, Chef Ganesh Das. 2.5M+ combined reach.',
  },
  {
    icon: "/icon3-social.png",
    title: '15.2M+ Reach',
    description:
      'Content partners confirmed. 4 food and Horeca creators covering the event across all 3 days.',
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="social-proof">
      {/* Label */}
      <div className="sp-label-row">
        <span className="sp-label">Why Horeca Meet</span>
        <div className="sp-label-line" />
      </div>

      {/* Heading */}
      <h2 className="sp-heading">
        Built From Inside the{' '}
        <span className="sp-heading-accent">Industry.</span>
      </h2>

      {/* Subtext */}
      <p className="sp-subtext">
        Not event organisers who discovered hospitality. People who have worked inside Horeca for
        years.
      </p>

      {/* Cards */}
      <div className="sp-cards">
        {proofCards.map((card, i) => (
          <div className="sp-card" key={i}>
            <div className="sp-card-icon">
              <img src={card.icon} alt={card.title} style={{ width: '40px', height: '40px' }} />
            </div>
            <div className="sp-card-title">{card.title}</div>
            <div className="sp-card-desc">{card.description}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="sp-btn-group">
        <button className="sp-btn-primary" onClick={() => { window.location.href = 'https://horecameet.com/'; }}>Register Now</button>
        <button className="sp-btn-secondary" onClick={() => { window.location.href = 'https://horecameet.com/sponsorship'; }}>Exhibition &amp; Sponsorship Enquiry</button>
      </div>
    </section>
  );
};

export default SocialProof;