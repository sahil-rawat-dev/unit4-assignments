const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://sahil:Sahil123@cluster0.osp1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports=connect