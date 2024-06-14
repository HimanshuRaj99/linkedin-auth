import React from 'react';
import './LinkedInButton.css';

const LinkedInButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/login';
  };

  return (
    <div className='Home-header'>
    <div>Share your information</div>
    <button className="blue-button" onClick={handleClick}>
      upload via Linkedin
    </button>
    </div>
  );
};

export default LinkedInButton;
