const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://gngit2010:gngjain1234@cluster0.dahu3zg.mongodb.net/6prilmahaveer')
  .then(() => {
    console.log("our connection is successfully");
  }).catch((e) => {
    console.log(e);
  });

const schema = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },

    des1:{
        type:String,
        
    },
    des2:{
        type:String,
        
    },
    
});

const Sroject = mongoose.model("Sroject", schema);
module.exports = Sroject;
