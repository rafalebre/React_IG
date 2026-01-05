const Photo = require("../models/Photo");
const User = require("../models/User")
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const mongoose = require("mongoose");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const reqUser = req.user;

  try {
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'react_ig/photos'
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    const user = await User.findById(reqUser._id);

    // Create photo with Cloudinary URL
    const newPhoto = await Photo.create({
      image: result.secure_url,
      title,
      userId: user._id,
      userName: user.name,
    });

    if (!newPhoto) {
      res.status(422).json({
        errors: ["There's been an error, please try again later."],
      });
      return;
    }

    res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Error uploading photo."] });
  }
};

// Remove a photo from the DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

  // Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Picture not found!"] });
    return;
  }

  // Check if photo belongs to user
  if (!photo.userId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["There's been an error, please try again later."] });
    return;
  }

  await Photo.findByIdAndDelete(photo._id);

  res
    .status(200)
    .json({ id: photo._id, message: "Picture successfully excluded." });
};

// Get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// Get user photos
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// Get photo by id
const getPhotoById = async (req, res) => {
  const { id } = req.params;

  const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

  // Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Picture not found!"] });
    return;
  }

  res.status(200).json(photo);
};

// Update a photo
const updatePhoto = async (req, res) => {

  const { id } = req.params
  const { title } = req.body

  const reqUser = req.user
  const photo = await Photo.findById(id)

  //Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Picture not found."] })
    return
  }

  // Check if photo belongs to user
  if (!photo.userId.equals(reqUser._id)) {
    res.status(422).json({ errors: ["There's been an error, please try again later."] })
    return
  }

  if (title) {
    photo.title = title
  }
  await photo.save()

  res.status(200).json({ photo, message: "Picture successfully updated." })

}

// Like functionality
const likePhoto = async (req, res) => {

  const { id } = req.params

  const reqUser = req.user

  const photo = await Photo.findById(id)

  //Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Picture not found."] })
    return
  }

  // Check if user already liked the photo
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: "You already liked this photo." })
    return
  }

  // Put user id in likes array
  photo.likes.push(reqUser._id)

  photo.save()

  res.status(200).json({ photoId: id, userId: reqUser._id, message: "You liked the picture." })
}

// Unlike functionality
const unlikePhoto = async (req, res) => {

  const { id } = req.params

  const reqUser = req.user

  const photo = await Photo.findById(id)

  //Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Picture not found."] })
    return
  }

  // Check if user has liked the photo
  if (!photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: "You haven't liked this photo." })
    return
  }

  // Remove user id from likes array
  photo.likes = photo.likes.filter((userId) => !userId.equals(reqUser._id))

  await photo.save()

  res.status(200).json({ photoId: id, userId: reqUser._id, message: "You unliked the picture." })
}

// Comment functionality
const commentPhoto = async (req, res) => {

  const { id } = req.params
  const { comment } = req.body

  const reqUser = req.user

  const user = await User.findById(reqUser._id)

  const photo = await Photo.findById(id)

  //Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Picture not found."] })
    return
  }

  // Add comment in the array of commnents
  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id
  }

  photo.comments.push(userComment)

  await photo.save()

  res.status(200).json({
    comment: userComment,
    message: "The comment was added successfully."
  })

}

// Delete comment functionality
const deleteComment = async (req, res) => {
  const { id, commentId } = req.params
  const reqUser = req.user

  try {
    const photo = await Photo.findById(id)

    // Check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Picture not found."] })
      return
    }

    // Find the comment
    const commentIndex = photo.comments.findIndex(
      (c) => c._id.toString() === commentId
    )

    if (commentIndex === -1) {
      res.status(404).json({ errors: ["Comment not found."] })
      return
    }

    const comment = photo.comments[commentIndex]

    // Check if user is comment owner OR photo owner
    if (
      !comment.userId.equals(reqUser._id) &&
      !photo.userId.equals(reqUser._id)
    ) {
      res.status(403).json({ errors: ["Access denied."] })
      return
    }

    // Remove comment
    photo.comments.splice(commentIndex, 1)
    await photo.save()

    res.status(200).json({
      photoId: id,
      commentId,
      message: "Comment deleted successfully."
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: ["Error deleting comment."] })
  }
}

// Seach photos by title
const searchPhotos = async(req, res) => {

  const {q} = req.query

  const photos = await Photo.find({title: new RegExp(q, "i")}).exec()

  res.status(200).json(photos);
}

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  unlikePhoto,
  commentPhoto,
  deleteComment,
  searchPhotos
};
