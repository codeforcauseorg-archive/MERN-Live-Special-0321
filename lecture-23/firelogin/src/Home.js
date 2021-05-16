import "./App.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import { io } from "socket.io-client";

function Home() {
  let { user } = useContext(UserContext);
  let [socket, setSocket] = useState();
  let [target, setTarget] = useState("");
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [active, setActive] = useState([]);

  useEffect(async function () {
    let token = await user.getIdToken(true);
    // console.log(token);
    let sock = io("http://localhost:5000/", {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    sock.on("connect", function () {
      console.log("You are connected");
      setSocket(sock);
    });

    sock.on("disconnect", function () {
      setSocket(null);
    });

    sock.on("message", function (payload) {
      setMessages((messages) => {
        let gen = [...messages];
        gen.push(payload);
        return gen;
      });
    });

    sock.on("active", function (payload) {
      setActive(payload);
    });
  }, []);

  return socket ? (
    <div style={{
      display: "flex",
      flexDirection: "column",
      margin: "10px",
    }}>
      <h1>{user.uid}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10px",
          justifyContent: "center"
        }}
      >
         <button
              onClick={() => {
                setTarget("");
              }}
              style={{
                margin: "10px",
              }}
            >
              All
            </button>
        {active.map(function (person) {
           return (user.uid !== person.uid) ? (
            <button
              onClick={() => {
                setTarget(person.uid);
              }}
              style={{
                margin: "10px",
              }}
            >
              {person.name}
            </button>
           ): undefined
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10px",
        }}
      >   

        <input
          style={{
            flexGrow: 1,
            height: "50px",
            margin: "10px",
          }}
          value={message}
          onChange={function (event) {
            setMessage(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button
          style={{
            height: "50px",
            margin: "10px",
          }}
          onClick={function () {
            socket.emit("message", {
              message: message,
              targetId: target,
            });
            setTarget("");
            setMessage("");
          }}
        >
          Send
        </button>
      </div>

      <div>
        {messages.map(function (messageItem, idx) {
          return (
            <p key={idx}>
              {messageItem.senderName} : {messageItem.message}
            </p>
          );
        })}
      </div>
    </div>
  ) : (
    <h1>You are disconnected. Connecting you back.</h1>
  );
}

export default Home;
