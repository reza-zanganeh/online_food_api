const { createError } = require("../helpers/Functions")
const { Ok, BadRequest } = require("../helpers/HttpResponse")
const {
  resposeHandler,
  internalServerErrorHandler,
} = require("../helpers/responseHandler")
const { PrismaClient } = require("@prisma/client")
const { foodImage } = new PrismaClient()
module.exports.uploadFoodImage = async (req, res, next) => {
  try {
    const foodId = +req.body.foodId

    if (!req.file) return next(createError(BadRequest("فایل ارسال نشده است")))

    const newImage = await foodImage.create({
      data: {
        foodId,
        url: req.file.path,
      },
    })

    resposeHandler(res, { newImage }, Ok({ operationName: "اپلود تصویر غذا" }))
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

module.exports.uploadDefaultFoodImage = async (req, res, next) => {
  try {
    if (!req.file) return next(createError(BadRequest("فایل ارسال نشده است")))

    const defaultImage = await foodImage.create({
      data: {
        isDefaultImage: true,
        url: req.file.path,
      },
    })

    resposeHandler(
      res,
      defaultImage,
      Ok({ operationName: "اپلود تصویر دیفالت غذا" })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}
