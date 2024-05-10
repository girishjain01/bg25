const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://gngit2010:gngjain1234@cluster0.dahu3zg.mongodb.net/6prilmahaveer')
//   .then(() => {
//     console.log("our connection is successfully");
//   }).catch((e) => {
//     console.log(e);
//   });
 
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
    des3:{
        type:String,    
    },
    des4:{
        type:String,
      },
      des5:{
        type:String,
    },
    des6:{
      type:String,
    },
    des7:{
      type:String,
    },
    des8:{
    type:String,
    },
    des9:{
      type:String,
      },
      des10:{
        type:String, 
    },
    des11:{
      type:String,
    },
    des12:{
      type:String,
    },
    des13:{
    type:String,
    },
    des14:{
    type:String,
    },
    des15:{
    type:String,
    },
    des16:{
    type:String,
    },
    des17:{
    type:String,
    },
    des18:{
    type:String,
    },
    des19:{
      type:String, 
    },
    des20:{
    type:String,
    },
    des21:{
    type:String,
    },
    des22:{
    type:String,
    },
    des23:{
    type:String,
    },
    des24:{
    type:String,
    },
    des25:{
    type:String,
    },
    des26:{
    type:String,
    },
    des27:{
    type:String,
    },
    des28:{
    type:String, 
    },
    des29:{
    type:String,
    },
    des30:{
    type:String,
    },
    des31:{
    type:String,
    },
    des32:{
    type:String,
    },
    des33:{
    type:String,
    },
    des34:{
    type:String,
    },
    des35:{
    type:String,
    },
    des36:{
    type:String,
    },
});

const Sroject = mongoose.model("Sroject", schema);
module.exports = Sroject;
