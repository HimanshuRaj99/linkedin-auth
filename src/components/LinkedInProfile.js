// SecondPage.js
import React,{ useState, useEffect } from 'react';
import qs from 'qs';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const LinkedInProfile = () => {
const location = useLocation();
const [token, setValue] = useState('')
const queryParams = new URLSearchParams(location.search);   
const response_code = queryParams.get('code');
console.log("code ====||-- " ,response_code)
// const data=[]
const fetchAccessToken =  () => {
      const url = 'https://www.linkedin.com/oauth/v2/accessToken';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const body = new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': response_code,
        'redirect_uri': 'https://linkedin-auth-six.vercel.app/LinkedInProfile',
        'client_id': '860qsgpwiuukok',
        'client_secret': 'WPL_AP1.8zbjSGTE135JdGYX.C7hlVQ=='
      });

      try {
        const response =  fetch(url, {
          method: 'POST',
          headers: headers,
          body: body.toString()
        });
         const data =  response.json();
        console.log('Response data:', data);
        setValue(data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };
    //console.log(data)
    //console.log(data.access_token)
    fetchAccessToken();
    console.log('token val : ',token)
const profileData = () => {
      const url = 'https://api.linkedin.com/v2/me';
      const headers = {
        'Authorization': 'Bearer '+ token.access_token,
      };
      try {
        const response = fetch(url, {
          method: 'GET',
          headers: headers,
         
        });
        const data = response.json();
        console.log('User Data:', data);
      } catch (error) {
        console.error('Error fetching User Details:', error);
      }
    };

    profileData();

// const data = {   
//   grant_type: 'authorization_code',
//   code: response_code,
//   redirect_uri: 'https%3A%2F%2Flinkedin-auth-six.vercel.app%2FLinkedInProfile',
//   client_id: '860qsgpwiuukok',
//   client_secret: 'WPL_AP1.8zbjSGTE135JdGYX.C7hlVQ=='}

// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded',
//               'Access-Control-Allow-Origin':"*"
//   },
//   data: qs.stringify(data),
//   url : 'https://www.linkedin.com/oauth/v2/accessToken',
// };
// axios(options).then((res) => res.json())
// .then((data) => {console.log("my response print", data)});


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
