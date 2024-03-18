// EmojiVote.jsx
import React, { Component } from "react";

class EmojiVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: ["😬", "🥶", "🙈", "🧠", "🤠"],
      votes: new Array(5).fill(0),
      showResults: false,
    };
  }

  handleVote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index]++;
    this.setState({ votes: newVotes });
  };

  toggleResults = () => {
    this.setState((prevState) => ({ showResults: !prevState.showResults }));
  };

  render() {
    const winningIndex = this.state.votes.indexOf(
      Math.max(...this.state.votes)
    );
    return (
      <div>
        <h1>Vote for your favorite emoji</h1>
        {this.state.emoji.map((emoji, index) => (
          <button key={index} onClick={() => this.handleVote(index)}>
            {emoji} {this.state.votes[index]}
          </button>
        ))}
        <button onClick={this.toggleResults}>Show Results</button>
        {this.state.showResults && (
          <h2>Winning Emoji: {this.state.emoji[winningIndex]}</h2>
        )}
      </div>
    );
  }
}

export default EmojiVote;
