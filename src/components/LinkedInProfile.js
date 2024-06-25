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
// const data=[]
const generateToken = async () => {
      const url = 'https://www.linkedin.com/oauth/v2/accessToken';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const body = new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': response_code,
        'redirect_uri': 'https%3A%2F%2Flinkedin-auth-six.vercel.app%2FLinkedInProfile',
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
    const url = 'https://api.linkedin.com/userinfo';
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
    //console.log(data)
    //console.log(data.access_token)
//     fetchAccessToken();
//     console.log('token val : ',token)

// const profileData = async() => {
//       const url = 'https://api.linkedin.com/v2/me';
//       const headers = {
//         'Authorization': 'Bearer '+ token,
//       };
//       try {
//         const response = await fetch(url, {
//           method: 'GET',
//           headers: headers,
         
//         });
//         const data = await response;
//         console.log('User Data:', data);
//       } catch (error) {
//         console.error('Error fetching User Details:', error);
//       }
//     };

//     profileData();

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
