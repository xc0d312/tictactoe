import "./style.css/tictac.css";
import { use, useState } from "react";
import Square from "./components/Square";
import { Winner } from "./components/Winner";
import { turns, patternsWinner } from "./constants/tictactoe";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState(null);

  const onClickSquare = (index) => {
    //validar que no haya ganador
    if (winner) return;
    //validar que no este ocupda ya esa pocision
    if (board[index] != null) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      return;
    }
    setTurn(turn === turns.X ? turns.O : turns.X);
  };
  const checkWinner = (board) => {
    const patterWinner = patternsWinner.find((patter) => {
      const marca = board[patter[0]];
      return marca != null && patter.every((p) => board[p] == marca);
    });
    if (patterWinner) return board[patterWinner[0]];

    const draw = board.every((_, index) => {
      return board[index] != null;
    });

    return draw ? "Draw" : false;
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);
  };

  return (
    <main className="ttt-game">
      <h1 className="ttt-title">Tic Tac Toe</h1>

      {winner && <Winner winner={winner} onReset={resetGame} />}
      <div className="ttt-board">
        {board.map((value, index) => {
          return (
            <Square
              key={index}
              value={board[index]}
              updateBoard={() => onClickSquare(index)}
            >
              {board[index]}
            </Square>
          );
        })}
      </div>
      <section className="Turn">
        <Square isSelected={turn === turns.X} value={turns.X}>
          ✕
        </Square>
        <Square isSelected={turn === turns.O} value={turns.O}>
          ◯
        </Square>
      </section>
    </main>
  );
}

export default App;

//pasos para crear un tic tac toe
