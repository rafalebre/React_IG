const express = require("express")
const router = express.Router()

// Controller
const {insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, unlikePhoto, commentPhoto, deleteComment, searchPhotos} = require("../controllers/PhotoController")

// Middlewares
const {photoInsertValidation, photoUpdateValidation, commentValidation} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const {imageUpload} = require("../middlewares/imageUpload")

// Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhotos)
router.get("/search", authGuard, searchPhotos)
router.get("/:id", authGuard, getPhotoById)
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put("/like/:id", authGuard, likePhoto)
router.put("/unlike/:id", authGuard, unlikePhoto)
router.put("/comment/:id", authGuard, commentValidation(), validate, commentPhoto)
router.delete("/comment/:id/:commentId", authGuard, deleteComment)



module.exports = router;