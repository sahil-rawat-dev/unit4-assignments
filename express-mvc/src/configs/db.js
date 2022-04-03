const mongoose =require("mongoose")
const connect =()=>{
    return mongoose.connect(
        "mongodb+srv://sahil:Sahil123@cluster0.zaahk.mongodb.net/expressmvc?authSource=admin&replicaSet=atlas-uajqnc-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

    )
}

module.exports = connect;