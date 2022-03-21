const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age:Number,
  email: String,
  profileImages:Array,
},
{
    timestamps:String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
