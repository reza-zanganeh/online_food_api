const express = require("express")
const { checkSchema } = require("express-validator")
const { expressValidationResultHandler } = require("../helpers/responseHandler")
const {
  login,
  register,
  getUserInformation,
} = require("../controller/authentication")

const { loginVS, registerVS } = require("../validations/authentication")
const { authentication } = require("../../../config/common")
const { isAuthenticate } = require("../middleware/athentication")

const authenticationRouter = express.Router()

authenticationRouter.post(
  "/register",
  checkSchema(registerVS),
  expressValidationResultHandler,
  register
)

authenticationRouter.post(
  "/login",
  checkSchema(loginVS),
  expressValidationResultHandler,
  login
)

authenticationRouter.get("/", isAuthenticate, getUserInformation)

module.exports.authenticationRouter = authenticationRouter
