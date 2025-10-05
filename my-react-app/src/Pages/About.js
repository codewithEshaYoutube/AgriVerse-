import React from 'react';
import '../ComponentCss/About.css';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="content page-centered">
      <div className="about-container">
        <div className="about-card">
          <h1 className="about-title">About AgriVerse</h1>
          <div className="about-content">
            <p className="about-description">
              AgriVerse is a cutting-edge agricultural technology platform designed to revolutionize 
              farming practices through innovative data analytics, mapping solutions, and AI-powered insights.
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
    </div>
  );
};

export default AboutPage;
