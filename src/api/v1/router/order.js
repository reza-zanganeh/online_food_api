const express = require("express")
const { checkSchema } = require("express-validator")
const { expressValidationResultHandler } = require("../helpers/responseHandler")
const { modelName } = require("../../../config/Constant")
const { orderModelName } = modelName
const { isAuthenticate } = require("../middleware/athentication")
const { hasAccessToAdminOperation } = require("../middleware/accessControl")

const {
  readRecordsSortedByDateWithPaginationController: getOrders,
  updateConrtoller: updateFood,
} = require("../helpers/controllerCRUDoperation")(orderModelName)

const {
  getMyOrders,
  addToCart,
  removeFromCart,
  getMyCart,
  payOrderByUser,
  approveOrderByAdmin,
} = require("../controller/order")

const {
  addOrRemoveToCartSV,
  aproveOrderByAmin,
} = require("../validations/order")

const orderRouter = express.Router()

// admin
orderRouter.get(
  "/admin",
  isAuthenticate,
  hasAccessToAdminOperation,
  getOrders.bind(null, 10)
)

orderRouter.post(
  "/admin/approve-order",
  isAuthenticate,
  hasAccessToAdminOperation,
  checkSchema(aproveOrderByAmin),
  expressValidationResultHandler,
  approveOrderByAdmin
)
// user
orderRouter.get("/my-order", isAuthenticate, getMyOrders)

orderRouter.get("/my-cart", isAuthenticate, getMyCart)

orderRouter.post("/pay-order", isAuthenticate, payOrderByUser)

orderRouter.post(
  "/add-to-cart",
  isAuthenticate,
  checkSchema(addOrRemoveToCartSV),
  expressValidationResultHandler,
  addToCart
)

orderRouter.post(
  "/remove-from-cart",
  isAuthenticate,
  checkSchema(addOrRemoveToCartSV),
  expressValidationResultHandler,
  removeFromCart
)

module.exports.orderRouter = orderRouter
