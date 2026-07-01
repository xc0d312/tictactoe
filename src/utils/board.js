import { patternsWinner } from "../constants/tictactoe";
import { turns } from "../constants/tictactoe";

function counterDirection(row, cell, dr, dc, turn, newBoard) {
  const posiciones = [1, 2, 3]
    .map((posc) => [row + dr * posc, cell + dc * posc])
    .filter(([newRow, newColumn]) => {
      if (
        newRow < 0 ||
        newRow >= newBoard.length ||
        newColumn < 0 ||
        newColumn >= newBoard[row].length
      )
        return false;
      return true;
    })
    .filter(([newRow, newColumn]) => {
      return newBoard[newRow][newColumn] == turn;
    });
  return posiciones.length;
}
export const checkWinner = (indexRow, indexCell, turn, newBoard) => {
  // const patterWinner = patternsWinner.find((patter) => {
  //   const marca = board[patter[0]];
  //   return marca && patter.every((p) => board[p] == marca);
  // });

  // if (patterWinner) return board[patterWinner[0]];
  // //logica para comprobar si hay un empate
  // const draw = board.every((_, index) => {
  //   return board[index] != null;
  // });

  // return draw ? "Draw" : false;

  const vectores = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];
  for (const [dr, dc] of vectores) {
    const total =
      1 +
      counterDirection(indexRow, indexCell, dr, dc, turn, newBoard) +
      counterDirection(indexRow, indexCell, -dr, -dc, turn, newBoard);
    if (total >= 3) return true;
  }
  //Esto me va retornar true o false si todos cumplen la condicion
  const draw = newBoard.every((row) => row.every((cell) => cell != null));
  return draw ? null : false;
};

export const updateBoard = (prevGame, indexRow, indexCell, checkWinner) => {
  // const newBoard = [...prevGame.board].map((row) => [...row]);
  const newBoard = structuredClone(prevGame.board);
  const { turn } = prevGame;
  newBoard[indexRow][indexCell] = turn;
  const result = checkWinner(indexRow, indexCell, turn, newBoard);
  const newWinner = result ? turn : result === null ? "Draw" : false;
  const newTurn = prevGame.turn === turns.X ? turns.O : turns.X;

  return {
    ...prevGame,
    board: newBoard,
    turn: newTurn,
    winner: newWinner,
  };
};
