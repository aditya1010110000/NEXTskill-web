import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MonitorPage from './pages/MonitorPage';
import BooksPage from './pages/BooksPage';
import RoadmapPage from './pages/RoadmapPage';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage'
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/hii" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />S
          <Route path="/monitor" element={<MonitorPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;