import logo from "./logo.svg";
import "./App.css";
import { useTrail, animated } from "react-spring";

function App() {
  const [springs, api] = useTrail(4, () => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: { reverse: true },
  }));

  return (
    <div className="App">
      {springs.map(function (spring) {
        return (
          <animated.img
            src={logo}
            width="200px"
            height="200px"
            alt="logo"
            style={spring}
          />
        );
      })}
    </div>
  );
}

export default App;
