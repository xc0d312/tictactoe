import "./style.css/tictac.css";
import { use, useState } from "react";
import Square from "./components/Square";
import { Winner } from "./components/Winner";
import { checkWinner, updateBoard } from "./utils/board";
import { INITIAL_STATE_GAME } from "./utils/gameHelper";
import { turns } from "./constants/tictactoe";

function App() {
  const [game, setGame] = useState(INITIAL_STATE_GAME);
  const { board, turn, winner } = game;

  const onClickSquare = (index) => {
    //validar que no haya ganador
    if (winner) return;
    //validar que no este ocupda ya esa pocision
    if (board[index]) return;
    //actualizar el estado del juego
    // const newBoard = [...board];
    // newBoard[index] = turn;
    // const newGame = {
    //   ...game,
    //   board: newBoard,
    //   turn: turn === turns.X ? turns.O : turns.X,
    //   winner: checkWinner(newBoard),
    // };
    // setGame(newGame);

    setGame((prevGame) => updateBoard(prevGame, index, checkWinner));
  };

  return (
    <main className="ttt-game">
      <h1 className="ttt-title">Tic Tac Toe</h1>

      {winner && (
        <Winner winner={winner} onReset={() => setGame(INITIAL_STATE_GAME)} />
      )}
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
