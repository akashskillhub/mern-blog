const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide title"]
    },
    desc: {
        type: String,
        required: [true, "Please Provide Description"]
    },
    image: {
        type: String,
        required: [true, "Please Provide Image Url"]
    },
    publish: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model("blog", blogSchema)