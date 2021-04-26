import { useContext, useState } from "react";
import { BoardContext } from "./App";
import produce from "immer";

function TicTacToe() {
  let { board, setBoard } = useContext(BoardContext);
  let [player, setPlayer] = useState(0);

  console.log(board);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {board.map(function (row, rowIndex) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {row.map(function (item, colIndex) {
              return (
                <button
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  onClick={function () {
                    const updated = produce(board, (draftState) => {
                      if (draftState[rowIndex][colIndex] == -1) {
                        draftState[rowIndex][colIndex] = player;
                      }``
                    });

                    setBoard(updated);
                    setPlayer(player == 0 ? 1 : 0);
                  }}
                >
                  {" "}
                  {item == -1 ? " " : item}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TicTacToe;
