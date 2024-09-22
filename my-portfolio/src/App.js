

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import Todo from './components/Todo';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
