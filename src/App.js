import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LinkedInButton from './components/LinkedInButton';
import LinkedInProfile from './components/LinkedInProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LinkedInButton/>} />
          <Route path="/LinkedInProfile" element={<LinkedInProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
