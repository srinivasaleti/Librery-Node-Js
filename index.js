const { BookModel } = require("./Schema/BookSchema");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
app.use(bodyParser());

mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true
});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB Connnected");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/books", (req, res) => {
  var bookModel = new BookModel(req.body);
  bookModel.save(function(err, book) {
    if (err) return handleError(err);
    res.send(book);
  });
});

app.listen(4000, () => {
  console.log("Starting Application");
});
