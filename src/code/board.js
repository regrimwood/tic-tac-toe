import { useState } from "react";
import Square from "./Square";
import "./board.css";

const Board = () => {
  const [status, setStatus] = useState("It's o's turn!");

  const ids = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const getStatus = () => {
    const x = document.getElementsByClassName("square");
    const currentBoard = [];
    for (let i = 0; i < 9; i++) {
      currentBoard.push(x[i].textContent);
    }
    const rows = [
      currentBoard.slice(0, 3),
      currentBoard.slice(3, 6),
      currentBoard.slice(6),
    ];
    const columns = [
      [rows[0][0], rows[1][0], rows[2][0]],
      [rows[0][1], rows[1][1], rows[2][1]],
      [rows[0][2], rows[1][2], rows[2][2]],
    ];
    const diagonals = [
      [rows[0][0], rows[1][1], rows[2][2]],
      [rows[0][2], rows[1][1], rows[2][0]],
    ];
    for (let i = 0; i < 3; i++) {
      if (
        rows[i].every((value) => {
          return value === "x";
        }) ||
        columns[i].every((value) => {
          return value === "x";
        })
      ) {
        return setStatus("x wins!!");
      }
      if (
        rows[i].every((value) => {
          return value === "o";
        }) ||
        columns[i].every((value) => {
          return value === "o";
        })
      ) {
        return setStatus("o wins!!");
      }
    }

    if (
      diagonals[0].every((value) => {
        return value === "x";
      }) ||
      diagonals[1].every((value) => {
        return value === "x";
      })
    ) {
      return setStatus("x wins!!");
    }
    if (
      diagonals[0].every((value) => {
        return value === "o";
      }) ||
      diagonals[1].every((value) => {
        return value === "o";
      })
    ) {
      return setStatus("o wins!!");
    }
    if (status === "o wins!!" || status === "x wins!!") {
      return;
    } else if (status === "It's o's turn!") {
      return setStatus("It's x's turn!");
    } else if (status === "It's x's turn!") {
      return setStatus("It's o's turn!");
    }
  };

  const clickHandler = async () => {
    await setTimeout(10);
    getStatus();
  };

  return (
    <>
      <h1>Tic-tac-toe</h1>
      <ul className="board" onClick={() => clickHandler()}>
        {ids.map((id) => {
          return <Square id={id} key={id} status={status} />;
        })}
      </ul>
      <p className="player">{status}</p>
    </>
  );
};

export default Board;
