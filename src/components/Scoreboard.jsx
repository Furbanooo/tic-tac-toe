import React from "react";

function Scoreboard({ scores }) {
  return (
    <div className="scoreboard">
      <span className="player-x">Joueur X</span>: {scores.X}
      <br />
      <span className="player-o">Joueur O</span>: {scores.O}
    </div>
  );
}

export default Scoreboard;
