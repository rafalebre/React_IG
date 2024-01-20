const Photo = require("../models/Photo")

const mongoose = require("mongoose")
const User = require("../models/User")

// Insert a photo, with an user related to it
const insertPhoto = async(req, res) => {

    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)
 
    // Create a photo
    const newPhoto = await Photo.create({
        image, 
        title,
        userId: user._id,
        userName: user.name,
    })

    //If photo was create succesfully, return data
    if(!newPhoto) {

        res.status(422).json({
            errors: ["There's been an error, please try again later."]
        })
        return
    }


    res.status(201).json(newPhoto)
}

// Remove a photo from db
const deletePhoto = async(req, res) => {

    const {id} = req.params

    const reqUser = req.user

    try {
        const photo =  Photo.findById(mongoose.Types.ObjectId(id))

    // Check if photo exists
    if(!photo) {
        res.status(404).json({errors:["Picture not found."]})
        return
    }

    // Check if photo belongs to user
    if(!photo.userId.equals(reqUser._id)) {
        res.status(422).json({errors: ["There's been an error, please try again later"]})
    }

    await Photo.findByIdAndDelete(photo._id)

    res.status(200).json({id: photo._id, message: "Picture successfully deleted."})
    } catch (error) {
        res.status(404).json({errors:["Picture not found."]})
        return
    }

}

module.exports = {
    insertPhoto,
    deletePhoto
}