import React from 'react';
import './LinkedInButton.css';

const LinkedInButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860qsgpwiuukok&redirect_uri=http://localhost:3000/auth/linkedin/callback&state=9876ye54321&scope=profile&emailaddress';
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
