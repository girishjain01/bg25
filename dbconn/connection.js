const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;