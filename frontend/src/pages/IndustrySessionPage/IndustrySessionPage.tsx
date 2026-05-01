import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import './IndustrySessionPage.css';

interface Session {
  time: string
  location?: string;
  type: string;
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  isCeremony?: boolean;
}

interface DayPlan {
  id: number;
  title: string;
  subtitle: string;
  sessions: Session[];
}

export function IndustrySessionPage({ onBack }: { onBack?: () => void }) {
  const navigate = useNavigate();
  const [expandedDays, setExpandedDays] = React.useState<number[]>([]);

  const handleBack = () => {
    if (onBack) onBack();
    else navigate('/#formats-section');
  };

  const toggleDay = (dayId: number) => {
    setExpandedDays(prev =>
      prev.includes(dayId) ? prev.filter(id => id !== dayId) : [...prev, dayId]
    );
  };

  const schedule: DayPlan[] = [
    {
      id: 1,
      title: 'Day 1 — Foundation',
      subtitle: 'The event opens with the founders Lokesh, Ujjwal, and Gaurav, followed by the introduction of the celebrity jury and acknowledgment of all sponsors.',
      sessions: [
        {
          time: '10:00 AM',
          location: 'Hall B Stage',
          type: 'OPENING CEREMONY',
          title: 'Inauguration — Horeca Meet Expo 2026',
          description: 'Official opening by founders Lokesh, Ujjwal, and Gaurav. Celebrity jury introduced. All sponsors acknowledged.',
          tags: [{ label: 'All Attendees', color: 'golden' }],
        },
        {
          time: '11:00 AM',
          type: 'SESSION 01 · KEYNOTE',
          title: "The State of India's Horeca Industry",
          description: 'Market size, growth trajectory, Tier 2 opportunity, technology disruption, and predictions. Sets the context for every session across 3 days.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'All Attendees', color: 'golden' },
          ],
        },
        {
          time: '12:30 PM',
          type: 'SESSION 02 · PANEL — 3 FOUNDERS',
          title: 'Building a Profitable Restaurant in Tier 2 India',
          description: 'Location strategy, menu engineering, staffing in smaller cities, delivery aggregators, and real unit economics from founders who have done it.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'Chefs', color: 'jungle' },
          ],
        },
        {
          time: '2:30 PM',
          type: 'SESSION 03 · LIVE DEMO — LOKESH, GRASSFRONT',
          title: 'Technology in the Modern Kitchen: What Works and What Does Not',
          description: 'Which technologies actually improve margins, which are oversold. Includes a live demonstration of a real-world technology tool on stage.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'Live Demo', color: 'ocean' },
          ],
        },
        {
          time: '4:00 PM',
          type: 'SESSION 04 · PANEL — 3 SPEAKERS',
          title: 'Finding, Training, and Retaining Kitchen Talent in 2026',
          description: 'An executive chef, an HR professional with hospitality data, and a culinary institute placement head. Practical frameworks and real compensation benchmarks.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'Chefs', color: 'jungle' },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Day 2 — Business',
      subtitle: 'Scaling From One Outlet to Ten: What Nobody Tells You.Three founders share key insights on scaling challenges, costs, and essential systems.',
      sessions: [
        {
          time: '10:30 AM',
          type: 'SESSION 05 · PANEL — 3 FOUNDERS',
          title: 'Scaling From One Outlet to Ten: What Nobody Tells You',
          description: 'Three founders share key insights on scaling challenges, costs, and essential systems.',
          tags: [{ label: 'Restaurant Owners', color: 'cinnabar' }]
        },
        {
          time: '12:00 PM',
          type: 'SESSION 06 · PANEL + FRANCHISE ZONE',
          title: 'The Franchise Model: Is It Right for Your F&B Brand?',
          description: 'What franchising actually costs, how to protect quality, and when NOT to franchise. Session connects directly to the Franchise Discovery Zone in Hall C.',
          tags: [{ label: 'Restaurant Owners', color: 'cinnabar' }]
        },
        {
          time: '2:00 PM',
          type: 'SESSION 07 · PANEL + LIVE Q&A',
          title: 'Procurement and Supply Chain: Cutting Costs Without Cutting Quality',
          description: 'Experts share cost-saving strategies, followed by a live Q&A with suppliers.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'Brands', color: 'golden' }
          ]
        },
        {
          time: '4:00 PM',
          type: 'STAR AWARDS CEREMONY',
          title: 'Star Awards — Winners Announced Live on Stage',
          description: "16 awards across 4 pillars, recognising excellence in Horeca.",
          tags: [{ label: 'All Attendees', color: 'golden' }],
          isCeremony: true
        }
      ]
    },
    {
      id: 3,
      title: 'Day 3 — Future',
      subtitle: 'Investors · Social Media · Closing Keynote · Chef Finals — 3 sessions + ceremony',
      sessions: [
        {
          time: '10:30 AM',
          type: 'SESSION 08 · INVESTOR PANEL',
          title: 'Investor Perspectives on Indian F&B: Where Is the Money Going?',
          description: 'Three active F&B investors share what gets funded and why, followed by a live evaluation of real business models.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'Live Exercise', color: 'ocean' }
          ]
        },
        {
          time: '12:00 PM',
          type: 'SESSION 09 · PANEL + LIVE WORKSHOP',
          title: 'Building Your Food Brand Through Social Media',
          description: 'A food creator, D2C founder, and restaurant owner share proven strategies, followed by a live workshop to build a 30-day content plan.',
          tags: [
            { label: 'Restaurant Owners', color: 'cinnabar' },
            { label: 'Chefs', color: 'jungle' },
            { label: 'Bring Phone', color: 'ocean' }
          ]
        },
        {
          time: '2:00 PM',
          type: 'SESSION 10 · CLOSING KEYNOTE',
          title: 'The Next 5 Years in Indian Horeca: Predictions and Opportunities',
          description: '15+ years in Horeca. Ghost kitchen evolution, AI in kitchens, the new consumer, sustainability, and the categories that will dominate. Forward-looking and optimistic.',
          tags: [{ label: 'All Attendees', color: 'golden' }]
        },
        {
          time: '3:00 PM',
          type: 'CHEF COMPETITION FINALS',
          title: 'Horeca Chef Competition — Winners Announced',
          description: 'Winners are announced live, with trophies and prize money awarded on stage.',
          tags: [
            { label: 'Chefs', color: 'jungle' },
            { label: 'All Attendees', color: 'golden' }
          ],
          isCeremony: true
        },
        {
          time: '4:00 PM',
          type: 'CLOSING CEREMONY',
          title: 'Closing Ceremony — Horeca Meet Expo 2026',
          description: 'Founders close the event with acknowledgments and the next edition announcement.',
          tags: [{ label: 'All Attendees', color: 'golden' }],
          isCeremony: true
        }
      ]
    }
  ];

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tagClass = (color: string) => {
    switch (color) {
      case 'golden': return 'isp-tag isp-tag-golden';
      case 'cinnabar': return 'isp-tag isp-tag-cinnabar';
      case 'jungle': return 'isp-tag isp-tag-jungle';
      case 'ocean': return 'isp-tag isp-tag-ocean';
      default: return 'isp-tag isp-tag-golden';
    }
  };

  return (
    <div className="isp-root">


      {/* Hero */}
      <section className="isp-hero">
        <div className="isp-breadcrumb">
          <button className="isp-breadcrumb-home" onClick={handleBack}>Home</button>
          <span className="isp-breadcrumb-sep">›</span>
          <span className="isp-breadcrumb-current">Industry Sessions</span>
        </div>
        <h1 className="isp-hero-title">
          <span className="isp-hero-title-gold">Industry</span> Sessions 2026
        </h1>
        <p className="isp-hero-subtitle">
          Only speakers who have built, scaled, and operated real Horeca businesses share practical insights from experience..
        </p>
      </section>

      {/* Rule Notice */}
      <section className="isp-rule-section">
        <div className="isp-rule-card">
          <div className="isp-rule-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="boltG" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EBC75B" />
                  <stop offset="100%" stopColor="#C9A843" />
                </linearGradient>
              </defs>
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#boltG)" stroke="#C9A843" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="isp-rule-label">The one rule that applies to every speaker at Horeca Meet.</p>
            <p className="isp-rule-desc">
              No thought leaders who have never run a restaurant. No academics explaining theory. Only people who have built, scaled, and operated real Horeca businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="isp-schedule-section">
        {schedule.map((day) => {
          const isOpen = expandedDays.includes(day.id);
          return (
            <div key={day.id} className="isp-day-card">
              <button
                className="isp-day-header"
                onClick={() => toggleDay(day.id)}
                aria-expanded={isOpen}
              >
                <div className="isp-day-header-inner">
                  <span className="isp-day-num">{String(day.id).padStart(2, '0')}</span>
                  <div className="isp-day-info">
                    <p className="isp-day-title">{day.title}</p>
                    <p className="isp-day-subtitle">{day.subtitle}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`isp-chevron${isOpen ? ' open' : ''}`}
                  size={18}
                />
              </button>

              {isOpen && (
               <div className="isp-sessions-list">
                  {day.sessions.map((session, idx) => (
                    <div key={idx} className="isp-session">
                      <div className="isp-session-time-row">
                        <span className="isp-session-time">{session.time}</span>
                        {session.location && (
                          <span className="isp-session-location">{session.location}</span>
                        )}
                      </div>
                      <div className="isp-session-type">{session.type}</div>
                      <h4 className="isp-session-title">{session.title}</h4>
                      <p className="isp-session-desc">{session.description}</p>
                      <div className="isp-tags">
                        {session.tags.map((tag, tIdx) => (
                          <span key={tIdx} className={tagClass(tag.color)}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="isp-cta-section">
        <button className="isp-cta-btn" onClick={() => { window.location.href = 'https://horecameet.com/delegate'; }}>
          Register — All Sessions Included with Delegate Pass
        </button>
      </section>

      <Footer />
    </div>
  );
}