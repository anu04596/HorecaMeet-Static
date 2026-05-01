import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Trophy,
  Search,
  UtensilsCrossed,
  ClipboardCheck,
  Camera,
  Mic2,
  Star,
  Lightbulb,
  Building2,
} from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import './StarAwardsPage.css';

interface StarAwardsPageProps {
  onBack?: () => void;
  onNominate?: () => void;
}

const processSteps = [
  {
    step: '01',
    title: 'Anonymous Visit',
    desc: 'Our evaluation undercover team visits as a regular guest. No prior notice. No special treatment.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Dine & Pay',
    desc: 'They dine. Pay the full bill. Experience exactly what every customer does.',
    icon: UtensilsCrossed,
  },
  {
    step: '03',
    title: 'Structured Evaluation',
    desc: 'Scored on 8 criteria — food, service, hygiene, consistency, ambience, value.',
    icon: ClipboardCheck,
  },
  {
    step: '04',
    title: 'The Reveal',
    desc: 'Identity revealed. Certificate presented. Photograph taken together. Both parties post.',
    icon: Camera,
  },
  {
    step: '05',
    title: 'Live Announcement',
    desc: 'Winners announced on stage at Horeca Meet. Day 2, 4:00 PM, in front of 3,000+ attendees.',
    icon: Mic2,
  },
];

const pillar1Awards = [
  { name: 'Best Restaurant of the Year — NCR', icon: Trophy },
  { name: 'Best Cafe of the Year — NCR', icon: Star },
  { name: 'Best Fine Dining Experience — NCR', icon: Star },
  { name: 'Best Casual Dining Experience — NCR', icon: Star },
  { name: 'Best QSR Experience — NCR', icon: Star },
  { name: 'Best Cloud Kitchen Brand — NCR', icon: Star },
  { name: 'Best Hotel Restaurant — NCR', icon: Building2 },
  { name: 'Emerging Restaurant of the Year — NCR', icon: Lightbulb },
];

const pillar2Awards = [
  'Young Chef of the Year — NCR',
  'Executive Chef of the Year — NCR',
  'Restaurant Operator of the Year — NCR',
];

const pillar3Awards = [
  'Best Ingredient Brand — Horeca',
  'Best Kitchen Equipment Brand — Horeca',
  'Best Food Technology Solution — Horeca',
  'Best Packaging Brand — Horeca',
];

export const StarAwardsPage: React.FC<StarAwardsPageProps> = ({ onBack}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/#formats-section');
  };

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="star-page-container">

      {/* ─────────────── HERO ─────────────── */}
      <section className="star-hero">
        <div className="star-hero-content">

          {/* Breadcrumb */}
          <div className="star-breadcrumb">
            <button onClick={handleBack} className="star-breadcrumb-home">Home</button>
            <span className="star-breadcrumb-separator">›</span>
            <span className="star-breadcrumb-current">Star Awards</span>
          </div>

          {/* Heading */}
          <h1 className="star-hero-title">
            Horeca Meet{' '}
            <span className="star-hero-title-accent">Star Awards</span>{' '}
            2026
          </h1>

          {/* Subtitle */}
          <p className="star-hero-subtitle">
            Know a restaurant that deserves honest recognition?{' '}<br/>
            Suggest a restaurant, chef, or brand in just 2 minutes, and our evaluation team will take it forward.
          </p>

        </div>
      </section>

      {/* ─────────────── EVALUATION PROCESS ─────────────── */}
      <section className="star-process-section">
        <div className="star-process-container">
          <div className="star-process-card">

            {/* Label */}
            <div className="star-label-group">
              <span className="star-label">How it works</span>
            </div>

            {/* Title */}
            <h2 className="star-process-title">
              The Evaluation Process.
            </h2>

            {/* Steps */}
            <div className="star-steps-list">
              {processSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="star-step-item">
                    <div className="star-step-number">
                      <span className="star-step-num-text">{item.step}</span>
                    </div>
                    <div className="star-step-body">
                      <Icon className="star-step-icon" />
                      <p className="star-step-title">{item.title}</p>
                      <p className="star-step-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────── 4 PILLARS ─────────────── */}
      <section className="star-pillars-section">
        <div className="star-pillars-container">

          {/* Header */}
          <div className="star-pillars-header">
            <span className="star-pillars-eyebrow">16 Award Categories</span>
            <h2 className="star-pillars-title">
              4 Pillars{' '}
              <span className="star-pillars-title-accent">
                | Every Corner of Horeca Recognised
              </span>
            </h2>
          </div>

          <div className="star-pillars-grid">

            {/* Pillar 1 — Dining Excellence */}
            <div className="star-pillar-card">
              <div className="star-pillar-header">
                <div className="star-pillar-icon-wrap">
                  <UtensilsCrossed className="star-pillar-icon" />
                </div>
                <h3 className="star-pillar-title">Pillar 1 — Dining Excellence</h3>
              </div>
              <ul className="star-award-list">
                {pillar1Awards.map((cat, i) => {
                  const Icon = cat.icon;
                  return (
                    <li key={i} className="star-award-item">
                      <Icon className="star-award-icon" />
                      <span className="star-award-name">{cat.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Pillar 2 — Talent & People */}
            <div className="star-pillar-card">
              <div className="star-pillar-header">
                <div className="star-pillar-icon-wrap">
                  <Trophy className="star-pillar-icon" />
                </div>
                <h3 className="star-pillar-title">Pillar 2 — Talent &amp; People</h3>
              </div>
              <ul className="star-award-list">
                {pillar2Awards.map((cat, i) => (
                  <li key={i} className="star-award-item">
                    <div className="star-award-dot" />
                    <span className="star-award-name">{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3 — Supplier & Brand Excellence */}
            <div className="star-pillar-card">
              <div className="star-pillar-header">
                <div className="star-pillar-icon-wrap">
                  <Building2 className="star-pillar-icon" />
                </div>
                <h3 className="star-pillar-title">Pillar 3 — Supplier &amp; Brand Excellence</h3>
              </div>
              <ul className="star-award-list">
                {pillar3Awards.map((cat, i) => (
                  <li key={i} className="star-award-item">
                    <div className="star-award-dot" />
                    <span className="star-award-name">{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 4 — Innovation */}
            <div className="star-pillar-card">
              <div className="star-pillar-header">
                <div className="star-pillar-icon-wrap">
                  <Lightbulb className="star-pillar-icon" style={{ strokeWidth: 1 }} />
                </div>
                <h3 className="star-pillar-title">Pillar 4 — Innovation</h3>
              </div>
              <div className="star-pillar4-row">
                <div className="star-pillar4-dot" />
                <p className="star-pillar4-text">Horeca Sustainability Award of the Year</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────── NOMINATION CTA ─────────────── */}
      <section className="star-cta-section">
        <div className="star-cta-box">
          <img src="/trophy.png" alt="Trophy" className="star-cta-trophy" />
          <h2 className="star-cta-title">
            Know a restaurant that deserves honest recognition
          </h2>
          <p className="star-cta-subtitle">
            Nominate any restaurant, chef, or brand. Completely free. Takes 2 minutes.
            Our evaluation team will take it from there.
          </p>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />

    </div>
  );
};