import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './ChefCompetitionPage.css';

interface ChefCompetitionPageProps {
  onBack?: () => void;
  onRegister?: (category?: string) => void;
}

const checkPoints = [
  '20 professional kitchen stations · All 3 days',
  'Scored on technique, hygiene, presentation, taste, time',
  'Open floor viewing — come watch live without competing',
  'Ask celebrity jury questions directly between rounds',
];

export function ChefCompetitionPage({ onBack, onRegister }: ChefCompetitionPageProps) {
  const navigate = useNavigate();

  const handleRegister = (categoryId?: string) => {
    if (onRegister) {
      onRegister(categoryId);
    } else {
      navigate(categoryId ? `/chef?type=${categoryId}` : '/chef-category');
    }
  };

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/');
  };

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chef-page-container">

      {/* ─────────────── HERO ─────────────── */}
      <section className="chef-hero">
        <div className="chef-hero-content">
          {/* Breadcrumb */}
          <div className="chef-breadcrumb">
            <button onClick={handleBack} className="chef-breadcrumb-home">
              Home
            </button>
            <span className="chef-breadcrumb-separator">›</span>
            <span className="chef-breadcrumb-current">Horeca Chef Competition</span>
          </div>

          {/* Heading */}
          <h1 className="chef-hero-title">
            Horeca <span className="chef-hero-title-accent">Chef</span> Competition 2026
          </h1>

          {/* Subtitle */}
          <p className="chef-hero-subtitle">
            20 kitchen stations. Black Box surprise ingredients. Celebrity jury. 4 categories.
            The most honest test of a chef's ability — when nobody is telling you what to cook.
          </p>
        </div>
      </section>

      {/* ─────────────── BLACK BOX FORMAT ─────────────── */}
      <section className="chef-black-box-section">
        <div className="chef-black-box-container">
          <div className="chef-black-box-grid">

            {/* Left */}
            <div className="chef-black-box-left">
              {/* Label */}
              <div className="chef-label-group">
                <span className="chef-label">THE BLACK BOX FORMAT</span>
                <div className="chef-label-line" />
              </div>

              {/* Heading */}
              <h2 className="chef-section-title">
                Your Skill.
                <br />
                No Recipe.
                <br />
                <span className="chef-section-title-accent">45 Minutes.</span>
              </h2>

              {/* Body */}
              <p className="chef-section-body">
                You walk to your kitchen station. A sealed Black Box sits on the counter. Inside —
                surprise ingredients. Revealed only when the competition begins. What you
                create in 45 minutes is the only thing that matters.
              </p>

              {/* Checklist */}
              <ul className="chef-checklist">
                {checkPoints.map((point, i) => (
                  <li key={i} className="chef-checklist-item">
                    <span className="chef-checklist-icon">✓</span>
                    <span className="chef-checklist-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Black Box Card */}
            <div className="chef-black-box-card">
              {/* Box emoji */}
              <div className="chef-box-emoji">📦</div>

              {/* Card title */}
              <p className="chef-card-title">The Black Box</p>

              {/* Subtitle */}
              <p className="chef-card-subtitle">OPEN IT. COOK. 45 MINUTES.</p>

              {/* Inner box */}
              <div className="chef-inner-box">
                <p className="chef-inner-box-label">INSIDE EVERY BOX</p>
                <p className="chef-inner-box-text">
                  Surprise ingredients. Never revealed in advance. Never the
                  same twice. Just your skill and instinct.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="chef-cta-section">
        <div className="chef-cta-container">
          <div className="chef-cta-box">
            <h2 className="chef-cta-title">
              20 spots only. Register before they fill.
            </h2>
            <p className="chef-cta-subtitle">
              Registration is open now. Celebrity jury. Real prize money. Your stage.
            </p>

            <button
              onClick={() => handleRegister()}
              className="chef-cta-btn"
            >
              Register for Chef Competition
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />

    </div>
  );
}
