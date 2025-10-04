import React from 'react';
import '../ComponentCss/PageChangeButton.css'; // Ensure correct path to the CSS file

const PageChangeButton = ({ text, onClick }) => {
  return (
    <button className="page-change-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default PageChangeButton;
