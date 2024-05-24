// connection.js
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
    _id: {
        type: String,
        required: true
    },
    name: { type: String },
    fs: { type: String },
    ss: { type: String },
    heading: { type: String },
    subheading: { type: String },
    sutar: { type: String },
    arth: { type: String },
    description: { type: String },
    mediname: { type: String },
});

const Project = mongoose.model("Project", schema);
module.exports = Project;
