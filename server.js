const express = require("express")
const mongoose = require("mongoose")

const postRoutes = require("./routes/postRoutes")

const app = express()
const PORT = 3000

// Middleware to read JSON body
app.use(express.json())

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/postDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err))

// Routes
app.use("/", postRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
