require('dotenv').config(); // यह सुनिश्चित करता है कि .env फ़ाइल के वेरिएबल्स लोड हो जाएं

const mongoose = require('mongoose');

// .env फ़ाइल से डेटाबेस URL लेना
const dbURI = process.env.MONGO_URI;

// MongoDB कनेक्शन सेटअप
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;
const mongoose = require("mongoose");
require('dotenv').config(); // Ensure this is at the top to load environment variables early

// Use the environment variable for the MongoDB URI
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI) // Use the environment variable here
  .then(() => {
    console.log("Our connection is successfully established");
  }).catch((e) => {
    console.error("Failed to connect to MongoDB:", e);
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
    des37:{
      type:String,
      },
      des38:{
      type:String,
      },
      des39:{
      type:String,
      },
      des40:{
      type:String,
      },
      des41:{
      type:String,
      },
      des42:{
      type:String,
      },
});

const Sroject = mongoose.model("Sroject", schema);
module.exports = Sroject;
