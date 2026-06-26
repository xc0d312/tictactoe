import { patternsWinner } from "../constants/tictactoe";
import { turns } from "../constants/tictactoe";

export const checkWinner = (board) => {
  const patterWinner = patternsWinner.find((patter) => {
    const marca = board[patter[0]];
    return marca && patter.every((p) => board[p] == marca);
  });

  if (patterWinner) return board[patterWinner[0]];
  //logica para comprobar si hay un empate
  const draw = board.every((_, index) => {
    return board[index] != null;
  });

  return draw ? "Draw" : false;
};

export const updateBoard = (prevGame, index, checkWinner) => {
  const newBoard = [...prevGame.board];
  newBoard[index] = prevGame.turn;
  const newTurn = prevGame.turn === turns.X ? turns.O : turns.X;
  const newWinner = checkWinner(newBoard);
  return {
    ...prevGame,
    board: newBoard,
    turn: newTurn,
    winner: newWinner,
  };
};


