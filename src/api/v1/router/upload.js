const express = require("express")
const path = require("path")
const multer = require("multer")
const { checkSchema } = require("express-validator")
const { expressValidationResultHandler } = require("../helpers/responseHandler")

const { uploadFoodImageSV } = require("../validations/upload")

const {
  uploadFoodImage,
  uploadDefaultFoodImage,
} = require("../controller/upload")

const maxSize = 1 * 1000 * 1000

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "foodImages"))
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})
const uploadFoodImageMiddleware = multer({
  storage,
  limits: { fileSize: maxSize },
})

const uploadRouter = express.Router()

uploadRouter.post(
  "/food-image",
  uploadFoodImageMiddleware.single("foodImage"),
  checkSchema(uploadFoodImageSV),
  expressValidationResultHandler,
  uploadFoodImage
)

uploadRouter.post(
  "/default-food-image",
  uploadFoodImageMiddleware.single("defaultImage"),
  uploadDefaultFoodImage
)

module.exports.uploadRouter = uploadRouter
