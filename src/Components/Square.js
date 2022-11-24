import { useState } from "react";

const Square = ({ id, status }) => {
  const [symbol, setSymbol] = useState(" ");

  const addSymbol = () => {
    if (symbol === " ") {
      if (status === "It's o's turn!") {
        return setSymbol("o");
      } else if (status === "It's x's turn!") {
        return setSymbol("x");
      }
    } else {
      return;
    }
  };

  return (
    <li id={id} className="square" onClick={addSymbol}>
      {symbol}
    </li>
  );
};

export default Square;
