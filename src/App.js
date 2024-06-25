import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LinkedInButton from './components/LinkedInButton';
import LinkedInProfile from './components/LinkedInProfile';
import Profile from './components/profile';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LinkedInButton/>} />
          <Route path="/LinkedInProfile" element={<LinkedInProfile/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
