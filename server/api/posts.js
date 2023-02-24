const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../model/Post');

//get
router.get("/", async (req,res)=>{
    try{
        const posts = await Post.find();
        return res.json(posts)
    }catch{
        return res.status(400).json({msg:"Server error"})
    }
})

//post
router.post("/", async (req, res) => {
    try {
      const { title, body, author } = req.body;
      const post = new Post({
        title,
        body,
        author,
      });
  
      await post.save();
      return res.json({ post, msg: "Post added succesfully!" });
    } catch {
      return res.status(400).json({ msg: "server error" });
    }
  });

module.exports = router

