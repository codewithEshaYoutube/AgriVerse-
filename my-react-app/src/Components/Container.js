import React from 'react';
import '../ComponentCss/Container.css'; // Ensure the correct path

const Container = ({ content }) => {
  return (
    <div className="container">
      {content.map((item, index) => (
        <div key={index}>{item} {/* Render each item in the content array */}</div>
      ))}
    </div>
  );
};

export default Container;
