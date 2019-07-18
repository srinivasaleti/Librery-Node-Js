var express = require("express");
var router = express.Router();
const { BookModel } = require("./Schema/BookSchema");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.post("/", (req, res) => {
  var bookModel = new BookModel(req.body);
  bookModel.save(function(err, book) {
    if (err) return err;
    res.send(book);
  });
});

router.get("/", (req, res) => {
  BookModel.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
});

module.exports = router;
