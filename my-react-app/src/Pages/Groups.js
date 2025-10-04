import React from 'react';
import '../ComponentCss/Leaderboard.css'; // Ensure the correct path
import Container from '../Components/Container'; // Import the Container component

const GroupsPage = ({ setCurrentPage }) => {
  const leaderboardData = [
    { rank: 1, name: 'Alice', yield: '3000 kg/ha' },
    { rank: 2, name: 'Bob', yield: '2800 kg/ha' },
    { rank: 3, name: 'Charlie', yield: '2700 kg/ha' },
    { rank: 4, name: 'David', yield: '2500 kg/ha' },
    { rank: 5, name: 'Eve', yield: '2400 kg/ha' },
    { rank: 6, name: 'Frank', yield: '2300 kg/ha' },
    { rank: 7, name: 'Grace', yield: '2200 kg/ha' },
    { rank: 8, name: 'Hannah', yield: '2100 kg/ha' },
    { rank: 9, name: 'Ivy', yield: '2000 kg/ha' },
    { rank: 10, name: 'Jack', yield: '1900 kg/ha' },
  ];

  return (
    <div className="content page-centered">
      <Container content={[
        <h1 className="leaderboard-title" key="title">Best Crop Yields</h1>,
        <table className="leaderboard-table" key="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Crop Yield</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.rank}>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.yield}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ]} />
    </div>
  );
};

export default GroupsPage;