import React from 'react';
import FormatCard from '../FormatCard/FormatCard';
import { formats } from '../../data/formats';
import './FormatsSection.css';

const FormatsSection: React.FC = () => {
  return (
    <section className="formats-section">
      {/* Section Header */}
      <div className="formats-header">
        <div className="formats-eyebrow">
          <span className="eyebrow-text">WHAT WE HAVE BUILT</span>
          <div className="eyebrow-line" />
        </div>

        <h2 className="formats-title">
          7 Formats. Each One Solving
          <span className="formats-title-accent">a Real Industry Problem.</span>
        </h2>

        <p className="formats-subtitle">
          Not formats designed for spectacle. Formats designed for the people who actually run this industry.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="formats-grid">
        {formats.map((card) => (
          <FormatCard key={card.number} card={card} />
        ))}
      </div>
    </section>
  );
};

export default FormatsSection;
