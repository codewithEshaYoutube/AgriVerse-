import React, { useState } from 'react';
import '../ComponentCss/ChatBox.css'; // Import the CSS file for styling

const ChatBox = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState(['How can I help you?']);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = () => {
    if (userInput.trim()) {
      setMessages((prevMessages) => [...prevMessages, userInput]);
      setUserInput(''); // Clear the input field
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h2>AgriVerse AI</h2>
      </div>
      <div className="chatbox-body">
        {messages.map((msg, index) => (
          <div key={index} className="chatbox-message">{msg}</div>
        ))}
      </div>
      <div className="chatbox-footer">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="chatbox-input"
        />
        <button onClick={sendMessage} className="chatbox-send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
