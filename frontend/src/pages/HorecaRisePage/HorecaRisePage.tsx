import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

interface HorecaRisePageProps {
  onBack?: () => void;
  onApply?: () => void;
  onInvestorEnquiry?: () => void;
}

export function HorecaRisePage({ onBack, onApply, onInvestorEnquiry }: HorecaRisePageProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/');
  };

  const handleApply = () => {
    if (onApply) onApply();
    else navigate('/visitor');
  };

  const handleInvestorEnquiry = () => {
    if (onInvestorEnquiry) onInvestorEnquiry();
    else navigate('/investor');
  };

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        fontFamily: '"DM Sans", sans-serif',
        width: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* ─────────────── HERO ─────────────── */}
      <section
        style={{
          background: '#081964',
          width: '100%',
          paddingTop: '40px',
          paddingBottom: '40px',
          paddingLeft: '20px',
          paddingRight: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            <button
              onClick={handleBack}
              style={{
                fontSize: '13px',
                color: '#C9A843',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Home
            </button>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Horeca Rise</span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(36px, 8vw, 72px)',
              lineHeight: '1.1',
              color: '#FFFFFF',
              letterSpacing: '-1px',
              marginBottom: '16px',
              wordBreak: 'break-word',
            }}
          >
            Horeca <span style={{ color: '#C9A843' }}>Rise</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '14px',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '100%',
              marginBottom: '24px',
            }}
          >
            India's first structured investment programme for Horeca businesses. Apply for ₹1,000. Every applicant gets investor visibility — whether selected to pitch or not.
          </p>
        </div>
      </section>

      {/* ─────────────── WHAT IS HORECA RISE ─────────────── */}
      <section
        style={{
          padding: '40px 20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              borderRadius: '16px',
              padding: '32px 20px',
              background: '#081964',
              boxSizing: 'border-box',
              width: '100%',
            }}
          >
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  color: '#C9A843',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                WHAT IS HORECA RISE
              </span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)', maxWidth: '80px' }} />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(24px, 6vw, 44px)',
                lineHeight: '1.2',
                color: '#FFFFFF',
                marginBottom: '16px',
                wordBreak: 'break-word',
              }}
            >
              This Is Not Just a <span style={{ color: '#C9A843' }}>Pitch Event.</span>
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '14px',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '40px',
              }}
            >
              It is a complete investment connection programme. With value for every applicant — whether selected to pitch live or not. The ₹1,000 you spend applying is the most efficient investment if you are serious about funding your Horeca business.
            </p>

            {/* 3 Pricing Cards — stacked on mobile */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {[
                { price: '₹1,000', line1: 'Everyone who applies gets investor visibility', line2: '— selected or not' },
                { price: '₹4,000', line1: 'Live stage pitch + investor Q&A + brochure', line2: 'feature' },
                { price: '₹5,000', line1: 'Complete programme investment for', line2: 'selected businesses' },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '28px 20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '36px',
                      color: '#C9A843',
                      lineHeight: '1',
                      marginBottom: '14px',
                    }}
                  >
                    {card.price}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '13px',
                      color: '#0A1628',
                      lineHeight: '1.6',
                      fontWeight: 500,
                    }}
                  >
                    {card.line1}
                    <br />
                    {card.line2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section
        style={{
          paddingBottom: '40px',
          paddingLeft: '20px',
          paddingRight: '20px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: '#C9A843',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              HOW IT WORKS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)', maxWidth: '80px' }} />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(24px, 6vw, 44px)',
              lineHeight: '1.2',
              color: '#0A1628',
              marginBottom: '28px',
              wordBreak: 'break-word',
            }}
          >
            Step by Step. <span style={{ color: '#C9A843' }}>No Surprises.</span>
          </h2>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Step 1 */}
            <div
              style={{
                background: '#081964',
                borderRadius: '16px',
                border: '1px solid rgba(201,168,67,0.1)',
                padding: '24px 20px',
                boxSizing: 'border-box',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  border: '1px solid rgba(201,168,67,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#C9A843', fontSize: '20px', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>01</span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>
                Apply — ₹1,000
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"DM Sans", sans-serif' }}>
                Open to all Horeca businesses — restaurants, cloud kitchens, food brands, food tech, catering. Takes 10 minutes. Tell us about your business, stage revenue, what you are raising, and what the capital will do.
              </p>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '14px 16px',
                  borderLeft: '2px solid #C9A843',
                }}
              >
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', display: 'flex', gap: '10px', alignItems: 'flex-start', fontFamily: '"DM Sans", sans-serif' }}>
                  <span style={{ fontSize: '16px' }}>💡</span>
                  <span>Deadline approaching — apply early. Investor panel reviews all applications in submission order.</span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              style={{
                background: '#081964',
                borderRadius: '16px',
                border: '1px solid rgba(201,168,67,0.1)',
                padding: '24px 20px',
                boxSizing: 'border-box',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  border: '1px solid rgba(201,168,67,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#C9A843', fontSize: '20px', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>02</span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>
                Every Applicant Receives — Whether Selected or Not
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"DM Sans", sans-serif' }}>
                This is what makes Horeca Rise different from every other pitch event.
              </p>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '0 12px 12px 4px',
                  padding: '20px 16px',
                  borderLeft: '2px solid #C9A843',
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Curated investor brochure — confirmed investor names and investment focus areas',
                    'Your entrepreneur profile shared directly with all confirmed investors',
                    'One free 20-minute consultation slot with a business expert at Horeca Meet',
                    'Full access to all investor panel sessions at the event',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ fontSize: '15px' }}>✅</span>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontFamily: '"DM Sans", sans-serif', lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div
              style={{
                background: '#081964',
                borderRadius: '16px',
                border: '1px solid rgba(201,168,67,0.1)',
                padding: '24px 20px',
                boxSizing: 'border-box',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  border: '1px solid rgba(201,168,67,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#C9A843', fontSize: '20px', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>03</span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>
                Selection — 100 Businesses Chosen
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', fontFamily: '"DM Sans", sans-serif' }}>
                Our panel reviews all applications. 100 businesses selected based on stage, clarity of idea, market opportunity, and use of capital. Selection communicated to all applicants.
              </p>
            </div>

            {/* Step 4 */}
            <div
              style={{
                background: '#081964',
                borderRadius: '16px',
                border: '1px solid rgba(201,168,67,0.1)',
                padding: '24px 20px',
                boxSizing: 'border-box',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  border: '1px solid rgba(201,168,67,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  marginBottom: '16px',
                }}
              >
                <span style={{ color: '#C9A843', fontSize: '20px', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>04</span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>
                If Selected — Additional ₹4,000 · Total ₹5,000
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"DM Sans", sans-serif' }}>
                Your complete Horeca Rise programme investment.
              </p>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '0 12px 12px 4px',
                  padding: '20px 16px',
                  borderLeft: '2px solid #C9A843',
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    '5-minute live pitch in front of the confirmed investor panel',
                    '5-minute direct investor Q&A on stage',
                    'Your business featured in the official Horeca Rise brochure',
                    'Post-event investor introduction emails facilitated',
                    'Priority consultation slot with Horeca experts',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ fontSize: '15px' }}>✅</span>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontFamily: '"DM Sans", sans-serif', lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CTA CARDS ─────────────── */}
      <section
        style={{
          padding: '0 20px 60px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Investor CTA */}
          <div
            style={{
              background: '#F9F7F2',
              borderRadius: '16px',
              padding: '32px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box',
              width: '100%',
            }}
          >
            <div>
              <h2
                style={{
                  color: '#081964',
                  fontSize: 'clamp(22px, 5vw, 32px)',
                  fontWeight: 700,
                  marginBottom: '12px',
                  lineHeight: '1.2',
                  fontFamily: 'Montserrat, sans-serif',
                  wordBreak: 'break-word',
                }}
              >
                Are you an investor or VC with F&amp;B focus?
              </h2>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.8', fontFamily: '"DM Sans", sans-serif' }}>
                Join the Horeca Rise investor panel. Review 100+ curated entrepreneur profiles before the event. Select who you want to hear pitch. The most concentrated Horeca deal flow in India this year.
              </p>
            </div>
            <button
              onClick={handleInvestorEnquiry}
              style={{
                width: '100%',
                background: '#EBCB58',
                color: '#0A1628',
                fontWeight: 700,
                fontSize: '14px',
                padding: '16px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"DM Sans", sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Investor Enquiry <span style={{ fontSize: '16px' }}>→</span>
            </button>
          </div>

          {/* Apply CTA */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleApply}
              style={{
                width: '100%',
                background: '#EBCB58',
                color: '#0A1628',
                fontWeight: 700,
                fontSize: '15px',
                padding: '18px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"DM Sans", sans-serif',
                boxSizing: 'border-box',
              }}
            >
              Apply for Horeca Rise — ₹1,000
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer/>
    </div>
  );
}