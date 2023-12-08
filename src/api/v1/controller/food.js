const { PrismaClient } = require("@prisma/client")
const {
  resposeHandler,
  internalServerErrorHandler,
} = require("../helpers/responseHandler")
const { Ok } = require("../helpers/HttpResponse")
const { food, foodImage } = new PrismaClient()
module.exports.createFood = async (req, res, next) => {
  try {
    const { name, price, availableCount, description } = req.body
    const newFood = await food.create({
      data: { name, price, availableCount, description },
    })

    resposeHandler(
      res,
      { foodId: newFood.id },
      Ok({ operationName: "افزودن غذا" })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

module.exports.getFoods = async (req, res, next) => {
  try {
    const foods = await food.findMany({
      select: {
        id: true,
        name: true,
        availableCount: true,
        description: true,
        price: true,
        image: {
          select: { url: true },
        },
        comments: {
          select: {
            user: { select: { fullname: true } },
            content: true,
            date: true,
          },
        },
        _count: {
          select: {
            likes: true,
            disLikes: true,
          },
        },
      },
    })

    const defaultImageUrl = await foodImage.findFirst({
      where: { isDefaultImage: true },
    })

    resposeHandler(
      res,
      { foods, defaultImageUrl },
      Ok({ operationName: "افزودن غذا" })
    )
  } catch (error) {
    console.log(error)
    internalServerErrorHandler(next, error)
  }
}
