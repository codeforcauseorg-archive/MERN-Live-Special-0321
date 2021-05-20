let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");

let app = express();

app.use(cors());
app.use(express.json());

let PORT = 5000;

const URLSchema = new mongoose.Schema({
  short: String,
  complete: String,
});

const URLModel = mongoose.model("URLModel", URLSchema);

let handlePing = async function (req, res) {
  let short = req.params.short;
  let doc = await URLModel.findOne({ short });
  console.log(doc);
  if (doc && doc.short) {
    res.redirect(doc.complete);
  } else {
    res.redirect("https://codeforcause.org");
  }
};

let handleFormSubmission = function (req, res) {
  let data = req.body;

  if (data.short && data.complete) {
    let short = new URLModel({
      short: data.short,
      complete: data.complete,
    });

    short
      .save()
      .then((response) => {
        res.send("Submitted");
      })
      .catch((err) => {
        res.statusCode(501);
      });
  } else {
    res.statusCode(501);
  }
};

app.get("/:short", handlePing);

app.post("/short/", handleFormSubmission);

function start() {
  mongoose
    .connect(
      "mongodb+srv://anuj:HappyAppy@cluster0.x36ik.mongodb.net/Bingo?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((response) => {
      console.log("Conneted to mongoDB");
      app.listen(PORT, function () {
        console.log(`listening to port ${PORT}`);
      });
    });
}

start();
