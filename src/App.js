import React from 'react';
import './App.css';
import LinkedInButton from './LinkedInButton';
import FileUploadButton from './FileUploadButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Please, share your info</h1>
        <FileUploadButton />
        <LinkedInButton />
      </header>
    </div>
  );
}

export default App;