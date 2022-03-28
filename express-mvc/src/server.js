const  connect = require("./configs/db");
const app = require("./index");



app.listen(5000, async()=>{
    try{
        await connect()
    }
    catch(err){
        console.log(err)
    }
    console.log("Listening on port 5000")
})