const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  name:String
  
},
{
    timestamps:String
});

module.exports = mongoose.model("book",bookSchema)
