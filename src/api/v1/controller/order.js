const { PrismaClient } = require("@prisma/client")
const { Ok, BadRequest } = require("../helpers/HttpResponse")
const { createError } = require("../helpers/Functions")
const {
  internalServerErrorHandler,
  resposeHandler,
} = require("../helpers/responseHandler")
const {
  createPrismaQueryPool,
  addPrismaQueryToPool,
  prismaTransaction,
} = require("../helpers/prisma")
const { food, order, foodOrder } = new PrismaClient()

module.exports.getMyCart = async (req, res, next) => {
  try {
    const userId = +req.user.id
    const currentCart = await order.findFirst({
      where: {
        userId,
        Status: "InCart",
      },
      select: {
        id: true,
        TotalPrice: true,
        foods: {
          select: {
            count: true,
            food: {
              select: {
                id: true,
                name: true,
                price: true,
              },
            },
          },
        },
      },
    })
    if (currentCart)
      resposeHandler(res, currentCart, Ok({ operationName: "دریافت سبد خرید" }))
    else {
      const newCart = await order.create({
        data: {
          userId,
        },
      })
      resposeHandler(
        res,
        newCart,
        Ok({ operationName: "افزودن غذا به سبد خرید" })
      )
    }
  } catch (error) {
    console.log(error)
    internalServerErrorHandler(next, error)
  }
}

module.exports.getMyOrders = async (req, res, next) => {
  try {
    const userId = +req.user.id
    const myOrders = await order.findMany({
      where: { userId, Status: { not: "InCart" } },
    })
    resposeHandler(res, myOrders, Ok({ operationName: "خواندن سفارشات من" }))
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

module.exports.payOrderByUser = async (req, res, next) => {
  try {
    const userId = +req.user.id
    const userCart = await order.findFirst({
      where: {
        userId,
        Status: "InCart",
      },
    })

    if (!userCart)
      return next(createError(BadRequest("سبد خرید برای پرداخت وجود ندارد")))

    if (userCart.TotalPrice <= 0)
      return next(
        createError(
          BadRequest("هیچ غذایی در سبد خرید شما برای پرداخت وجود ندارد")
        )
      )

    const paidOrder = await order.update({
      where: { id: userCart.id },
      data: { Status: "Registered" },
    })

    resposeHandler(res, paidOrder, Ok({ operationName: "پرداخت" }))
  } catch (error) {
    console.log(error)
    internalServerErrorHandler(next, error)
  }
}

module.exports.addToCart = async (req, res, next) => {
  try {
    const addToCartPrismaPoolIndex = createPrismaQueryPool()
    const foodId = +req.body.foodId
    const userId = +req.user.id

    const selectedFood = req.food

    if (selectedFood.availableCount <= 0)
      return next(createError(BadRequest("غذا انتخابی شما موجود نمی باشد")))

    const currentCart = await order.findFirst({
      where: { user: { id: userId }, Status: "InCart" },
    })
    if (currentCart) {
      // check food exists or not
      const foodOrderRecord = await foodOrder.findFirst({
        where: { foodId, orderId: currentCart.id },
      })
      if (foodOrderRecord) {
        addPrismaQueryToPool(
          addToCartPrismaPoolIndex,
          foodOrder.update({
            where: {
              id: foodOrderRecord.id,
            },
            data: { count: foodOrderRecord.count + 1 },
          })
        )
        addPrismaQueryToPool(
          addToCartPrismaPoolIndex,
          order.update({
            where: { id: currentCart.id },
            data: {
              TotalPrice: currentCart.TotalPrice + selectedFood.price,
            },
          })
        )
      } else
        addPrismaQueryToPool(
          addToCartPrismaPoolIndex,
          order.update({
            where: { id: currentCart.id },
            data: {
              TotalPrice: currentCart.TotalPrice + selectedFood.price,
              foods: { create: { foodId } },
            },
          })
        )
    } else {
      addPrismaQueryToPool(
        addToCartPrismaPoolIndex,
        (newCart = await order.create({
          data: {
            userId,
            foods: { create: { foodId } },
            TotalPrice: selectedFood.price,
          },
        }))
      )
    }

    addPrismaQueryToPool(
      addToCartPrismaPoolIndex,
      food.update({
        where: { id: foodId },
        data: { availableCount: selectedFood.availableCount - 1 },
      })
    )
    const { data: response } = await prismaTransaction(addToCartPrismaPoolIndex)
    resposeHandler(
      res,
      response,
      Ok({ operationName: "افزودن غذا به سبد خرید" })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

module.exports.removeFromCart = async (req, res, next) => {
  try {
    const foodId = +req.body.foodId
    const userId = +req.user.id

    const currentCart = await order.findFirst({
      where: { userId, Status: "InCart" },
    })
    if (!currentCart)
      return next(
        createError(BadRequest("هیچ غذایی در سبد خرید شما وجود ندارد"))
      )
    const foodOrderRecord = await foodOrder.findFirst({
      where: {
        foodId,
        orderId: currentCart.id,
      },
    })

    const selectedFood = req.food
    if (!foodOrderRecord)
      return next(createError(BadRequest("این غذا در سبد خرید شما وجود ندارد")))

    const removeFromCartPoolIndex = createPrismaQueryPool()

    if (foodOrderRecord.count > 1) {
      addPrismaQueryToPool(
        removeFromCartPoolIndex,
        foodOrder.update({
          where: {
            id: foodOrderRecord.id,
          },
          data: { count: foodOrderRecord.count - 1 },
        })
      )
    } else {
      addPrismaQueryToPool(
        removeFromCartPoolIndex,
        foodOrder.delete({ where: { id: foodOrderRecord.id } })
      )
    }

    addPrismaQueryToPool(
      removeFromCartPoolIndex,
      order.update({
        where: { id: currentCart.id },
        data: {
          TotalPrice: currentCart.TotalPrice - selectedFood.price,
        },
      })
    )

    addPrismaQueryToPool(
      removeFromCartPoolIndex,
      food.update({
        where: { id: foodId },
        data: {
          availableCount: selectedFood.availableCount + 1,
        },
      })
    )

    const response = await prismaTransaction(removeFromCartPoolIndex)
    resposeHandler(res, response, Ok({ operationName: "حذف غذا از سبد خرید" }))
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

module.exports.approveOrderByAdmin = async (req, res, next) => {
  try {
    const orderId = +req.order.id
    const orderStatus = req.order.Status
    if (orderStatus !== "Registered")
      return next(
        createError(
          BadRequest(
            "این سفارش برای تایید توسط ادمین نیاز به ثبت ( پرداخت )  کاربر دارد"
          )
        )
      )
    await order.update({ where: { id: orderId }, data: { Status: "Approved" } })
    resposeHandler(
      res,
      {},
      Ok({ operationName: "تایید سفارش برای ارسال با موفقیت انجام شد" })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}
