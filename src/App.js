import "./App.css";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={!darkMode ? "App" : "App dark-mode"}>
      <div className="nav">
        <label className="switch">
          <input type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
      </div>
      {!darkMode ? (
        <div className="content">
          <h1>Light Mode</h1>
          <p>Want to see some magic? Press toggle button</p>
        </div>
      ) : (
        <div className="content">
          <h1>Dark Mode</h1>
          <p>Click Again to change to light mode</p>
        </div>
      )}
    </div>
  );
}

export default App;
