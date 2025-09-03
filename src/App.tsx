import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MonitorPage from './pages/MonitorPage';
import BooksPage from './pages/BooksPage';
import RoadmapPage from './pages/RoadmapPage';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Layout from './component/layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* All pages wrapped with Layout, which includes Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hii" element={<HomePage />} />
          <Route path="/monitor" element={<MonitorPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;