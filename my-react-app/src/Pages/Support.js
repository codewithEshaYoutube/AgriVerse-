import React from 'react';

const SupportPage = ({ setCurrentPage }) => {
  return (
    <div className="content page-centered">
      <div className="support-page">
        <h2 style={{ color: '#2E7D32', marginBottom: '20px', textAlign: 'center' }}>
          Need Help? Chat with AgriVerse Assistant 🌱
        </h2>

        <div className="chatbot-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ZP11ekHJpd2NJDnrRTynZ"
            width="100%"
            style={{
              height: '100%',
              minHeight: '700px',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
            title="AgriVerse Chatbot"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
