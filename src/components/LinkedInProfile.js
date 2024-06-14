// SecondPage.js
import React, { useEffect } from 'react';
import qs from 'qs';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const LinkedInProfile = () => {
const location = useLocation();

const queryParams = new URLSearchParams(location.search);   
const response_code = queryParams.get('code');
const data = {   
  'grant_type': 'authorization_code',
  'code': response_code,
  'redirect_uri': 'https%3A%2F%2Flinkedin-auth-six.vercel.app%2FLinkedInProfile',
  'client_id': '860qsgpwiuukok',
  'client_secret': 'WPL_AP1.8zbjSGTE135JdGYX.C7hlVQ=='}

const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url : 'https://www.linkedin.com/oauth/v2/accessToken',
};
axios(options).then((res) => res.json())
.then((data) => {console.log(data)});
//   axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
//   grant_type: 'authorization_code',
//   code: response_code,
//   redirect_uri: 'https%3A%2F%2Flinkedin-auth-six.vercel.app%2FLinkedInProfile',
//   client_id: '860qsgpwiuukok',
//   client_secret: 'WPL_AP1.8zbjSGTE135JdGYX.C7hlVQ==', 
// }).then((res) => res.json())
// .then((data) => {console.log(data)});

// const fun = async () => {
//   const response_code = await queryParams.get('code');

//   axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
//   grant_type: 'authorization_code',
//   code: response_code,
//   redirect_uri: 'https://linkedin-auth-six.vercel.app/LinkedInProfile',
//   client_id: '860qsgpwiuukok',
//   client_secret: 'WPL_AP1.8zbjSGTE135JdGYX.C7hlVQ==', 
// }).then((res) => {console.log(res)});
// useEffect(()=> {fun}, []);
// }
  return (
    
    <div>
      <h1>User Profile</h1>
      <a href="/">Go to Home Page</a>
      <div>Current URL is {response_code}</div>
      {/* <div>response: {res}</div> */}
    </div>

  );
}

export default LinkedInProfile;
