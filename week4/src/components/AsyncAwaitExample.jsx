import axios from 'axios'
import { useEffect } from 'react';

export default function AsyncAwaitExample() {
    useEffect(()=>{
        // getGithubProfile();
    },[]);

  return (
    <div>안녕하세요.</div>
  )
}

// async function getGithubProfile() {
//     const response =await axios.get(`https://api.github.com/users/{아이디}`)
//     console.log('data', response.data);
// }