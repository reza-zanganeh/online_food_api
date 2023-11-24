const { password, required } = require("../helpers/inputValidation")

module.exports.registerVS = {
  username: required("نام کاربری", "body"),
  fullname: required("نام و نام خانوادگی", "body"),
  password: password("body"),
  confirmPassword: password("body"),
  address: required("ادرس", "body"),
}

module.exports.loginVS = {
  username: required("نام کاربری", "body"),
  password: password("body"),
}
