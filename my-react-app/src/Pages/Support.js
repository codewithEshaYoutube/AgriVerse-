import React from 'react';
import ChatBox from '../Components/ChatBox'; // Import ChatBox component

const SupportPage = ({ setCurrentPage }) => {
  return (
    <div className="content page-centered">
      <div className="support-page">
        <div className="chatbot-container">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;