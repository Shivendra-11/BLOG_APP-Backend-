const Post = require("../models/postmodel");
const Comment = require("../models/commentmodel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    // create the cpomment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new object  into the  databse
    const savedComment = await comment.save();

    // i have to change the post model too so thst comment is reflect on it

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();
    //populate the comment array with the comment documents.

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "error while creating the comment",
    });
  }
};
