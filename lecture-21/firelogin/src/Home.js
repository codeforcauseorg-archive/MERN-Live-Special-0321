import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";
import axios from "axios";
import { useHistory } from "react-router";

function Home() {
  let { user } = useContext(UserContext);
  let history = useHistory();

  return user ? (
    <div>
      <h1> {user.displayName}</h1>
      <h1>{user.uid}</h1>
      <button
        onClick={function () {
          axios
            .get("https://hidden-brook-28260.herokuapp.com/api/alive")
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        I am Alive
      </button>
    </div>
  ) : (
    <div>
      <h1>Fetching User</h1>
      <button
        onClick={function () {
          history.push("/login");
        }}
      >Take me to login</button>
    </div>
  );
}

export default Home;
