const express = require("express");
const multer = require("multer");
const Post = require("../models/Post");

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Add a new post
router.post("/:category", upload.single("image"), async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const category = req.params.category;

    const newPost = new Post({
      title,
      description,
      price,
      category,
      image: req.file.path,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get posts by category
router.get("/:category", async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
