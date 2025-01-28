import React from "react";

function Scoreboard({ scores, mode }) {
  return (
    <div className="scoreboard">
      {mode === "player" ? (
        <>
          <span className="player-x">Joueur X</span>: {scores.X}
          <br />
          <span className="player-o">Joueur O</span>: {scores.O}
        </>
      ) : (
        <>
          <span className="player-x">Joueur</span>: {scores.X}
          <br />
          <span className="player-o">Ordinateur</span>: {scores.O}
        </>
      )}
    </div>
  );
}

export default Scoreboard;
