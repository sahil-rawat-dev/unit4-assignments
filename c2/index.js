
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sahilrawat490:sahil123@cluster0.qq5yq.mongodb.net/c2?retryWrites=true&w=majority"
  );
};

const userSchema=new mongoose.Schema(
{
    firstName:{type:String,require:true},
    middleName:{type:String,require:false},
    lastName:{type:String,require:true},
    age:{type:Number,require:true},
    email:{type:String,require:true},
    address:{type:String,require:true},
    gender:{type:String,require:false},

},
{
    versionKey: false,
    timestamps: true, 
}
  );
const User=mongoose.model("user",userSchema);

app.get("/users", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.status(200).send({ users: users }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("/users", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.listen(5000, async () => {
    try {
      await connect();
      console.log("listening on port 5000");
    } catch (err) {
      console.log(err);
    }
  
    
  });
