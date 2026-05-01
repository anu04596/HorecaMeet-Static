import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './ConsultantZonePage.css';

interface ConsultantZoneProps {
  onBack?: () => void;
  onBookSlot?: () => void;
}

const tags = ['EXPERT ADVISORY', 'BUSINESS SOLUTIONS'];

const bullets = [
  'One-on-one discussions with domain experts',
  'Guidance on cost control, SOPs, and operational efficiency',
  'Support for expansion planning, franchising, and compliance',
  'Actionable recommendations tailored to your business stage',
];

export function ConsultantZonePage({ onBack}: ConsultantZoneProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/#formats-section');
  };


  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cz-page-container">

      {/* ─────────────── HERO ─────────────── */}
      <section className="cz-hero">
        <div className="cz-hero-content">

          {/* Breadcrumb */}
          <div className="cz-breadcrumb">
            <button onClick={handleBack} className="cz-breadcrumb-home">Home</button>
            <span className="cz-breadcrumb-separator">›</span>
            <span className="cz-breadcrumb-current">Consultant Zone</span>
          </div>

          {/* Heading */}
          <h1 className="cz-hero-title">
            Consultant <span className="cz-hero-title-accent">Zone</span>
          </h1>

          {/* Tags */}
          <div className="cz-hero-tags">
            {tags.map((tag, idx) => (
              <div key={idx} className="cz-hero-tag">
                <span className="cz-hero-tag-text">{tag}</span>
              </div>
            ))}
          </div>

          {/* Paragraph */}
          <p className="cz-hero-subtitle">
            A dedicated advisory space where Horeca operators can connect with specialized
            consultants across operations, branding, licensing, technology, and business expansion.
          </p>

        </div>
      </section>

      {/* ─────────────── IMAGE ─────────────── */}
      <div className="cz-image-section">
        <img src="public/consultant-zone.jpeg" alt="Consultant Zone" />
        <div className="cz-image-overlay" />
      </div>

      {/* ─────────────── BULLETS ─────────────── */}
      <section className="cz-bullets-section">
        <div className="cz-bullets-container">

          {/* Label */}
          <div className="cz-label-group">
            <span className="cz-label">WHAT'S INSIDE</span>
            <div className="cz-label-line" />
          </div>

          {/* Section title */}
          <h2 className="cz-bullets-title">
            Expert guidance. <br />
            <span className="cz-hero-title-accent">One conversation at a time.</span>
          </h2>

          {/* Bullet list */}
          <ul className="cz-bullets-list">
            {bullets.map((point, i) => (
              <li key={i} className="cz-bullet-item">
                <div className="cz-bullet-dot" />
                <span className="cz-bullet-text">{point}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="cz-cta-section">
        <div className="cz-cta-box">
          <span className="cz-cta-icon">🌐</span>
          <h2 className="cz-cta-title">Ready to talk to the right expert?</h2>
          <p className="cz-cta-subtitle">
            Book a slot at the Consultant Zone. Walk in with a problem. Walk out with a plan.
          </p>
          <button className="cz-cta-btn" onClick={() => { window.location.href = 'https://horecameet.com/consultant'; }}>
            BOOK A SLOT
          </button>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />

    </div>
  );
}