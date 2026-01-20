const mongoose = require("mongoose")

// Schema definition
const postSchema = mongoose.Schema({
  title: String,
  content: String
})

// Model creation
const Post = mongoose.model("Post", postSchema)

module.exports = Post
