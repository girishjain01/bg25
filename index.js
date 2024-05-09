const express = require("express");
const Project = require("./dbconn/connection");
const c = require("./dbconn/srojectconnection");
const app = express();
const cors = require('cors');
const Sroject = require("./dbconn/srojectconnection");
app.use(cors());
app.use(express.json()); // For parsing application/json
const port = 3000;
// POST route to add a new project
app.post("/", async (req, res) => {
    const myProject = new Project(req.body);
    try {
        const dataSave = await myProject.save();
        res.status(201).send(dataSave);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.post("/sroject", async (req, res) => {
    const mySroject = new Sroject(req.body);
    try {
        const dataSave = await mySroject.save();
        res.status(201).send(dataSave);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.put("/project/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).send('प्रोजेक्ट नहीं मिला');
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.put("/sroject/:id", async (req, res) => {
    try {
        const sroject = await Sroject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sroject) {
            return res.status(404).send('प्रोजेक्ट नहीं मिला');
        }
        res.send(sroject);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get("/project/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send('प्रोजेक्ट नहीं मिला');
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get("/sroject/:id", async (req, res) => {
    try {
        const project = await Sroject.findById(req.params.id);
        if (!project) {
            return res.status(404).send('प्रोजेक्ट नहीं मिला');
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get("/sroject", async (req, res) => {
    try {
        const Srojec = await Sroject.find({});
        res.status(200).send(Srojec);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
});
// GET route to fetch all projects
// Express सर्वर कोड
app.get("/project", async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
