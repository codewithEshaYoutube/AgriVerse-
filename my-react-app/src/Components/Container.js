import React from 'react';
import '../ComponentCss/Container.css'; // Ensure the correct path

const Container = ({ content, className }) => {
  return (
    <div className={`container ${className ? className : ''}`}>
      {content.map((item, index) => (
        <div key={index}>{item} {/* Render each item in the content array */}</div>
      ))}
    </div>
  );
};

export default Container;
