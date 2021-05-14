let express = require("express");
let cors = require("cors");
let bearerToken = require("express-bearer-token");
let socketio = require("socket.io");
const http = require("http");

const sockets = new Map();

let admin = require("firebase-admin");
var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let app = express();
app.use(cors());

const httpServer = http.createServer(app);

const io = socketio(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(bearerToken());

app.use(function (req, res, next) {
  if (req.token) {
    admin
      .auth()
      .verifyIdToken(req.token)
      .then(function (response) {
        console.log(response);
        req.user = response;
        next();
      })
      .catch(function (error) {
        res.sendStatus(401);
      });
  } else {
    res.sendStatus(401);
  }
});

io.on("connection", function (socket) {
  console.log("connected to client");

  socket.on("message", function (payload) {
    if (!sockets.has(payload.senderId)) {
      sockets.set(payload.senderId, socket);
    }

    if (payload.targetId) {
      let target = sockets.get(payload.targetId);
      target.emit("message", payload);
    } else {
      io.sockets.emit("message", payload);
    }
    
  });
});

httpServer.listen(5000);
