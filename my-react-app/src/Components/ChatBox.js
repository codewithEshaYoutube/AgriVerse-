import React, { useState } from 'react';
import '../ComponentCss/ChatBox.css'; // Import the CSS file for styling

const ChatBox = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! I\'m AgriVerse AI, your agricultural assistant. How can I help you with farming questions today?', sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const queryModel = async (data) => {
    try {
      // For now, let's use a simpler approach with agricultural knowledge
      // The agriculture-bert model is primarily for text classification, not conversation
      return await getAgriculturalResponse(data.inputs);
    } catch (error) {
      console.error('Error querying model:', error);
      return { error: 'Failed to get response from AI model' };
    }
  };

  const getAgriculturalResponse = async (userInput) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const input = userInput.toLowerCase();
    
    // Agricultural knowledge base
    const responses = {
      'hello': 'Hello! I\'m AgriVerse AI, your agricultural assistant. I can help you with farming techniques, crop management, soil health, pest control, and sustainable agriculture practices. What would you like to know?',
      
      'what is agriculture': 'Agriculture is the practice of cultivating plants and livestock for food, fiber, medicinal plants, and other products used to sustain and enhance human life. It includes crop production, animal husbandry, soil management, and sustainable farming practices.',
      
      'crops': 'Crops are plants that are grown and harvested for food, feed, fiber, or other agricultural purposes. Common crops include cereals (wheat, rice, corn), legumes (beans, peas), vegetables, fruits, and cash crops like cotton and tobacco.',
      
      'soil': 'Soil health is crucial for successful agriculture. Healthy soil contains organic matter, beneficial microorganisms, proper pH levels, and good structure. Practices like crop rotation, cover cropping, and organic amendments help maintain soil fertility.',
      
      'farming': 'Farming involves the cultivation of crops and raising of livestock. Modern farming techniques include precision agriculture, sustainable practices, irrigation management, and integrated pest management to maximize yield while protecting the environment.',
      
      'pest': 'Pest management in agriculture involves controlling insects, diseases, and weeds that damage crops. Integrated Pest Management (IPM) combines biological, cultural, physical, and chemical methods for effective and sustainable pest control.',
      
      'irrigation': 'Irrigation is the artificial application of water to crops. Efficient irrigation systems like drip irrigation, sprinklers, and smart irrigation help conserve water while ensuring crops receive adequate moisture for optimal growth.',
      
      'fertilizer': 'Fertilizers provide essential nutrients (nitrogen, phosphorus, potassium) to plants. Organic fertilizers like compost and manure improve soil health, while synthetic fertilizers provide immediate nutrient availability for crop growth.',
      
      'sustainable': 'Sustainable agriculture focuses on farming practices that maintain environmental health, economic profitability, and social equity. It includes crop rotation, organic farming, water conservation, and renewable energy use.',
      
      'weather': 'Weather significantly impacts agriculture. Farmers monitor temperature, rainfall, humidity, and wind patterns to make informed decisions about planting, irrigation, pest control, and harvest timing.',
      
      'harvest': 'Harvesting is the process of gathering mature crops from fields. Timing is crucial - crops should be harvested at optimal maturity for maximum yield and quality. Proper storage and handling preserve crop value.',
      
      'seeds': 'Quality seeds are the foundation of successful agriculture. Farmers choose seeds based on climate, soil type, disease resistance, and yield potential. Seed treatment and proper storage ensure good germination rates.',
      
      'machinery': 'Agricultural machinery includes tractors, planters, harvesters, and irrigation systems. Modern equipment increases efficiency, reduces labor costs, and enables precision farming techniques for better crop management.',
      
      'organic': 'Organic agriculture avoids synthetic pesticides and fertilizers, focusing on natural methods like composting, crop rotation, and biological pest control. It promotes soil health and environmental sustainability.',
      
      'greenhouse': 'Greenhouse farming allows year-round crop production by controlling temperature, humidity, and light. It protects crops from weather extremes and enables cultivation of plants outside their natural growing seasons.'
    };
    
    // Find the best matching response
    for (const [keyword, response] of Object.entries(responses)) {
      if (input.includes(keyword)) {
        return { response: response };
      }
    }
    
    // Default responses for general agricultural questions
    const defaultResponses = [
      'That\'s a great agricultural question! I can help you with farming techniques, crop management, soil health, pest control, irrigation, and sustainable agriculture practices. Could you be more specific about what you\'d like to know?',
      'I\'m here to help with all aspects of agriculture! I can provide information about crop cultivation, soil management, pest control, irrigation systems, organic farming, and sustainable practices. What specific topic interests you?',
      'As your agricultural assistant, I can help with farming advice, crop selection, soil improvement, pest management, and sustainable agriculture. Please let me know what specific agricultural topic you\'d like to explore.',
      'I specialize in agricultural knowledge! I can assist with crop planning, soil health, irrigation, pest control, organic farming, and modern agricultural technologies. What would you like to learn about?',
      'I\'m AgriVerse AI, your farming companion! I can help with crop management, soil fertility, pest control, irrigation, sustainable practices, and agricultural technology. What specific farming question do you have?'
    ];
    
    return { response: defaultResponses[Math.floor(Math.random() * defaultResponses.length)] };
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim()) {
      const userMessage = { text: userInput, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setUserInput('');
      setIsLoading(true);

      try {
        // Get agricultural response from our knowledge base
        const response = await queryModel({ inputs: userInput });
        
        let botResponse;
        if (response.error) {
          botResponse = 'I apologize, but I\'m having trouble processing your request right now. Please try again later.';
        } else if (response && response.response) {
          botResponse = response.response;
        } else {
          // Fallback responses for common agricultural topics
          const agriculturalResponses = [
            'That\'s a great agricultural question! I can help with farming techniques, crop management, soil health, and more.',
            'I understand you\'re interested in agriculture. I can provide insights on farming, crops, and agricultural best practices.',
            'Thank you for your farming question! I\'m here to help with agricultural topics like crop rotation, soil management, and sustainable farming.',
            'I can help with various agricultural topics including crop diseases, pest management, irrigation, and farm planning.',
            'That\'s an interesting agricultural question! I can assist with farming advice, crop selection, and agricultural technology.'
          ];
          botResponse = agriculturalResponses[Math.floor(Math.random() * agriculturalResponses.length)];
        }

        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Chat error:', error);
        const errorMessage = { text: 'I apologize, but I\'m experiencing technical difficulties. Please try again.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h2>AgriVerse AI</h2>
        <p>Your Agricultural Assistant</p>
      </div>
      <div className="chatbox-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbox-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
            <div className="message-content">
              <div className="message-sender">
                {msg.sender === 'user' ? '👤 You' : '🤖 AgriVerse AI'}
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chatbox-message bot-message">
            <div className="message-content">
              <div className="message-sender">🤖 AgriVerse AI</div>
              <div className="message-text loading">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="chatbox-footer">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ask me about agriculture, farming, crops, soil health..."
          className="chatbox-input"
          disabled={isLoading}
        />
        <button 
          onClick={sendMessage} 
          className="chatbox-send-button"
          disabled={isLoading || !userInput.trim()}
        >
          {isLoading ? '⏳' : '📤'}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
