const express = require("express");
const Sroject = require("../models/Sroject");
const addLinksToParagraph = require("../utils/addLinksToParagraph");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const sroject = await Sroject.findById(req.params.id);
    if (!sroject) return res.status(404).send('प्रोजेक्ट नहीं मिला');

    // Add links to all description fields
    Object.keys(sroject._doc).forEach(key => {
      if (key.startsWith('des')) {
        sroject[key] = addLinksToParagraph(sroject[key]);
      }
    });

    res.send(sroject);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
