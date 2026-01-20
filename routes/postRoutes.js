const express = require("express")
const router = express.Router()
const Post = require("../models/Post")

// GET – display all posts
router.get("/getPosts", async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
})

// POST – add new post
router.post("/addPosts", async (req, res) => {
  const { title, content } = req.body

  const newPost = new Post({
    title,
    content
  })

  await newPost.save()

  res.json({ message: "Post added successfully" })
})

// DELETE – delete post by ID
router.delete("/delPosts/:id", async (req, res) => {
  const { id } = req.params

  await Post.findByIdAndDelete(id)

  res.json({ message: "Post deleted successfully" })
})

// PATCH – update post by ID
router.patch("/post/:id", async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body

  await Post.findByIdAndUpdate(id, {
    title,
    content
  })

  res.json({ message: "Post updated successfully" })
})

module.exports = router
