import React from 'react';
import '../ComponentCss/RocketLoading.css';

const RocketLoading = () => {
  return (
    <div className="rocket-loading-container">
      <div className="rocket-container">
        <div className="rocket">
          <div className="rocket-body">
            <div className="rocket-nose"></div>
            <div className="rocket-body-main"></div>
            <div className="rocket-fins">
              <div className="fin fin-left"></div>
              <div className="fin fin-right"></div>
            </div>
          </div>
          <div className="rocket-flame">
            <div className="flame flame-1"></div>
            <div className="flame flame-2"></div>
            <div className="flame flame-3"></div>
          </div>
        </div>
      </div>
      <div className="loading-text">
        <h2>AgriVerse</h2>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default RocketLoading;
