import React, { useState } from "react";
import TicTacToe from "./TicTacToe";
import { createBoard } from "./utils/boardUtil";

let BoardContext = React.createContext();

function App() {
  let blank = createBoard();
  let [board, setBoard] = useState(blank);

  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      <TicTacToe />
    </BoardContext.Provider>
  );
}

export { App, BoardContext };
