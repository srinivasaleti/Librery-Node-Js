const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/books", (req, res) => {
  const data = req.body;
  res.send(data);
});
app.listen(4000, () => {
  console.log("Starting Application");
});
