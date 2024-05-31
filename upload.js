// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const Sroject = require('./models/Sroject'); // Adjust the path as necessary

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid conflicts
//   }
// });

// const upload = multer({ storage });

// // Endpoint to upload audio files
// router.post('/upload', upload.single('audio'), async (req, res) => {
//   try {
//     const { descriptionId, field } = req.body;
//     const audioFile = req.file.path;

//     // Find the Sroject and update the corresponding audio field
//     const sroject = await Sroject.findById(descriptionId);
//     if (sroject) {
//       sroject[field] = audioFile;
//       await sroject.save();
//       res.status(200).json({ message: 'Audio file uploaded successfully', sroject });
//     } else {
//       res.status(404).json({ message: 'Sroject not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// module.exports = router;