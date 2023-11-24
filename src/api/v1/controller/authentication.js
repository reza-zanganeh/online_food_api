const {
  createError,
  createAuthenticationToken,
} = require("../helpers/Functions")
const {
  resposeHandler,
  internalServerErrorHandler,
} = require("../helpers/responseHandler")
const { BadRequest, Created, Ok } = require("../helpers/HttpResponse")
const {
  compareUserPassword,
  hashUserPassword,
} = require("../helpers/Functions")
const { PrismaClient } = require("@prisma/client")
const { user } = new PrismaClient()
const projectConfig = require("../../../config/index")

module.exports.register = async (req, res, next) => {
  try {
    const { username, fullname, password, confirmPassword, address } = req.body

    if (password != confirmPassword)
      return next(
        createError(
          BadRequest("رمز عبور وارد شده با تایید رمز عبور یکسان نمی باشد")
        )
      )

    const isUserExists = await user.findFirst({
      select: { id: true },
      where: { username },
    })
    if (isUserExists?.id)
      return next(
        createError(
          BadRequest(
            "این اطلاعات قبلا ثبت شده است لطفا در صورتی که رمز عبور خود را فراموش کرده اید از قسمت فراموشی رمز عبور ان را بازیابی کنید"
          )
        )
      )

    const hashedUserPassword = await hashUserPassword(password)
    const newUser = await user.create({
      data: {
        username,
        fullname,
        password: hashedUserPassword,
        role: "Normal",
        address,
      },
      select: { username: true, fullname: true, role: true, address: true },
    })

    resposeHandler(res, newUser, Created("کاربر"))
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const userInformtaion = await user.findUnique({ where: { username } })

    if (!userInformtaion)
      return next(createError(BadRequest("حساب کاربری شما یافت نشد")))

    const hashOfCorrectPasswordInDB = userInformtaion.password

    const resultOfComparePassword = await compareUserPassword(
      password,
      hashOfCorrectPasswordInDB
    )

    if (!resultOfComparePassword)
      return next(createError(BadRequest("رمز عبور وارد شده نامعتبر است")))

    const token = createAuthenticationToken({
      id: userInformtaion.id,
      role: userInformtaion.role,
    })

    resposeHandler(
      res,
      {
        token,
        expiresTimeInMilisecond:
          projectConfig.authentication
            .authenticationTokenExpiresTimeInMilisecond,
      },
      Ok({ operationName: "ورود" })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}
