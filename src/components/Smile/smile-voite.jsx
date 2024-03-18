import React, { Component } from "react";
import "./smile.scss";
class EmojiVote extends Component {
  constructor(props) {
    super(props);
    const emoji = ["😬", "🥶", "🙈", "🧠", "🤠"];
    this.state = {
      emoji,
      votes: new Array(emoji.length).fill(0),
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
      <div className="Wrapper">
        <p class="answer">Vote for your favorite emoji</p>
        {this.state.emoji.map((emoji, index) => (
          <button
            className="smile"
            key={index}
            onClick={() => this.handleVote(index)}
          >
            {emoji} {this.state.votes[index]}
          </button>
        ))}
        <button className="showResult" onClick={this.toggleResults}>
          Show Results
        </button>
        {this.state.showResults && (
          <p className="winner">
            Winning Emoji: {this.state.emoji[winningIndex]}
          </p>
        )}
      </div>
    );
  }
}

export default EmojiVote;
