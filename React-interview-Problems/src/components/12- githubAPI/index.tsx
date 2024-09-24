import { useEffect, useState } from "react"
import "./style.css"
import UserProfileCard from "./UserProfileCard";

// from 3:13:08 to 3:36:09

// api url:  `https://api.github.com/users/${username}`

type ProfileData = {
  avatar_url: string;
  company: string;
  followers: number;
  following: number;
  html_url: string;
  id: number;
  login: string;
  name: string;
  public_repos: number;
  repos_url: string;
  twitter_username: string;
  url: string;
}

function GithubProfiles() {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<ProfileData | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = () => {
    if(username === "" || username === undefined || username === null){
      setErrorMsg("Invalid Username")      
      setInterval(()=>{
        setErrorMsg("")
      }, 1000)
    }else{
      fetchGithubProfile(username);
    }
  }

  async function fetchGithubProfile(getUsername:string | undefined){
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${getUsername}`);
      const data = await response.json();
      setUserData(data);

      localStorage.setItem('githubUsername', JSON.stringify(data.login));

      setLoading(false);
      setUsername("")  
    } catch (error) {
      console.log(error?.message);
      setErrorMsg(error?.message);
      setLoading(false);
    }      
  }

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('githubUsername')) as string){
      fetchGithubProfile(JSON.parse(localStorage.getItem('githubUsername')) as string);
    }    
  },[])

  if(loading){
    return <h1 style={{textAlign: "center"}}>Loading Profile...</h1>
  }
  if(errorMsg){
    return <h1 style={{textAlign: "center"}}>Error: {errorMsg}</h1>    
  }
  
  return (
    <div className="ghp-container">
      <h3 className="ghp-title">Project 12. Github Profiles</h3>

      <input type="text" placeholder="Enter Username" className="ghp-search" value={username} onChange={(e)=>setUsername(e.target.value)}/>

      <button className="ghp-btn" onClick={handleSubmit}>Search Github</button>

      <div className="ghp-profile-container">       
        {
          userData && <UserProfileCard userData={userData}/> 
        }
      </div>
    </div>
  )
}

export default GithubProfiles