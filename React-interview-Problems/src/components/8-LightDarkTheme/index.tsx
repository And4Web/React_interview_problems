import "./style.css";
import UseLocalStorage from "./useLocalStorage";

// from 2:08:45 to 2:25:45

function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme","dark");

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : "light");
  };
  // console.log(theme)
  
  return (
    <div className="ldm-container" data-theme={theme}>
      <h3 className="ldm-title">Project 8. Light & Dark mode</h3>
      
      <div className="ldm-light-dark">
        <p className="ldm-text">{theme === "dark" ? "It's so dark here!" : "Oh! It's sunlight, Good morning..."}</p>
        <button className="ldm-btn" onClick={handleToggleTheme}>Change theme</button>
      </div>

    </div>
  )
}

export default LightDarkMode