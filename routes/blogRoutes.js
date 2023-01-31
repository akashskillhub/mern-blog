const { getAllBlogs, addBlog, removeBlog } = require("../controllers/blogController")

const router = require("express").Router()

// GET  http://localhost:5000/blogs/
// POST http://localhost:5000/blogs/add
router
    .get("/", getAllBlogs)
    .post("/add", addBlog)
    .delete("/:blogId", removeBlog)
module.exports = router
