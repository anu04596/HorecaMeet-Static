import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

interface HorecaRisePageProps {
  onBack?: () => void;
  onApply?: () => void;
  onInvestorEnquiry?: () => void;
}

export function HorecaRisePage({ onBack }: HorecaRisePageProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/#formats-section');
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
              fontWeight:600,
              lineHeight: '1.7',
              color: '#FFFFFF',
              maxWidth: '100%',
              marginBottom: '24px',
            }}
          >
            India's first structured investment programme for Horeca businesses. 
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
              Not Just a Pitch Event. <br />
              <span style={{ color: '#C9A843' }}>A Complete Investment Ecosystem.</span>
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
              “A structured investment connection programme designed to give Horeca founders direct access to investors, expert guidance, and real funding opportunities. From application to post-event introductions, every stage is built to maximise visibility and outcomes.”
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
                Apply | ₹1,000
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"DM Sans", sans-serif' }}>
                Open to all Horeca businesses — across formats and stages.<br />
                The application takes approximately 10 minutes.<br />
                Share key details: your business model, current stage, revenue, funding requirement, and capital utilisation plan.
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
                  <span>Early applications are prioritised — investor panel reviews submissions on a rolling basis.</span>
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
                Guaranteed Value for Every Applicant
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"DM Sans", sans-serif' }}>
                This is where Horeca Rise differentiates itself.
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
                    'Curated investor brochure, confirmed investor names and focus areas',
                    'Your entrepreneur profile shared with all investors',
                    'One free 20-minute expert consultation at Horeca Meet',
                    'Full access to investor panel sessions',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span className="shrink-0 w-[22px] h-[22px] rounded-[4px] flex items-center justify-center mt-0.5" style={{ background: '#C9A843' }}><svg width="17" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
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
                Selection | Top 100 Businesses
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', fontFamily: '"DM Sans", sans-serif' }}>
                Applications are reviewed based on business clarity, market potential, stage, and use of capital.<br />
                  Top 100 high-potential businesses are shortlisted, and all applicants are informed of the outcome.
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
                If Selected • Full Programme Access — ₹5,000 (₹1,000 + ₹4,000)
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"DM Sans", sans-serif' }}>
                Selected founders unlock the complete Horeca Rise experience:
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
                    '5-minute live pitch + 5-minute investor Q&A',
                    'Featured in official Horeca Rise brochure',
                    'Post-event investor introductions',
                    'Priority access to expert consultations',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span className="shrink-0 w-[22px] h-[22px] rounded-[4px] flex items-center justify-center mt-0.5" style={{ background: '#C9A843' }}><svg width="17" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
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
                Are you an investor or VC focused on F&B?
              </h2>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.8', fontFamily: '"DM Sans", sans-serif' }}>
                Join the Horeca Rise investor panel to access 100+ curated founder profiles ahead of the event, shortlist ventures aligned with your thesis, and engage directly with the most promising Horeca businesses all in one highly concentrated deal flow.
              </p>
            </div>
          </div>

          {/* Apply CTA */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => { window.location.href = 'https://horecameet.com/investor'; }}
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