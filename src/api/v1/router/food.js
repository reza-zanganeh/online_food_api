const express = require("express")
const path = require("path")
const { checkSchema } = require("express-validator")
const { expressValidationResultHandler } = require("../helpers/responseHandler")
const { modelName } = require("../../../config/Constant")
const { foodModelName } = modelName
const { isAuthenticate } = require("../middleware/athentication")
const { updateConrtoller: updateFood, deleteController: deleteFood } =
  require("../helpers/controllerCRUDoperation")(foodModelName)

const { createFood, getFoods } = require("../controller/food")

const {
  createFoodSV,
  deleteFoodSV,
  updateAvailableCountSV,
  updatePriceSV,
} = require("../validations/food")

const { hasAccessToAdminOperation } = require("../middleware/accessControl")

const foodRouter = express.Router()

foodRouter.get("/", getFoods)

foodRouter.post(
  "/admin",
  isAuthenticate,
  hasAccessToAdminOperation,
  checkSchema(createFoodSV),
  expressValidationResultHandler,
  createFood
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
