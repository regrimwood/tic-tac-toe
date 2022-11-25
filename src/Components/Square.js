import getStatus from "../getStatus";

const Square = ({ square, board, setBoard, status, setStatus }) => {
  const { id, symbol } = square;

  const addSymbol = () => {
    if (symbol === " " && !status.includes("wins")) {
      const newBoard = board;
      if (status === "It's o's turn!") {
        newBoard[id].symbol = "o";
      } else if (status === "It's x's turn!") {
        newBoard[id].symbol = "x";
      }
      const newStatus = getStatus(status, newBoard);
      setStatus(newStatus);
      setBoard(newBoard);
    }
  };

  return (
    <li className="square" onClick={addSymbol}>
      {symbol}
    </li>
  );
};

export default Square;
