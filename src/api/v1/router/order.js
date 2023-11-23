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

const orderRouter = express.Router()

orderRouter.get(
  "/admin",
  isAuthenticate,
  hasAccessToAdminOperation,
  getOrders.bind(null, 10)
)

orderRouter.post("add-to-cart", isAuthenticate)

module.exports.orderRouter = orderRouter
