const { PrismaClient } = require("@prisma/client")
const { Ok } = require("../helpers/HttpResponse")
const { food, order, foodOrder } = new PrismaClient()

module.exports.getMyCart = async (req, res, next) => {}

module.exports.getMyOrders = async (req, res, next) => {}

module.exports.addToCart = async (req, res, next) => {
  try {
    const foodId = +req.body.foodId
    const userId = +req.user.id

    const selectedFood = await food.findUnique({
      where: {
        id: foodId,
      },
    })

    if (selectedFood.availableCount <= 0)
      return next(createError(BadRequest("غذا انتخابی شما موجود نمی باشد")))

    const currentCart = await order.findUnique({
      where: { user: { id: userId }, Status: "InCart" },
    })
    let newCart
    if (currentCart) {
      // check food exists or not
      const foodOrderRecord = await foodOrder.findUnique({
        where: { foodId, orderId: currentCart.id },
      })
      if (foodOrderRecord) {
        return next(
          createError(
            BadRequest(
              "این کالا در سبد خرید شما وجود دارد لطفا تعداد انرا افزایش دهید"
            )
          )
        )
      } else
        newCart = await order.update({
          where: { id: currentCart.id },
          data: {
            TotalPrice: currentCart.TotalPrice + selectedFood.TotalPrice,
            foods: { connect: { id: selectedFood.id } },
          },
        })
    } else {
      newCart = await order.create({
        data: {
          user: { connect: { id: userId } },
          foods: { connect: { id: selectedFood.id } },
          TotalPrice: selectedFood.price,
        },
      })
    }

    resposeHandler(
      res,
      newCart,
      Ok({ operationName: "افزودن غذا به سبد خرید" })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}
