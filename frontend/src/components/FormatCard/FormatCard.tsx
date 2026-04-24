import React from 'react';
import type { FormatCard as FormatCardType } from '../../data/formats';
import './FormatCard.css';

interface Props {
  card: FormatCardType;
}

const FormatCard: React.FC<Props> = ({ card }) => {
  return (
    <div className="format-card">
      <span className="card-number">{card.number}</span>
      <span className="card-icon">{card.icon}</span>
      <h3 className="card-title">{card.title}</h3>
      <p className="card-description">{card.description}</p>
      <div className="card-tags">
        {card.tags.map((tag) => (
          <span className="card-tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default FormatCard;
