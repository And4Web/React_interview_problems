import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";

type UserProps = {
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

function UserProfileCard({userData}:UserProps) {
  const {avatar_url, company, followers, following, html_url, login, name, public_repos, repos_url, twitter_username} = userData;
  const twitterLogo = "https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png";
  // console.log("UserProfileCard >>> ", userData)
  return (
    <div className="ghp-user-card">
      <div className="ghp-intro-container">
        <img src={avatar_url} alt={name} />
        <div className="ghp-name-container">
          <h2 className="ghp-name">{name?`${name}`:"Unknown"}</h2>
          <a href={html_url} className="ghp-user-name" target="_blank">(@{login})</a>
        </div>
      </div>

      <div className="ghp-company">
        <FaBuildingUser className="ghp-icon"/>
        <h4>{company?`${company}`: `No Company Found`}</h4>
      </div>

      <div className="ghp-numbers">
        <div className="ghp-number"><b>Followers: </b><span>{followers}</span></div>
        <div className="ghp-number"><b>Following:</b><span>{following}</span></div>
        <div className="ghp-number"><b>Repositories:</b><span>{public_repos}</span></div>
      </div>

      <div className="ghp-links">
          {/* <a href={`${repos_url}`} target="_blank" className="ghp-btn"><FaGithub /></a> */}

        <div className="ghp-link">
          <a href={`${html_url}?tab=repositories`} target="_blank" className="ghp-btn"><FaGithub /></a>
          <span>Repositories</span>
        </div>

        <div className="ghp-link">
          <a href={`https://www.twitter.com/${twitter_username}`} target="_blank" className="ghp-btn"><FaTwitter /></a>
          <span>Twitter</span>
        </div>

      </div>
     
    </div>
  )
}

export default UserProfileCard