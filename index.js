const { BookModel } = require("./Schema/BookSchema");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const books = require("./books");

mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true
});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB Connnected");
});

app.use(bodyParser());
app.use("/books", books);

app.listen(4000, () => {
  console.log("Starting Application");
});
