const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  author_name: String,
  name: String,
  status: String,
  price: String
});

const BookModel = mongoose.model("Book", BookSchema);

exports.BookModel = BookModel;
