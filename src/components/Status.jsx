import React from "react";
import useStore from "../Stores/useStore";

function Status({ winner, isDraw, currentPlayer }) {
  const { mode } = useStore();

  const nextPlayer = () => {
    if (mode === "computer") {
      return currentPlayer === "X" ? "Player" : "Bot";
    }
    return currentPlayer === "X" ? "Joueur X" : "Joueur O";
  };

  return (
    <div className="status">
      {winner ? (
        <h2>
          Gagnant:{" "}
          {winner === "X"
            ? mode === "computer"
              ? "Player"
              : "Joueur X"
            : mode === "computer"
            ? "Computer"
            : "Joueur O"}
        </h2>
      ) : isDraw ? (
        <h2>Match nul!</h2>
      ) : (
        <h2>Prochain: {nextPlayer()}</h2>
      )}
    </div>
  );
}

export default Status;
