import React from 'react';
import AnnouncementStrip from './components/AnnouncementStrip/AnnouncementStrip';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FormatsSection from './components/FormatsSection/FormatsSection';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <AnnouncementStrip />
      <Navbar />
      <HeroSection />
      <FormatsSection />
    </div>
  );
};

export default App;