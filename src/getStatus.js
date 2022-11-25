export default function getStatus(status, newBoard) {
  const rows = [newBoard.slice(0, 3), newBoard.slice(3, 6), newBoard.slice(6)];
  let newStatus = status;

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
      rows[i].every((square) => square.symbol === "x") ||
      columns[i].every((square) => square.symbol === "x")
    ) {
      newStatus = "x wins!!";
    }
    if (
      rows[i].every((square) => square.symbol === "o") ||
      columns[i].every((square) => square.symbol === "o")
    ) {
      newStatus = "o wins!!";
    }
  }

  if (
    diagonals[0].every((square) => square.symbol === "x") ||
    diagonals[1].every((square) => square.symbol === "x")
  ) {
    newStatus = "x wins!!";
  }
  if (
    diagonals[0].every((square) => square.symbol === "o") ||
    diagonals[1].every((square) => square.symbol === "o")
  ) {
    newStatus = "o wins!!";
  }

  let isTie = true;
  for (const square of newBoard) {
    if (square.symbol === " ") isTie = false;
  }
  if (isTie) newStatus = "tie!";

  if (newStatus === "It's o's turn!") {
    newStatus = "It's x's turn!";
  } else if (newStatus === "It's x's turn!") {
    newStatus = "It's o's turn!";
  }

  return newStatus;
}
