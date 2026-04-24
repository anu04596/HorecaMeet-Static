import React from 'react';
import AnnouncementStrip from './components/AnnouncementStrip/AnnouncementStrip';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FormatsSection from './components/FormatsSection/FormatsSection';
import JuryTeaser from './components/JuryTeaser/JuryTeaser';
import StarAwardsTeaser from './components/StarAwardsTeaser/StarAwardsTeaser';
import HorecaRiseTeaser from './components/HorecaRiseTeaser/HorecaRiseTeaser';
import SocialProof from './components/SocialProof/SocialProof';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <AnnouncementStrip />
      <Navbar />
      <HeroSection />
      <FormatsSection />
      <JuryTeaser />
      <StarAwardsTeaser />
      <HorecaRiseTeaser />
      <SocialProof />
      {/* AnnouncementStrip repeated at bottom as ticker above footer */}
      <AnnouncementStrip />
      <Footer />
    </div>
  );
};

export default App;