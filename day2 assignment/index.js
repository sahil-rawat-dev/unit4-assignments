const express=require("express")
const app=express()

app.get("/users",function(req,res){
    // console.log("hello")
    res.send("hello")
})

app.get("/books",function(req,res){
    res.send({book1:"english",book2:"math",book3:"physics",book4:"computer"})
})

app.listen(4000,()=>{
    console.log("listening on port 5000")
})