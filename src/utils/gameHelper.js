export const INITIAL_STATE_GAME = {
  board: Array(3)
    .fill(null)
    .map(() => Array(3).fill(null)),
  turn: "✕",
  winner: null,
};
