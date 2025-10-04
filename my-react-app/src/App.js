import React, { useEffect, useState } from 'react';
import './App.css';
import TopBar from './Components/TopBar'; // Correct path for your TopBar component
import HomePage from './Pages/HomePage'; // Correct path for your HomePage component
import MappingPage from './Pages/Mapping'; // Correct path for your Mapping component
import GroupsPage from './Pages/Groups'; // Correct path for your Groups component
import SupportPage from './Pages/Support';

const App = () => {
  const [currentPage, setCurrentPage] = useState('HomePage'); // State for current page

  const renderPage = () => {
    switch (currentPage) {
      case 'HomePage':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Mapping':
        return <MappingPage />;
      case 'Groups':
        return <GroupsPage />;
      case 'Support':
        return <SupportPage />;
      default:
        return <div>Page not found.</div>;
    }
  };

  return (
    <div className="App">
      <TopBar setCurrentPage={setCurrentPage} />
      <div className="background-image" />
      {renderPage()}
    </div>
  );
};

export default App;
