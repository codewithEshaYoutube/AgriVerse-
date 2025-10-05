import React from 'react';
import '../ComponentCss/TopBar.css'; // Assuming there's a CSS file for styles
import logo from '../Images/AgriVerseLogo.png'; // Update with the logo path
import NasaLogo from '../Images/NasaLogo.png';

const TopBar = ({ setCurrentPage }) => {
  return (
    <div className="top-bar">
      <button 
        onClick={() => setCurrentPage('HomePage')} 
        className="homepage-button" // Specific class for the homepage button
      >
        <img src={logo} alt="AgriVerse Logo" className="logo" />
      </button>
      
      <nav className="navigation-menu">
        <span
          className="nav-item"
          onClick={() => setCurrentPage('HomePage')}
        >
          Home
        </span>
        <span
          className="nav-item"
          onClick={() => setCurrentPage('About')}
        >
          About
        </span>
        <span 
          className="nav-item" 
          onClick={() => setCurrentPage('Mapping')}
        >
          Mapping
        </span>
        <span 
          className="nav-item" 
          onClick={() => setCurrentPage('Groups')}
        >
          Groups
        </span>
        <span 
          className="nav-item" 
          onClick={() => setCurrentPage('Support')}
        >
          Support
        </span>
      </nav>
      
      <img src={NasaLogo} alt="NASA" className="user-icon" />
    </div>
  );
};

export default TopBar;
