import React from "react";
import { Component } from "react";
import "./smile-voite.scss";

class EmojiVote extends Component {
  constructor(props) {
    super(props);
    const emoji = ["😬", "🥶", "🙈", "🧠", "🤠"];
    this.state = {
      emoji,
      votes: new Array(emoji.length).fill(0),
    };
  }
  handleVote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index]++;
    this.setState({ votes: newVotes });
  };
  render() {
    return (
      <div className="headline">
        <h1>Vote for your favorite emoji</h1>
        <div>
          {this.state.emoji.map((emoji, index) => (
            <button
              className="smile"
              key={index}
              onClick={() => this.handleVote(index)}
            >
              {emoji} {this.state.votes[index]}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default EmojiVote;
