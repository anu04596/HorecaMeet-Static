import React from 'react';
import { starAwardCategories } from '../../data/jury';
import './StarAwardsTeaser.css';

const StarAwardsTeaser: React.FC = () => {
  return (
    <section className="star-awards-teaser">
      {/* ── Header ── */}
      <div className="star-awards-header">
        <div className="star-awards-eyebrow">
          <span className="star-awards-eyebrow-text">STAR AWARDS</span>
          <div className="star-awards-eyebrow-line" />
        </div>

        <h2 className="star-awards-title">
          India's First Honest
          <br />
          <span className="star-awards-title-accent">Restaurant Recognition.</span>
        </h2>

        <p className="star-awards-subtitle">
          No nominations. No payments. No popularity votes. Our evaluation team visits anonymously,
          dines, pays, and evaluates. A restaurant that wins earned it when nobody was watching.
        </p>
      </div>

      {/* ── Category Cards ── */}
      <div className="star-awards-categories">
        {starAwardCategories.map((cat) => (
          <div className="award-category-card" key={cat.title}>
            <span className="award-category-icon">{cat.icon}</span>
            <p className="award-category-title">{cat.title}</p>
            <p className="award-category-count">{cat.count}</p>
          </div>
        ))}
      </div>

      {/* ── Action Buttons ── */}
      <div className="star-awards-actions">
        <button className="star-awards-btn-primary">See All 16 Categories</button>
        <button className="star-awards-btn-secondary">Nominate a Restaurant — Free</button>
      </div>
    </section>
  );
};

export default StarAwardsTeaser;