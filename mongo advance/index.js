const express = require("express");
const mongoose = require("mongoose")

const app = express();
//  app.use(express.json())

// Connect MongoDB

const connectDB = () => {
    //mongodb url
 return mongoose.connect("mongodb://localhost:27017/student")
}



// create Schema - basically a structure of our document
const userSchema = mongoose.Schema({
   movie_name :{type: String},
    movie_genre :{type: String},
    budged :{type :Number},
    production_year :{type :Number},
})

// Model

// users - user
const User = mongoose.model("users", userSchema)
//  db.user


app.get("/user", async (req,res) => {
    const userData = await User.find().limit(10).lean().exec();
    console.log(userData)
    return res.send(userData)
})




app.listen(5000,async() => {
    try{
        await connectDB();
        console.log("listening at 5000")
    }
    catch(e){
        console.log(e)
    }
       
})