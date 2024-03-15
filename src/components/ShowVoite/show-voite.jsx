import React, { useState } from "react";

const ShowVoite = () => {
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // новое состояние

  const handleButtonClick = () => {
    const votingResults = [
      { emoji: "😬", votes: 10 },
      { emoji: "🥶", votes: 5 },
      { emoji: "🙈", votes: 3 },
      { emoji: "🧠", votes: 7 },
      { emoji: "🤠", votes: 2 },
    ];
    setResults(votingResults);
    setIsVisible(!isVisible); // переключение видимости
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Voting Results</button>
      {isVisible &&
        results.map(
          (
            result,
            index // отображение результатов только если isVisible равно true
          ) => (
            <div key={index}>
              <span>
                {result.emoji} {result.votes}
              </span>
            </div>
          )
        )}
    </div>
  );
};

export default ShowVoite;
