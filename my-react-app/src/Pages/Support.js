import React, { useState } from 'react';
import Container from '../Components/Container'; // Adjust the import path as necessary
import ChatBox from '../Components/ChatBox'; // Import ChatBox component
import '../ComponentCss/Support.css'; // Import the CSS file for styling

const SupportPage = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <Container height={300} content={[
        <ChatBox key="5" /> // Integrate the ChatBox here
      ]} />
    </div>
  );
};

export default SupportPage;