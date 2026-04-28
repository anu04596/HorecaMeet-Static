import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ChefCompetitionPage } from './pages/ChefCompetitionPage/ChefCompetitionPage';
import './App.css';
import { HorecaRisePage } from './pages/HorecaRisePage/HorecaRisePage';
import { IndustrySessionPage } from './pages/IndustrySessionPage/IndustrySessionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chef-competition" element={<ChefCompetitionPage />} />
        <Route path="/horeca-rise" element={<HorecaRisePage />} />
        <Route path="/industry-session" element={<IndustrySessionPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;