import React from 'react';
import { juryMembers } from '../../data/jury';
import './JuryTeaser.css';

// Image imports — replace these paths with your actual images in /public/jury/
const juryImages: Record<string, string> = {
    '1': 'public/jury/sai-kumar-sharma.png',
    '2': 'public/jury/anil.png',
    '3': 'public/jury/michael.jpg',
    '4': 'public/jury/harish.png',
};

const JuryTeaser: React.FC = () => {
    return (
        <section className="jury-teaser">
            {/* ── Section Header ── */}
            <div className="jury-header">
                <div className="jury-eyebrow">
                    <span className="jury-eyebrow-text">CHEF COMPETITION JURY</span>
                    <div className="jury-eyebrow-line" />
                </div>

                <h2 className="jury-title">
                    The Jury <span className="jury-title-plain">That</span>
                    <br />
                    <span className="jury-title-accent">Said Yes.</span>
                </h2>

                <p className="jury-subtitle">
                    Five of India's most respected culinary professionals. Combined social reach of 2.5 million+. This is who you are cooking for.
                </p>
            </div>

            {/* ── Chef Cards ── */}
            <div className="jury-cards">
                {juryMembers.map((member) => (
                    <div className="chef-card" key={member.id}>
                        <div className="chef-card-image">
                            {member.imagePlaceholder ? (
                                <div className="chef-image-placeholder" />
                            ) : (
                                <img
                                    src={juryImages[member.id]}
                                    alt={member.name}
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (placeholder) placeholder.style.display = 'flex';
                                    }}
                                />
                            )}
                            {!member.imagePlaceholder && (
                                <div className="chef-image-placeholder" style={{ display: 'none' }} />
                            )}
                        </div>
                        <div className="chef-card-info">
                            <p className="chef-name">{member.name}</p>
                            <p className="chef-role">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Social Reach Card ── */}
            <div className="jury-social-card">
                <span className="jury-social-number">2.5M+</span>
                <p className="jury-social-label">Combined Social Following of the Jury Panel</p>
                <button className="jury-register-btn">Register for Chef Competition</button>
            </div>
        </section>
    );
};

export default JuryTeaser;