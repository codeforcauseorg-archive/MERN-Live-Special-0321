import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import {firebase} from './utils/firebase';

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();


  useEffect(function () {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
