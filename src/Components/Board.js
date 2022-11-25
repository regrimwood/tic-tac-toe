import { useState } from "react";
import Square from "./Square";
import "./Board.css";

const initialStatus = "It's o's turn!";

const Board = () => {
  const initialBoard = [
    { id: 0, symbol: " " },
    { id: 1, symbol: " " },
    { id: 2, symbol: " " },
    { id: 3, symbol: " " },
    { id: 4, symbol: " " },
    { id: 5, symbol: " " },
    { id: 6, symbol: " " },
    { id: 7, symbol: " " },
    { id: 8, symbol: " " },
  ];

  const [status, setStatus] = useState(initialStatus);
  const [board, setBoard] = useState(initialBoard);

  const handleReset = () => {
    setStatus(initialStatus);
    setBoard(initialBoard);
  };

  return (
    <>
      <h1>Tic-tac-toe</h1>
      <ul className="board">
        {board.map((square) => {
          return (
            <Square
              key={square.id}
              square={square}
              board={board}
              setBoard={setBoard}
              status={status}
              setStatus={setStatus}
            />
          );
        })}
      </ul>
      <p className="status">{status}</p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Board;
