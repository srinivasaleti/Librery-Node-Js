const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser());
mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true
});

const Schema = mongoose.Schema;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB Connnected");
});

const BookSchema = new mongoose.Schema({
  author_name: String,
  name: String,
  status: String,
  price: String
});

const BookModel = mongoose.model("Book", BookSchema);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/books", (req, res) => {
  var bookModel = new BookModel(req.body);
  bookModel.save(function(err, book) {
    if (err) return handleError(err);
    res.send(req.body);
  });
});

app.listen(4000, () => {
  console.log("Starting Application");
});
