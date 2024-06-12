import React from 'react';
import './LinkedInButton.css';

const LinkedInButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/login';
  };

  return (
  
    <button className="blue-button" onClick={handleClick}>
      upload via Linkedin
    </button>
    
  );
};

export default LinkedInButton;
