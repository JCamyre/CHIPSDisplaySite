import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About/AboutPage';
import PeoplePage from './components/pages/PeoplePage/PeoplePage';
import Videos from './components/pages/Videos/Videos';
import News from './components/pages/News/News';
import Posters from './components/pages/Posters/Posters';
import ArticlePage from './components/pages/ArticlePage/ArticlePage';
import Poster from './components/pages/Poster/Poster';

// Make entire thing fit on one window exactly.

function App() {
  return (
    <>
      <Router style={{ height: '100vh', width: '100vw' }}>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/poster/:id" element={<Poster />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
