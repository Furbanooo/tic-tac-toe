import React from "react";

function Status({ winner, isDraw, currentPlayer }) {
  return (
    <div className="status">
      {winner ? (
        <h2>Le joueur {winner} a gagné !</h2>
      ) : isDraw ? (
        <h2>Match nul ! La partie est terminée.</h2>
      ) : (
        <h2>Au tour du joueur {currentPlayer}</h2>
      )}
    </div>
  );
}

export default Status;
