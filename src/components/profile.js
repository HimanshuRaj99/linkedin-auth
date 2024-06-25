import React from 'react';
import './LinkedInButton.css';

const Profile = () => {
  const handleClick = () => {
    window.location.href = 'https://www.google.com/';
  };

  return (
    <div className='Home-header'>
    <div>Basic Profile</div>
    <button className="blue-button" onClick={handleClick}>
      upload via Linkedin
    </button>
    </div>
  );
};

export default Profile;
