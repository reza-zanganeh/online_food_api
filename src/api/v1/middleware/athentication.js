const jwt = require("jsonwebtoken")
const projectConfig = require("../../../config/index")
const { Unauthorized, BadRequest } = require("../helpers/HttpResponse")
const { createError } = require("../helpers/Functions")
const { checkUserNeedToLoginAgain } = require("../services/redis")

module.exports.isAuthenticate = async (req, res, next) => {
  const token = req.headers?.accesstoken
  try {
    const user = jwt.verify(token, projectConfig.authentication.tokenKey)
    if (await checkUserNeedToLoginAgain(user.id))
      return next(
        createError(
          BadRequest(
            "کاربر گرامی لطفا از بازی خارج شوید و مجددا وارد بازی شوید"
          )
        )
      )
    req.user = user
    next()
  } catch (error) {
    next(createError(Unauthorized()))
  }
}
