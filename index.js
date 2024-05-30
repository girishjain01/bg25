const express = require("express");
const cors = require('cors');
require('dotenv').config();
const Project = require("./dbconn/connection");
const Sroject = require("./dbconn/srojectconnection");
const srojectRoutes = require("./routes/srojectRoutes");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use("/sroject", srojectRoutes);

async function addDocument(Model, req, res) {
    const document = new Model(req.body);
    try {
        const savedDocument = await document.save();
        res.status(201).send(savedDocument);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateDocument(Model, req, res) {
    try {
        const updatedDocument = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedDocument) return res.status(404).send('प्रोजेक्ट नहीं मिला');
        res.send(updatedDocument);
    } catch (error) {
        res.status(500).send(error);
    }
}

// New function to delete a document by ID
async function deleteDocument(Model, req, res) {
    try {
        const deletedDocument = await Model.findByIdAndDelete(req.params.id);
        if (!deletedDocument) return res.status(404).send('प्रोजेक्ट नहीं मिला');
        res.send(deletedDocument);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Routes for Project
app.post("/project", (req, res) => addDocument(Project, req, res));
app.get("/project", async (req, res) => {
    try {
        const projects = await Project.find({});
        res.send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get("/project/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).send('प्रोजेक्ट नहीं मिला');
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.put("/project/:id", (req, res) => updateDocument(Project, req, res));
app.delete("/project/:id", (req, res) => deleteDocument(Project, req, res)); // New delete route

// Routes for Sroject
app.post("/sroject", (req, res) => addDocument(Sroject, req, res));
app.get("/sroject/:id", async (req, res) => {
    try {
        const sroject = await Sroject.findById(req.params.id);
        if (!sroject) return res.status(404).send('प्रोजेक्ट नहीं मिला');
        res.send(sroject);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.put("/sroject/:id", (req, res) => updateDocument(Sroject, req, res));
app.delete("/sroject/:id", (req, res) => deleteDocument(Sroject, req, res)); // New delete route

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
