import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, set } from "./actions/countActions";

function App() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.count);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{count}</h1>
      <br />
      <button
        onClick={function () {
          dispatch(increase());
        }}
      >
        Increase
      </button>
      <button
        onClick={function () {
          dispatch(decrease());
        }}
      >
        Decrease
      </button>
      <input
        value={count}
        onChange={function (event) {
          dispatch(set(event.target.value));
        }}
      ></input>
    </div>
  );
}

export default App;
