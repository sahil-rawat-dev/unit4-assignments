const express = require("express");
const app=express()
app.use(allbooks);

app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

function allbooks(req,res,next){
    console.log("fetching all books")
    next()
}

app.use(singleBook);

app.get("/books/:name",(req,res)=>{
    req.name=req.params.name
    return RegExp.sent({"bookName":req.name});
})
function singleBook(req,res,next){
    console.log("called")
    next()
}

app.listen(5000,()=>{
    console.log("listening on 5000")
})