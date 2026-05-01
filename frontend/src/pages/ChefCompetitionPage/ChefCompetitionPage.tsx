import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, GraduationCap, User, Cookie, Users, FileText, ArrowRight, Trophy, Star, Award } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import './ChefCompetitionPage.css';

interface ChefCompetitionPageProps {
  onBack?: () => void;
  onRegister?: (category?: string) => void;
}

export interface CategoryInfo {
  title: string;
  description: string;
  icon: React.ElementType;
  totalTeams: string;
  teamSize?: string;
  fee: string;
  prizes: {
    first: string;
    second: string;
    third?: string;
  };
}

const checkPoints = [
  'Judged on technique, hygiene, presentation, taste, and time',
  'Open viewing floor for live audience participation',
  'Opportunity to interact with the celebrity jury between rounds',
];

const categoryData: Record<string, CategoryInfo> = {
  professional: {
    title: 'Professionals',
    description: 'Established culinary professionals working in hotels, restaurants, or catering services.',
    icon: ChefHat,
    totalTeams: '24 Team Participants',
    teamSize: '4 Members',
    fee: '10,000',
    prizes: {
      first: '1,00,000',
      second: '65,000',
      third: '35,000'
    }
  },
  student: {
    title: 'Culinary Students',
    description: 'Current students pursuing culinary arts or hotel management degrees from recognized institutes.',
    icon: GraduationCap,
    totalTeams: "24 Team Participants",
    teamSize: '4 Members',
    fee: '5,000',
    prizes: {
      first: '65,000',
      second: '35000',
    }
  },
  'home-chef': {
    title: 'Home Chefs',
    description: 'Passionate cooks operating from home. Only food, no bakery. No past hotel industry experience.',
    icon: User,
    totalTeams: '48 Team Participants',
    teamSize: '1 Participant',
    fee: '6,999',
    prizes: {
      first: '75,000',
      second: '40,000',
    }
  },
  bakery: {
    title: 'Bakery',
    description: 'Specialists in baking, pastry, and confectionery arts across all levels.',
    icon: Cookie,
    totalTeams: '48 Team',
    fee: '7,999',
    prizes: {
      first: '85,000',
      second: '55,000',
    }
  }
};

export function ChefCompetitionPage({ onBack }: ChefCompetitionPageProps) {
  const navigate = useNavigate();
  // ── NEW: replicate desktop category-selection state ──
  const [selectedCategory, setSelectedCategory] = React.useState<keyof typeof categoryData | null>(null);

  const scrollToPrizeMoney = (catId: keyof typeof categoryData) => {
    setSelectedCategory(catId);
    setTimeout(() => {
      const element = document.getElementById('prize-money-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };


  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/#formats-section');
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

            {/* Left — unchanged */}
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

              {/* Body — updated to match desktop */}
              <p className="chef-section-body">
                Step up to your station where a sealed Black Box awaits you.
                Inside are carefully selected surprise ingredients, revealed only when the competition begins.<br />
                What you create within 45 minutes becomes the true reflection of your skill and creativity.
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

            {/* Right — replaced static card with interactive category list (desktop parity) */}
            <div className="chef-black-box-card" style={{ background: '#081964', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(Object.entries(categoryData) as [string, CategoryInfo][]).map(([id, cat]) => (
                <button
                  key={id}
                  onClick={() => scrollToPrizeMoney(id)}
                  className="chef-category-row"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    border: selectedCategory === id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    background: selectedCategory === id ? '#C9A843' : 'rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: selectedCategory === id ? 'rgba(8,25,100,0.1)' : 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <cat.icon style={{ width: '20px', height: '20px', color: selectedCategory === id ? '#081964' : '#C9A843' }} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '15px',
                        color: selectedCategory === id ? '#081964' : '#fff',
                        margin: 0,
                        lineHeight: '1.2',
                      }}>{cat.title}</p>
                      <p style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: selectedCategory === id ? 'rgba(8,25,100,0.6)' : 'rgba(255,255,255,0.4)',
                        margin: 0,
                        marginTop: '2px',
                      }}>
                        {selectedCategory === id ? 'Currently Viewing' : 'View Prize Structure'}
                      </p>
                    </div>
                  </div>
                  <ArrowRight style={{
                    width: '18px',
                    height: '18px',
                    color: selectedCategory === id ? '#081964' : 'rgba(255,255,255,0.3)',
                    transform: selectedCategory === id ? 'translateX(2px)' : 'none',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }} />
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────── PRIZE MONEY SECTION (new — desktop parity) ─────────────── */}
      {selectedCategory && (
        <section id="prize-money-section" className="chef-prize-section">
          <div className="chef-prize-container">
            <div className="chef-prize-card" style={{ background: '#081964', borderRadius: '24px', overflow: 'hidden' }}>

              {/* Header */}
              <div style={{ background: '#fff', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#EBC75B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {React.createElement(categoryData[selectedCategory].icon, { style: { width: '28px', height: '28px', color: '#081964' } })}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: '#081964',
                      margin: 0,
                      marginBottom: '4px',
                    }}>
                      {categoryData[selectedCategory].title}
                    </h3>
                    <p style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '12px',
                      color: '#6B7280',
                      margin: 0,
                      lineHeight: '1.5',
                    }}>
                      {categoryData[selectedCategory].description}
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: '0', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <Users style={{ width: '16px', height: '16px', color: 'rgba(8,25,100,0.2)', margin: '0 auto 6px' }} />
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', color: '#081964', margin: 0 }}>
                      {categoryData[selectedCategory].totalTeams}
                    </p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '2px 0 0' }}>
                      Total Teams
                    </p>
                  </div>
                  {categoryData[selectedCategory].teamSize && (
                    <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #f3f4f6' }}>
                      <Users style={{ width: '16px', height: '16px', color: 'rgba(8,25,100,0.2)', margin: '0 auto 6px' }} />
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', color: '#081964', margin: 0 }}>
                        {categoryData[selectedCategory].teamSize}
                      </p>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '2px 0 0' }}>
                        Team Members
                      </p>
                    </div>
                  )}
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #f3f4f6' }}>
                    <FileText style={{ width: '16px', height: '16px', color: 'rgba(8,25,100,0.2)', margin: '0 auto 6px' }} />
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '13px', color: '#081964', margin: 0 }}>
                      ₹{categoryData[selectedCategory].fee}
                    </p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '2px 0 0' }}>
                      Reg. Fee
                    </p>
                  </div>
                </div>
              </div>

              {/* Prize Money */}
              <div style={{ padding: '24px' }}>
                {/* Trophy header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px', opacity: 0.8 }}>
                  <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to left, #EBC75B, transparent)' }} />
                  <Trophy style={{ width: '16px', height: '16px', color: '#EBC75B' }} />
                  <span style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: '#EBC75B',
                  }}>Prize Money</span>
                  <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to right, #EBC75B, transparent)' }} />
                </div>

                {/* Prize cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* 1st Prize */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: '#EBC75B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Award style={{ width: '22px', height: '22px', color: '#081964' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 2px' }}>1st Prize</p>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '22px', color: '#081964', margin: 0 }}>₹{categoryData[selectedCategory].prizes.first}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map(s => <Star key={s} style={{ width: '10px', height: '10px', color: '#EBC75B' }} fill="#EBC75B" />)}
                    </div>
                  </div>

                  {/* 2nd Prize */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: '#e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Award style={{ width: '22px', height: '22px', color: '#081964' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 2px' }}>2nd Prize</p>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '22px', color: '#081964', margin: 0 }}>₹{categoryData[selectedCategory].prizes.second}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4].map(s => <Star key={s} style={{ width: '10px', height: '10px', color: '#d1d5db' }} fill="#d1d5db" />)}
                    </div>
                  </div>

                  {/* 3rd Prize */}
                  {categoryData[selectedCategory].prizes.third && (
                    <div style={{
                      background: '#fff',
                      borderRadius: '16px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                    }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: '#B87333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Award style={{ width: '22px', height: '22px', color: '#fff' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 2px' }}>3rd Prize</p>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '22px', color: '#081964', margin: 0 }}>₹{categoryData[selectedCategory].prizes.third}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[1,2,3].map(s => <Star key={s} style={{ width: '10px', height: '10px', color: '#B87333' }} fill="#B87333" />)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ─────────────── CTA ─────────────── */}
      <section className="chef-cta-section">
        <div className="chef-cta-container">
          <div className="chef-cta-box">
            <h2 className="chef-cta-title">
              24 spots only. Register before they fill.
            </h2>
            <p className="chef-cta-subtitle">
              Registrations are now open.
              <br />Compete in front of a celebrity jury, win real prize money, and take your place on a stage designed for serious chefs

            </p>

            <button
               onClick={() => { window.location.href = 'https://horecameet.com/chef-category'; }}
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