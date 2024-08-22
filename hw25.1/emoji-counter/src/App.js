import React, { Component } from 'react';
import './App.css';

const emojis = ['😊', '😂', '❤️', '👍', '🎉'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: this.loadCountsFromLocalStorage(),
      showWinner: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counts !== this.state.counts) {
      this.saveCountsToLocalStorage();
    }
  }

  loadCountsFromLocalStorage() {
    const savedCounts = localStorage.getItem('emojiCounts');
    return savedCounts ? JSON.parse(savedCounts) : emojis.reduce((acc, emoji) => {
      acc[emoji] = 0;
      return acc;
    }, {});
  }

  saveCountsToLocalStorage() {
    localStorage.setItem('emojiCounts', JSON.stringify(this.state.counts));
  }

  handleClick = (emoji) => {
    this.setState(prevState => ({
      counts: {
        ...prevState.counts,
        [emoji]: prevState.counts[emoji] + 1
      }
    }));
  };

  handleShowWinner = () => {
    this.setState({ showWinner: true });
  };

  handleClearResults = () => {
    this.setState({
      counts: emojis.reduce((acc, emoji) => {
        acc[emoji] = 0;
        return acc;
      }, {}),
      showWinner: false
    }, this.saveCountsToLocalStorage);
  };

  getWinner = () => {
    const maxCount = Math.max(...Object.values(this.state.counts));
    const winner = Object.keys(this.state.counts).find(emoji => this.state.counts[emoji] === maxCount);
    return winner;
  };

  render() {
    return (
      <div className="App">
        <h1>Emoji Click Counter</h1>
        <div className="emoji-list">
          {emojis.map(emoji => (
            <div
              key={emoji}
              className="emoji-item"
              onClick={() => this.handleClick(emoji)}
            >
              <span className="emoji">{emoji}</span>
              <span className="count">({this.state.counts[emoji]})</span>
            </div>
          ))}
        </div>
        <button onClick={this.handleShowWinner} className="show-results-btn">
          Show Results
        </button>
        <button onClick={this.handleClearResults} className="clear-results-btn">
          Clear Results
        </button>
        {this.state.showWinner && (
          <div className="winner">
            <h2>Winner:</h2>
            <div className="winner-emoji">
              <span className="emoji">{this.getWinner()}</span>
              <span className="count">({this.state.counts[this.getWinner()]})</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
