let express = require("express");
let cors = require("cors");
let bearerToken = require("express-bearer-token");
let socketio = require("socket.io");
const http = require("http");

const sockets = new Map();
const activeUsers = new Map();

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


io.use(function (socket, next){
  if(socket.request.headers.authorization){
    let author = socket.request.headers.authorization;
    let token = author.slice(7);
    admin.auth().verifyIdToken(token).then(function (response) {

        socket.user = response;
        next();
      })
      .catch(function (error) {
        socket.close();
      });
  }
  else{
    socket.close();
  }
})

io.on("connection", function (socket) {
  console.log("connected to client");
  sockets.set(socket.user.uid, socket);
  activeUsers.set(socket.user.uid, socket.user.name);

  socket.on("message", function (payload) {

    if (payload.targetId) {
      let target = sockets.get(payload.targetId);
      payload.senderName = `${socket.user.name} (private)`;
      socket.emit("message", payload);
      target.emit("message", payload);
    } else {
      payload.senderName = socket.user.name;
      io.sockets.emit("message", payload);
    }
    
  });
});

setInterval(function(){
  let payload = [];
  activeUsers.forEach((value, key)=> {
    let info = {
      uid: key, 
      name: value
    }
    payload.push(info);
  })
  io.sockets.emit("active", payload);
}, 5000);


httpServer.listen(5000);
