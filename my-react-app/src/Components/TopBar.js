import React from 'react';
import '../ComponentCss/TopBar.css'; // Assuming there's a CSS file for styles
import logo from '../Images/AgriViewLogo.png'; // Update with the logo path
import userIcon from '../Images/user.png'; // User icon path

const TopBar = ({ setCurrentPage }) => {
  return (
    <div className="top-bar">
      <button 
        onClick={() => setCurrentPage('HomePage')} 
        className="homepage-button" // Specific class for the homepage button
      >
        <img src={logo} alt="AgriView Logo" className="logo" />
      </button>
      <img src={userIcon} alt="User Icon" className="user-icon" />
    </div>
  );
};

export default TopBar;
