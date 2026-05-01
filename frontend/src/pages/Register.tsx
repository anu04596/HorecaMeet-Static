import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import AnnouncementStrip from '../components/AnnouncementStrip/AnnouncementStrip';
import Footer from '../components/Footer/Footer';

interface RegisterPageProps {
    onBack?: () => void;
    onNavigateToVisitor?: () => void;
    onNavigateToStall?: () => void;
    onNavigateToConsultant?: () => void;
    onNavigateToSponsorship?: () => void;
    onNavigateToChef?: () => void;
    onNavigateToHorecaRise?: () => void;
    onNavigateToExhibition?: () => void;
    onNavigateToAwards?: () => void;
    onNavigateToSessions?: () => void;
    onNavigateToDelegate?: () => void;
}

/* ── Person icon (users) SVG — inline to avoid extra dependency ── */
function PersonIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5" cy="4" r="2.5" stroke="#6B7280" strokeWidth="1.14" />
            <path d="M1.5 11C1.5 8.51 3.74 6.5 6.5 6.5C9.26 6.5 11.5 8.51 11.5 11" stroke="#6B7280" strokeWidth="1.14" strokeLinecap="round" />
        </svg>
    );
}

/* ── Logo mark ── */
function LogoMark() {
    return (
        <img src="logo-static.png" alt="Logo" className="logo-icon" />
    );
}

const cards = [
    {
        id: 'visitor',
        title: 'Visitor',
        typeLabel: 'General Admission',
        desc: 'Industry professionals, food enthusiasts, and buyers exploring the HORECA ecosystem.',
        btnText: 'Register',
    },
    {
        id: 'exhibitor',
        title: 'Exhibitor',
        typeLabel: 'Stall / Booth',
        desc: 'Brands, manufacturers, and distributors looking to showcase products at the expo floor.',
        btnText: 'Register',
    },
    {
        id: 'consultant',
        title: 'Consultant',
        typeLabel: 'Solo',
        desc: 'F&B, operations, or design consultants offering advisory services to HORECA businesses.',
        btnText: 'Register',
    },
    {
        id: 'sponsor',
        title: 'Sponsor',
        typeLabel: 'Brand / Company',
        desc: 'Companies wanting high-visibility brand placement and strategic partnerships at HORECA MEET.',
        btnText: 'Register',
    },
    {
        id: 'chef',
        title: 'Chef Competition',
        typeLabel: 'Horeca',
        desc: 'Compete across 4 categories — Professionals, Home Chefs, Culinary Students & Bakery.',
        btnText: 'Register',
    },
    {
        id: 'horecaRise',
        title: 'Horeca Rise',
        typeLabel: 'Horeca Rise',
        desc: 'Apply for ₹1,000. Every applicant gets investor visibility — whether selected to pitch or not.',
        btnText: 'Register',
    },
];

export function RegisterPage({
    onBack,

}: RegisterPageProps) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) onBack();
        else navigate('/#formats-section');
    };

    const handleCardRegister = (id: string) => {
        switch (id) {
            case 'visitor': window.location.href = 'https://horecameet.com/delegate'; break;
            case 'exhibitor': window.location.href = 'https://horecameet.com/exhibitor'; break;
            case 'consultant': window.location.href = 'https://horecameet.com/consultant'; break;
            case 'sponsor': window.location.href = 'https://horecameet.com/sponsorship'; break;
            case 'chef': window.location.href = 'https://horecameet.com/chef-category'; break;
            case 'horecaRise': window.location.href = 'https://horecameet.com/investor'; break;
            default: break;
        }
    };

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="reg-page">

            {/* ─── ANNOUNCEMENT BAR ─── */}
            <AnnouncementStrip />

            {/* ─── NAV ─── */}
            <nav className="reg-nav">
                <button className="reg-nav-logo" onClick={handleBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <div className="reg-nav-logo-circle">
                        <LogoMark />
                    </div>
                    <span className="reg-nav-wordmark">HORECA MEET</span>
                </button>
                <div className="reg-nav-right">
                    <button className="reg-nav-back" onClick={handleBack}>← Home</button>
                </div>
            </nav>

            {/* ─── HERO ─── */}
            <section className="reg-hero">
                <div className="reg-hero-inner">
                    {/* Breadcrumb */}
                    <div className="reg-breadcrumb">
                        <button className="reg-breadcrumb-home" onClick={handleBack}>Home</button>
                        <span className="reg-breadcrumb-sep">›</span>
                        <span className="reg-breadcrumb-current">Register</span>
                    </div>

                    {/* Title */}
                    <h1 className="reg-hero-title">
                        Choose Your{' '}
                        <span className="reg-hero-title-accent">Role</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="reg-hero-subtitle">
                        Select how you'd like to participate at HORECA MEET. Each category is tailored to your profile.
                    </p>
                </div>
            </section>

            {/* ─── CARDS ─── */}
            <section className="reg-cards-section">
                <div className="reg-cards-list">
                    {cards.map((card) => (
                        <div key={card.id} className="reg-card">
                            <div className="reg-card-body">
                                {/* Top: title + type + desc */}
                                <div className="reg-card-top">
                                    <div className="reg-card-title-group">
                                        <h3 className="reg-card-title">{card.title}</h3>
                                        <div className="reg-card-type">
                                            <PersonIcon className="reg-card-type-icon" />
                                            <span className="reg-card-type-label">{card.typeLabel}</span>
                                        </div>
                                    </div>
                                    <p className="reg-card-desc">{card.desc}</p>
                                </div>

                                {/* Register button */}
                                <button
                                    className="reg-card-btn"
                                    onClick={() => handleCardRegister(card.id)}
                                >
                                    <span className="reg-card-btn-text">{card.btnText}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <Footer />

        </div>
    );
}