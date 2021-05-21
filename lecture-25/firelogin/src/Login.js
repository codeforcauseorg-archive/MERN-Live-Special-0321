import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./utils/firebase";

function Login() {
  let { user } = useContext(UserContext);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "100vh",
        background: "#cccccc",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "300px",
          padding: "100px",
          borderRadius: "20px",
          alignItems: "center",
          justifyContent: "center",
          background: "#222222",
        }}
      >
        {user ? (
          <button
            onClick={function () {
              firebase.auth().signOut();
            }}
          >
            Logout
          </button>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
