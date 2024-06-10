const express = require("express");
const router = express.Router();

// Import the controller
const { createComment } = require("../controllers/commentcontroller");
const {postController,getAllPosts} =require("../controllers/postcontroller");



// Mapping
router.post("/comment", createComment);
router.post("/post",postController);
router.get("/getpost",getAllPosts);

// Export the router
module.exports = router;