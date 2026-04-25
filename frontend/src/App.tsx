import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ChefCompetitionPage } from './pages/ChefCompetitionPage/ChefCompetitionPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chef-competition" element={<ChefCompetitionPage />} />
      </Routes>
    </Router>
  );
};

export default App;