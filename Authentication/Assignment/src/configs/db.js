const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://sahil:Sahil123@cluster0.zaahk.mongodb.net/authntication?authSource=admin&replicaSet=atlas-uajqnc-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
  );
};
