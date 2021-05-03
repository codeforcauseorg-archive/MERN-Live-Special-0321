let express = require("express");
let cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());

let PORT = 5000;

let handleGet = function (req, res) {
  console.log(req.query);
  res.send("Wohhooo. Sending from server");
};

let handlePing = function (req, res) {
  console.log(req.query);
  res.redirect("https://google.com/");
};

let handleFormSubmission = function (req, res) {
  let data = req.body;
  console.log(data);
  res.send("Submitted");
};

app.get("/", handleGet);

app.get("/ping/", handlePing);

app.post("/submit/", handleFormSubmission);

app.listen(PORT, function () {
  console.log(`listening to port ${PORT}`);
});
