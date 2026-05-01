import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormatCard as FormatCardType } from '../../data/formats';
import './FormatCard.css';

interface Props {
  card: FormatCardType;
}

const FormatCard: React.FC<Props> = ({ card }) => {
  const navigate = useNavigate();

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
      <button 
        className="card-action-btn" 
        onClick={() => {
          if (card.linkTo && card.linkTo !== '#') {
            navigate(card.linkTo);
          }
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default FormatCard;
