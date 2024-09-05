// src/App.jsx
import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/contacts">Contacts</Link> | <Link to="/about">About</Link>
            <button onClick={toggleTheme}>
              {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            </button>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
