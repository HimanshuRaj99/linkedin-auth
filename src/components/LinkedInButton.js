import React from 'react';
import './LinkedInButton.css';

const LinkedInButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860qsgpwiuukok&redirect_uri=https%3A%2F%2Flinkedin-auth-six.vercel.app%2FLinkedInProfile&state=foobar&scope=liteprofile%20emailaddress%20w_member_social';
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
