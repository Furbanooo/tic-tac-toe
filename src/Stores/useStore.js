import { create } from 'zustand';

const useStore = create((set, get) => ({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  scores: { X: 0, O: 0 },
  winningLine: [],

  makeMove: (position) => {
    const { board, currentPlayer, checkWinner } = get();

    if (board[position] || get().winner || get().isDraw) {
      return false;
    }

    const newBoard = [...board];
    newBoard[position] = currentPlayer;

    const winResult = checkWinner(newBoard);
    const isDraw = !winResult.winner && newBoard.every(cell => cell !== null);

    const newScores = { ...get().scores };
    if (winResult.winner) {
      newScores[winResult.winner] += 1;
    }

    set({
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      winner: winResult.winner,
      winningLine: winResult.line,
      isDraw,
      scores: newScores
    });

    return true;
  },

  checkWinner: (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return {
          winner: board[a],
          line: combination
        };
      }
    }

    return {
      winner: null,
      line: []
    };
  },

  resetGame: () => {
    set({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      isDraw: false,
      winningLine: []
    });
  },

  resetScores: () => {
    set({
      scores: { X: 0, O: 0 }
    });
  }
}));

export default useStore;