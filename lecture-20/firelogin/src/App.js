import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { firebase } from "./utils/firebase";
import { Switch, Route } from "react-router-dom";
import axios from "./utils/axios";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        user
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            axios.defaults.headers["Authorization"] = `Bearer ${idToken}`;
            console.log(axios.defaults.headers["Authorization"]);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
