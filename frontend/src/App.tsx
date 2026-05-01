import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { RegisterPage } from './pages/Register';
import { ChefCompetitionPage } from './pages/ChefCompetitionPage/ChefCompetitionPage';
import { HorecaRisePage } from './pages/HorecaRisePage/HorecaRisePage';
import { IndustrySessionPage } from './pages/IndustrySessionPage/IndustrySessionPage';
import { StarAwardsPage } from './pages/StarAwardsPage/StarAwardsPage';
import { ExhibitionZonePage } from './pages/ExhibitionZonePage/ExhibitionZonePage';
import { ConsultantZonePage } from './pages/ConsultantZonePage/ConsultantZonePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chef-competition" element={<ChefCompetitionPage />} />
        <Route path="/horeca-rise" element={<HorecaRisePage />} />
        <Route path="/industry-session" element={<IndustrySessionPage />} />
        <Route path="/star-awards" element={<StarAwardsPage />} />
        <Route path="/exhibition" element={<ExhibitionZonePage />} />
        <Route path="/consultant-zone" element={<ConsultantZonePage />} />
      </Routes>
    </Router>
  );
};

export default App;