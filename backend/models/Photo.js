const mongoose = require("mongoose")
const {Schema} = mongoose

const commentSchema = new Schema({
    comment: String,
    userName: String,
    userImage: String,
    userId: mongoose.ObjectId
}, {
    timestamps: true
})

const photoSchema = new Schema({
    image: String,
    title: String,
    likes: Array,
    comments: [commentSchema],
    userId: mongoose.ObjectId,
    userName: String,
}, {
    timestamps: true
})

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo