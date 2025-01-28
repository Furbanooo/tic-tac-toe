import React from "react";
import Board from "./components/Board";
import Status from "./components/Status";
import Scoreboard from "./components/Scoreboard";
import useStore from "./Stores/useStore";
import "./App.css";

function App() {
  const { scores, currentPlayer, winner, isDraw, resetScores } = useStore();

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <Scoreboard scores={scores} />
      <Status winner={winner} isDraw={isDraw} currentPlayer={currentPlayer} />
      <Board />
    </div>
  );
}

export default App;
