<<<<<<< HEAD
const mongoose = require("mongoose");
require('dotenv').config();

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
    console.log("Connection to the database was successful");
  }).catch((e) => {
    console.error("Failed to connect to MongoDB:", e);
  });

const schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  des1: {
    type: String,
  },
  audio1: {
    type: String,
  },
  des2: {
    type: String,
  },
  audio2: {
    type: String,
  },
  des3: {
    type: String,
  },
  audio3: {
    type: String,
  },
  des4: {
    type: String,
  },
  audio4: {
    type: String,
  },
  des5: {
    type: String,
  },
  audio5: {
    type: String,
  },
  des6: {
    type: String,
  },
  audio6: {
    type: String,
  },
  des7: {
    type: String,
  },
  audio7: {
    type: String,
  },
  des8: {
    type: String,
  },
  audio8: {
    type: String,
  },
  des9: {
    type: String,
  },
  audio9: {
    type: String,
  },
  des10: {
    type: String,
  },
  audio10: {
    type: String,
  },
  des11: {
    type: String,
  },
  audio11: {
    type: String,
  },
  des12: {
    type: String,
  },
  audio12: {
    type: String,
  },
  des13: {
    type: String,
  },
  audio13: {
    type: String,
  },
  des14: {
    type: String,
  },
  audio14: {
    type: String,
  },
  des15: {
    type: String,
  },
  audio15: {
    type: String,
  },
  des16: {
    type: String,
  },
  audio16: {
    type: String,
  },
  des17: {
    type: String,
  },
  audio17: {
    type: String,
  },
  des18: {
    type: String,
  },
  audio18: {
    type: String,
  },
  des19: {
    type: String,
  },
  audio19: {
    type: String,
  },
  des20: {
    type: String,
  },
  audio20: {
    type: String,
  },
  des21: {
    type: String,
  },
  audio21: {
    type: String,
  },
  des22: {
    type: String,
  },
  audio22: {
    type: String,
  },
  des23: {
    type: String,
  },
  audio23: {
    type: String,
  },
  des24: {
    type: String,
  },
  audio24: {
    type: String,
  },
  des25: {
    type: String,
  },
  audio25: {
    type: String,
  },
  des26: {
    type: String,
  },
  audio26: {
    type: String,
  },
  des27: {
    type: String,
  },
  audio27: {
    type: String,
  },
  des28: {
    type: String,
  },
  audio28: {
    type: String,
  },
  des29: {
    type: String,
  },
  audio29: {
    type: String,
  },
  des30: {
    type: String,
  },
  audio30: {
    type: String,
  },
  des31: {
    type: String,
  },
  audio31: {
    type: String,
  },
  des32: {
    type: String,
  },
  audio32: {
    type: String,
  },
  des33: {
    type: String,
  },
  audio33: {
    type: String,
  },
  des34: {
    type: String,
  },
  audio34: {
    type: String,
  },
  des35: {
    type: String,
  },
  audio35: {
    type: String,
  },
  des36: {
    type: String,
  },
  audio36: {
    type: String,
  },
  des37: {
    type: String,
  },
  audio37: {
    type: String,
  },
  des38: {
    type: String,
  },
  audio38: {
    type: String,
  },
  des39: {
    type: String,
  },
  audio39: {
    type: String,
  },
  des40: {
    type: String,
  },
  audio40: {
    type: String,
  },
  des41: {
    type: String,
  },
  audio41: {
    type: String,
  },
  des42: {
    type: String,
  },
  audio42: {
    type: String,
  }
=======
const mongoose = require('mongoose');

const srojectSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    des1: { type: String },
    audio1: { type: String },
    des2: { type: String },
    audio2: { type: String },
    des3: { type: String },
    audio3: { type: String },
    des4: { type: String },
    audio4: { type: String },
    des5: { type: String },
    audio5: { type: String },
    des6: { type: String },
    audio6: { type: String },
    des7: { type: String },
    audio7: { type: String },
    des8: { type: String },
    audio8: { type: String },
    des9: { type: String },
    audio9: { type: String },
    des10: { type: String },
    audio10: { type: String },
    des11: { type: String },
    audio11: { type: String },
    des12: { type: String },
    audio12: { type: String },
    des13: { type: String },
    audio13: { type: String },
    des14: { type: String },
    audio14: { type: String },
    des15: { type: String },
    audio15: { type: String },
    des16: { type: String },
    audio16: { type: String },
    des17: { type: String },
    audio17: { type: String },
    des18: { type: String },
    audio18: { type: String },
    des19: { type: String },
    audio19: { type: String },
    des20: { type: String },
    audio20: { type: String },
    des21: { type: String },
    audio21: { type: String },
    des22: { type: String },
    audio22: { type: String },
    des23: { type: String },
    audio23: { type: String },
    des24: { type: String },
    audio24: { type: String },
    des25: { type: String },
    audio25: { type: String },
    des26: { type: String },
    audio26: { type: String },
    des27: { type: String },
    audio27: { type: String },
    des28: { type: String },
    audio28: { type: String },
    des29: { type: String },
    audio29: { type: String },
    des30: { type: String },
    audio30: { type: String },
    des31: { type: String },
    audio31: { type: String },
    des32: { type: String },
    audio32: { type: String },
    des33: { type: String },
    audio33: { type: String },
    des34: { type: String },
    audio34: { type: String },
    des35: { type: String },
    audio35: { type: String },
    des36: { type: String },
    audio36: { type: String },
    des37: { type: String },
    audio37: { type: String },
    des38: { type: String },
    audio38: { type: String },
    des39: { type: String },
    audio39: { type: String },
    des40: { type: String },
    audio40: { type: String },
    des41: { type: String },
    audio41: { type: String },
    des42: { type: String },
    audio42: { type: String },
    des43: { type: String },
    audio43: { type: String },
    des44: { type: String },
    audio44: { type: String },
    des45: { type: String },
    audio45: { type: String }
>>>>>>> 4efac8b9e5599bca1030e313d80f983fe97a7460
});

const Sroject = mongoose.model("Sroject", srojectSchema);
module.exports = Sroject;