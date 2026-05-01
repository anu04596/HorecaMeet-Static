import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './ExhibitionZonePage.css';

interface ExhibitionZoneProps {
  onBack?: () => void;
  onEnquiry?: () => void;
}

const buyerItems = [
  {
    title: 'Restaurant owners who approve procurement',
    sub: 'Not the manager — the owner who signs the purchase order',
  },
  {
    title: 'Executive chefs who specify ingredients and equipment',
    sub: 'They decide what goes in the kitchen',
  },
  {
    title: 'Hotel F&B managers who sign supplier contracts',
    sub: 'The approved vendor list starts here',
  },
  {
    title: 'Cloud kitchen operators scaling supply chains',
    sub: 'High frequency buyers making monthly decisions',
  },
];

const statsData = [
  { label: 'Average NCR restaurant procurement', value: '₹15–50L/year' },
  { label: 'Restaurant owners at Horeca Meet', value: '1,000+' },
  { label: 'Total procurement influence', value: '₹15cr – ₹50cr' },
  { label: 'Your starter stall investment', value: '₹1,20,000' },
  { label: 'Category exclusivity', value: 'Guaranteed', isHighlight: true },
];

/* Inline checkmark icon — avoids lucide dependency for this shape */
function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 20, height: 20, color: '#081964' }}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ExhibitionZonePage({ onBack}: ExhibitionZoneProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/#formats-section');
  };

 

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ex-page-container">

      {/* ─────────────── HERO ─────────────── */}
      <section className="ex-hero">
        <div className="ex-hero-content">

          {/* Breadcrumb */}
          <div className="ex-breadcrumb">
            <button onClick={handleBack} className="ex-breadcrumb-home">Home</button>
            <span className="ex-breadcrumb-separator">›</span>
            <span className="ex-breadcrumb-current">Exhibition Zone</span>
          </div>

          {/* Heading */}
          <h1 className="ex-hero-title">Exhibition Zone 2026</h1>

          {/* Subtitle */}
          <p className="ex-hero-subtitle">
            Your competitors are watching, secure early. <br />
            Enjoy 10% early bird benefit, with category confirmation within 24 hours.
          </p>


        </div>
      </section>

      {/* ─────────────── THE DIFFERENCE ─────────────── */}
      <section className="ex-difference-section">
        <div className="ex-difference-container">

          {/* Label */}
          <div className="ex-label-group">
            <span className="ex-label">THE DIFFERENCE</span>
            <div className="ex-label-line" />
          </div>

          {/* Title */}
          <h2 className="ex-difference-title">
            Your Buyers Are in This Room.{' '}
            <span className="ex-difference-title-accent">For 3 Full Days.</span>
          </h2>

          {/* Body */}
          <p className="ex-difference-body">
            Every person on the Horeca Meet floor is registered by their purchasing role — not just by name.
            You know exactly who you are selling to before you walk in.
          </p>

          {/* Buyer cards */}
          <div className="ex-buyer-list">
            {buyerItems.map((item, idx) => (
              <div key={idx} className="ex-buyer-card">
                <div className="ex-buyer-icon">
                  <CheckIcon />
                </div>
                <div>
                  <p className="ex-buyer-title">{item.title}</p>
                  <p className="ex-buyer-sub">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────── STATS CARD ─────────────── */}
      <section className="ex-stats-section">
        <div className="ex-stats-card">
          <p className="ex-stats-headline">₹15cr – ₹50cr</p>
          <p className="ex-stats-headline-sub">Annual procurement influence in this room</p>

          {statsData.map((stat, idx) => (
            <div key={idx} className="ex-stat-row">
              <span className="ex-stat-label">{stat.label}</span>
              <span className={`ex-stat-value${stat.isHighlight ? ' highlight' : ''}`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="ex-cta-section">
        <div className="ex-cta-box">
          <h2 className="ex-cta-title">Secure your spot before it fills.</h2>
          <p className="ex-cta-subtitle">
            Early bird benefit active now. Category confirmation within 24 hours.
          </p>
          <button className="ex-cta-btn" onClick={() => { window.location.href = 'https://horecameet.com/exhibitor'; }}>
            Request Floor Plan &amp; Pricing
          </button>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />

    </div>
  );
}