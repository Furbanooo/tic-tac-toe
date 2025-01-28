import React from "react";
import Square from "./Square";
import useStore from "../Stores/useStore";

function Board() {
  const {
    board,
    winningLine,
    makeMove,
    resetGame,
    resetScores,
    mode,
    setMode,
  } = useStore();

  const handleClick = (i) => {
    makeMove(i);
  };

  return (
    <div className="board">
      {board.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => handleClick(i)}
          highlight={winningLine.includes(i)}
        />
      ))}
      <div className="reset-container">
        <button className="reset-button" onClick={resetGame}>
          NEW GAME
        </button>
        <button className="reset-button" onClick={resetScores}>
          Reset Scores
        </button>
        <button
          className="mode-button"
          onClick={() => setMode(mode === "player" ? "computer" : "player")}
        >
          {mode === "player" ? "Play Against Computer" : "Play Against Player"}
        </button>
      </div>
    </div>
  );
}

export default Board;
