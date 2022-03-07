const express =require("express")
const app= express();

app.use(logger)

app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

app.get("/libraries",logger,checkPermission("librarian"),(req,res)=>{
    return res.send({ route: "/libraries", permission: req.name})
})

app.get("/authors",logger,checkPermission("author"),(req,res)=>{
    return res.send({ route: "/authors", permission: req.name})
})
function checkPermission(role){
    return function logger(req,res,next){
        if(role=="librarian"||role=="author"){
            req.name=true;
            return next()
        }
        
    }
}

function logger(req,res,next){
    
    console.log("path:",req.path)
    return next()
}
app.listen(5000,()=>{
    console.log("listening on port 5000")
})