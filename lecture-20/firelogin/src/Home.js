import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";
import { useHistory } from "react-router-dom";
import axios from "axios";
import firebase  from "firebase";
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
            .get("http://localhost:5000/alive")
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
      <button
        onClick={function () {
          firebase.auth().signOut().then(() => {
            console.log("you are log out")
          }).catch((error) => {
            console.log(error);
          });
          
        }}>
        Logout
      </button>
    </div>
  ) : (
    <div>
      <h1>Please Log In</h1>
      <button onClick={function () {
        history.push("/login");
      }}>Log In</button>
    </div>
  );
}

export default Home;
