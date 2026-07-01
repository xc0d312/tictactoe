import "./style.css/tictac.css";
import { use, useState } from "react";
import Square from "./components/Square";
import { Winner } from "./components/Winner";
import { checkWinner, updateBoard } from "./utils/board";
import { INITIAL_STATE_GAME } from "./utils/gameHelper";
import { turns } from "./constants/tictactoe";
import { Turn } from "./components/Square";
import {
  saveGameStorage,
  resetGameStorage,
  getGameStorage,
} from "./utils/storaje";

function App() {
  const [game, setGame] = useState(() => {
    const fromStorage = getGameStorage(INITIAL_STATE_GAME);
    return fromStorage ? fromStorage : INITIAL_STATE_GAME;
  });
  const { board, turn, winner } = game;

  const onClickSquare = (indexRow, indexCell) => {
    //validar que no haya ganador
    if (winner) return;

    //validar que no este ocupda ya esa pocision
    if (board[indexRow][indexCell]) return;
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

    setGame((prevGame) => {
      const newGame = updateBoard(prevGame, indexRow, indexCell, checkWinner);
      saveGameStorage(newGame);
      return newGame;
    });
  };

  return (
    <main className="ttt-game">
      <h1 className="ttt-title">Tic Tac Toe</h1>

      {winner && (
        <Winner winner={winner} onReset={() => setGame(resetGameStorage)} />
      )}
      <button
        className="btn-reset"
        onClick={() => setGame(resetGameStorage)}
      >
        Reiniciar Juego
      </button>

      <div className="ttt-board">
        {
          /* {board.map((row, index) => {
          // return (
          //   // <Square
          //   //   key={index}
          //   //   value={board[index]}
          //   //   updateBoard={() => onClickSquare(index)}
          //   // >
          //   //   {board[index]}
          //   // </Square>
          //   <Square
          //     key={index}
          //     // value={board[index]}
          //     updateBoard={() => onClickSquare(index)}
          //     row={row}
          //   ></Square>
          // );
        
        })} */
          board.map((row, index) => {
            return (
              <Square
                indexRow={index}
                row={row}
                updateBoard={onClickSquare}
              ></Square>
            );
          })
        }
      </div>
      <section className="Turn">
        <Turn isSelected={turn === turns.X} value={turns.X}>
          ✕
        </Turn>
        <Turn isSelected={turn === turns.O} value={turns.O}>
          ◯
        </Turn>
      </section>
    </main>
  );
}

export default App;
