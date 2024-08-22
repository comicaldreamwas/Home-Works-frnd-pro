import React, { useState } from 'react';
import './App.css';

const emojis = ['😊', '😂', '❤️', '👍', '🎉'];

function App() {
  const [counts, setCounts] = useState(emojis.reduce((acc, emoji) => {
    acc[emoji] = 0;
    return acc;
  }, {}));

  const [showWinner, setShowWinner] = useState(false);

  const handleClick = (emoji) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [emoji]: prevCounts[emoji] + 1
    }));
  };

  const handleShowWinner = () => {
    setShowWinner(true);
  };

  const getWinner = () => {
    const maxCount = Math.max(...Object.values(counts));
    const winner = Object.keys(counts).find(emoji => counts[emoji] === maxCount);
    return winner;
  };

  return (
    <div className="App">
      <h1>Emoji Click Counter</h1>
      <div className="emoji-list">
        {emojis.map(emoji => (
          <div
            key={emoji}
            className="emoji-item"
            onClick={() => handleClick(emoji)}
          >
            <span className="emoji">{emoji}</span>
            <span className="count">({counts[emoji]})</span>
          </div>
        ))}
      </div>
      <button onClick={handleShowWinner} className="show-results-btn">
        Show Results
      </button>
      {showWinner && (
        <div className="winner">
          <h2>Winner:</h2>
          <div className="winner-emoji">
            <span className="emoji">{getWinner()}</span>
            <span className="count">({counts[getWinner()]})</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
