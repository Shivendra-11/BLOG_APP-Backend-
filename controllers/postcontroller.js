const post=require("../models/postmodel");
 
exports.postController=async (req,res)=>{
    try{
          
         const {title,body}=req.body;

        //  create the object of the title and body and save it into the db
        const Post=new post({
            title,body
        });

       const postSaved= await Post.save();
   
         res.json({
            post : postSaved
    })   


    }catch(error){
        res,status(500).json({
            error:"error while creatimg the post"
        })
    }

    
}

// to fetch all the post


exports.getAllPosts = async (req, res) => {
    try {
      const allPosts = await post.find().populate("comments").exec();
  
      if (!allPosts) {
        return res.status(404).json({
          error: "No posts found",
        });
      }
  
      res.json({
        allPosts,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred while fetching posts",
        details: error.message, // Optional: include error details for debugging
      });
    }
  };