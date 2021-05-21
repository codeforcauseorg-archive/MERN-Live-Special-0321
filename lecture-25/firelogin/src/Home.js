import "./App.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import axios from "./utils/axios";

function Home() {
  let { user } = useContext(UserContext);

  return (
    <button
      onClick={function () {
        axios.get("http://localhost:5000/v1/users/check").then((response) => {
          console.log(response.data);
        });
      }}
    >
      Click me
    </button>
  );
}

export default Home;
