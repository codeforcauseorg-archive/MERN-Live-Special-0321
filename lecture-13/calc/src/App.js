import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [oldExpression, setOldExpression] = useState("");
  let [expression, setExpression] = useState("0");
  let [prev, setPrev] = useState("ANS");

  let numerics = new Set("0123456789.");
  let operators = new Set("+-*/%");

  let buttons = [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  let evaluateExpression = function () {
    let evalution = eval(expression);
    setOldExpression(expression + " =");
    setExpression(String(evalution));
    // expression = evalution;
    setPrev("ANS");
  };

  let putNumerics = function (value) {
    if (prev == "ANS") {
      setOldExpression("Ans = " + expression);
      setExpression(value);
    } else {
      setExpression(expression + value);
    }
    setPrev("NUM");
  };

  let putOperator = function (value) {
    if (prev != "OP") {
      setExpression(expression + value);
    } else {
      setExpression(expression.slice(0, -1) + value);
    }
    setPrev("OP");
  };

  let putDelete = function () {
    if (expression.length >= 1) {
      setExpression(expression.slice(0, -1));
    }
    setPrev("DEL");
  };

  let handleKeyUp = function (event) {
    console.log(event.key);
    if (event.key === "Backspace") {
      putDelete();
    } else if (numerics.has(event.key)) {
      putNumerics(event.key);
    } else if (operators.has(event.key)) {
      putOperator(event.key);
    } else if (event.key === "Enter") {
      evaluateExpression();
    }
  };

  return (
    <div className="App" tabIndex={0} onKeyUp={handleKeyUp}>
      <div style={{
        padding: "10px",
        borderRadius: "10px",
        background: "#444444"

      }}>

        <h1 style={{
          color: "#ffffff",
          textAlign: "center"
        }}> My Awesome Calculator</h1>
        <div
          style={{
            width: "400px",
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "10px",
            overflow: "hidden",
            margin: "20px",
          }}
        >
          <h6>{oldExpression}</h6>
          <h1>{expression}</h1>
        </div>

        <div
          style={{
            width: "400px",
            background: "#ffffff",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            flexWrap: "wrap",
          }}
        >
          {buttons.map(function (buttonValue, idx) {
            return (
              <button
                style={{
                  width: "90px",
                  padding: "5px",
                  margin: "5px",
                }}
                onClick={function () {
                  if (buttonValue === "CE") {
                    putDelete();
                  } else if (numerics.has(buttonValue)) {
                    putNumerics(buttonValue);
                  } else if (operators.has(buttonValue)) {
                    putOperator(buttonValue);
                  } else if (buttonValue === "=") {
                    evaluateExpression();
                  }
                }}
              >
                {buttonValue}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
