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

  useEffect(function () {
    let sock = io("http://localhost:5000/");

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
  }, []);

  return socket ? (
    <div>
      <h1>{user.uid}</h1>
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
          value={target}
          onChange={function (event) {
            setTarget(event.target.value);
            console.log(event.target.value);
          }}
        ></input>

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
              senderID: user.uid,
              senderName: user.displayName,
              message: message,
              targetId: target
            });

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
