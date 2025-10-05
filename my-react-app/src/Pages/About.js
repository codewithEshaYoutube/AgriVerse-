import React from 'react';
import '../ComponentCss/About.css';
import NasaLogo from '../Images/NasaLogo.png';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="content page-centered">
      <div className="about-hero">
        <h1 className="about-hero-title">About AgriVerse</h1>
        <p className="about-hero-sub">by <span className="about-team">OrbitX Engineers</span></p>
        <div className="about-hero-badge">
          <img src={NasaLogo} alt="NASA" className="about-nasa-logo" />
          <div className="about-hero-text">
            <h2>NASA Space Apps Challenge 2025</h2>
            <p>Project: AgriVerse</p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-card">
          <div className="about-content">
            <p className="about-description">
              AgriVerse is a cutting-edge agricultural technology platform designed to revolutionize
              farming practices through innovative data analytics, mapping solutions, and AI‑powered insights.
            </p>
            
            <div className="about-features">
              <h2>Our Mission</h2>
              <p>
                To empower farmers and agricultural professionals with advanced technology solutions 
                that enhance productivity, sustainability, and profitability in modern agriculture.
              </p>
              
              <h2>Key Features</h2>
              <ul className="features-list">
                <li>Advanced agricultural mapping and data visualization</li>
                <li>AI-powered crop analysis and recommendations</li>
                <li>Real-time weather and soil monitoring</li>
                <li>Community-driven farming insights and collaboration</li>
                <li>Comprehensive support and guidance system</li>
              </ul>
              
              <h2>Our Team</h2>
              <p>
                AgriVerse is developed by a passionate team of software engineers, data scientists, 
                and agricultural experts dedicated to transforming the future of farming through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features – glass card at the bottom */}
      <div className="about-features-hero">
        <h2 className="features-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛰️</div>
            <h3 className="feature-heading">Crop Health Maps</h3>
            <p className="feature-desc">Satellite and NDVI‑style overlays to visualize vegetation and stress zones.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-heading">AI Recommendations</h3>
            <p className="feature-desc">Actionable guidance for irrigation, fertilization, and risk mitigation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌦️</div>
            <h3 className="feature-heading">Weather & Soil Analytics</h3>
            <p className="feature-desc">Hyperlocal weather, hazards, and soil indicators for timely decisions.</p>
          </div>
        </div>
        <p className="features-footnote">AgriVerse brings geospatial layers, AI, and farmer‑friendly visuals together to improve yields and sustainability.</p>
      </div>
    </div>
  );
};

export default AboutPage;
