// SecondPage.js
import React,{ useState, useEffect } from 'react';
import qs from 'qs';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const LinkedInProfile = () => {

const location = useLocation();
const [token, setToken] = useState(null);
const [userData, setUserData] = useState(null);
const queryParams = new URLSearchParams(location.search);   
const response_code = queryParams.get('code');
console.log("code ====||-- " ,response_code)

const generateToken = async () => {
      const url = 'https://www.linkedin.com/oauth/v2/accessToken';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const body = new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': response_code,
        'redirect_uri': 'https://linkedin-auth-six.vercel.app/profile',
        'client_id': '860qsgpwiuukok',
        'client_secret': 'WPL_AP1.8zbjSGTE135JdGYX.C7hlVQ=='
      });

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: body.toString()
        });
         const data = await response.json();
        console.log('Response data:', data);
        const newToken = data.access_token;
        setToken(newToken);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

  console.log('token val : ',token);
  
  const fetchProfileData = (accessToken) => {
    const url = 'https://api.linkedin.com/v2/userinfo';
    const headers = {
      'Authorization': `Bearer ${accessToken}`,

    };
    console.log('get header val : ',headers);

    fetch(url, {
      method: 'GET',
      headers: headers,
    })
    .then(response => response.json())
    .then(data => {
      console.log('User Data:', data);
      setUserData(data); // Update state with fetched data
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  };

  useEffect(() => {
    // Generate token on component mount
    generateToken();
  }, []);

  useEffect(() => {
    // Fetch profile data once the token is generated
    if (token) {
      fetchProfileData(token);
    }
  }, [token]);

  return (
    <div>
      <h1>User Profile</h1>
      <a href="/">Go to Home Page</a>
      <div>Current URL is {response_code}</div>
    </div>
  );
}

export default LinkedInProfile;
