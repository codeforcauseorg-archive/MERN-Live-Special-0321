let { io } = require("socket.io-client");

const URL = "http://localhost:3000";

const socket = io(URL, { autoConnect: true });


socket.on("connect", function(){
    console.log("Got connected to server");
})

socket.on("disconnect", function(){
    console.log("Got disconnected to server");
})

socket.on("message", function(payload){
    console.log(payload);
})




