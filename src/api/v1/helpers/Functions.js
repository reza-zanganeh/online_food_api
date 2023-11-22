const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const projectConfig = require("../../../config/index")

module.exports.createRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports.headsOrTails = (moreChance) => {
  const lessChance = moreChance === 2 ? 1 : 2
  const randomNumber = Math.floor(Math.random() * (100 - 0 + 1))
  if (randomNumber < 70) return moreChance
  else return lessChance
}

module.exports.createError = ({ statusCode, message }) => {
  const error = new Error()
  error.statusCode = statusCode
  error.message = message
  return error
}

module.exports.createOtpCodeToken = (phonenumber, isUserExists) => {
  const token = jwt.sign(
    { phonenumber, isUserExists },
    projectConfig.otpCode.tokenKey,
    {
      expiresIn: `${projectConfig.authentication.applicationActiveTimeInMinutes}m`,
    }
  )
  return token
}

module.exports.createCaptchaToken = (text) => {
  const token = jwt.sign({ text }, projectConfig.captcha.tokenKey, {
    expiresIn: `${projectConfig.authentication.applicationActiveTimeInMinutes}m`,
  })
  return token
}

module.exports.createAuthenticationToken = (data) => {
  const token = jwt.sign(data, projectConfig.authentication.tokenKey, {
    expiresIn: `${projectConfig.authentication.authenticationTokenExpiresTimeInMinute}m`,
  })
  return token
}

module.exports.convertSecondToMinAndScond = (time) => {
  const minute = Math.floor(time / 60)
  const second = time - minute * 60
  return {
    minute,
    second,
  }
}

module.exports.sumOfArrayElements = (numbers) => {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
}

module.exports.hashUserPassword = async (password) => {
  try {
    const hashedPass = await bcrypt.hash(password, 10)
    return hashedPass
  } catch (error) {
    throw error
  }
}

module.exports.compareUserPassword = async (passOne, passTwo) => {
  try {
    const resultOfcomparePassword = await bcrypt.compare(passOne, passTwo)
    return resultOfcomparePassword
  } catch (error) {
    throw error
  }
}
