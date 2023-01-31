const Blog = require("./../models/BlogModel")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
exports.addBlog = async (req, res) => {
    try {
        console.log(req.body)
        await Blog.create(req.body)
        res.json({
            success: true,
            message: "Blog Created Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
// http://localhost:5000/blog/2131313131
exports.removeBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: "Blog Removed Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
exports.editBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndUpdate(blogId, req.body)
        res.json({
            success: true,
            message: "Blog Removed Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}