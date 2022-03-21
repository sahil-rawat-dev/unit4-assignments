const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  links: Number,
  coverImage: String,
  content: String,
},
{
    timestamps:String
});

module.exports = mongoose.model("book",bookSchema)
