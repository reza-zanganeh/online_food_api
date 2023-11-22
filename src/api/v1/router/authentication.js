const express = require("express")
const { checkSchema } = require("express-validator")
const { expressValidationResultHandler } = require("../helpers/responseHandler")
const { login, register } = require("../controller/authentication")

const { loginVS, registerVS } = require("../validations/authentication")

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

module.exports.authenticationRouter = authenticationRouter
