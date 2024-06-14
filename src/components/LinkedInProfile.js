// SecondPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
const LinkedInProfile = () => {
  let location = useLocation();
  return (
    
    <div>
      <h1>User Profile</h1>
      <a href="/">Go to Home Page</a>
      <div>Current URL is {location}</div>
    </div>

  );
}

export default LinkedInProfile;
