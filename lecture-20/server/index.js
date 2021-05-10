let express = require("express");
let cors = require("cors");
let bearerToken = require("express-bearer-token");

let admin = require("firebase-admin");
var serviceAccount = require("./service.json");
const { response } = require("express");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let app = express();
app.use(cors());


app.use(bearerToken());

app.get("/", function (req, res) {
  res.send("We are visible to everyone");
});

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

app.get("/api/alive", function (req, res) {
  res.send("Noted you are alive" + " You are veried as " + req.user.user_id);
});

app.listen(5000);
