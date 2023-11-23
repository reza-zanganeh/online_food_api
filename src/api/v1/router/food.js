const express = require("express")
const { checkSchema } = require("express-validator")
const { expressValidationResultHandler } = require("../helpers/responseHandler")
const { modelName } = require("../../../config/Constant")
const { foodModelName } = modelName
const { isAuthenticate } = require("../middleware/athentication")

const {
  createController: createFood,
  readRecordsSortedByDateWithPaginationController: getFoods,
  updateConrtoller: updateFood,
  deleteController: deleteFood,
  readWithIdController: getFoodById,
} = require("../helpers/controllerCRUDoperation")(foodModelName)

const {
  createFoodSV,
  deleteFoodSV,
  updateAvailableCountSV,
  updatePriceSV,
} = require("../validations/food")

const { hasAccessToAdminOperation } = require("../middleware/accessControl")

const foodRouter = express.Router()

foodRouter.get("/", getFoods.bind(null, 10))

foodRouter.post(
  "/admin",
  isAuthenticate,
  hasAccessToAdminOperation,
  checkSchema(createFoodSV),
  expressValidationResultHandler,
  createFood.bind(null, ["name", "price", "availableCount", "description"])
)

foodRouter.delete(
  "/admin/:id",
  isAuthenticate,
  hasAccessToAdminOperation,
  checkSchema(deleteFoodSV),
  expressValidationResultHandler,
  deleteFood
)

foodRouter.patch(
  "/admin/price/:id",
  isAuthenticate,
  hasAccessToAdminOperation,
  checkSchema(updatePriceSV),
  expressValidationResultHandler,
  updateFood.bind(null, ["price"])
)

foodRouter.patch(
  "/admin/available-count/:id",
  isAuthenticate,
  hasAccessToAdminOperation,
  checkSchema(updateAvailableCountSV),
  expressValidationResultHandler,
  updateFood.bind(null, ["availableCount"])
)

module.exports.foodRouter = foodRouter
