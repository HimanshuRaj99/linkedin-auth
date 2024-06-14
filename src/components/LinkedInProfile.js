// SecondPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const LinkedInProfile = () => {
const location = useLocation();
const queryParams = new URLSearchParams(location.search);   
const code = queryParams.get('code');
  return (
    
    <div>
      <h1>User Profile</h1>
      <a href="/">Go to Home Page</a>
      <div>Current URL is {code}</div>
    </div>

  );
}

export default LinkedInProfile;
