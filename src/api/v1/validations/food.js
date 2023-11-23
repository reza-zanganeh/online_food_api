const {
  required,
  checkExistsObjectWithIdInDb,
} = require("../helpers/inputValidation")
const { modelName } = require("../../../config/Constant")
const { foodModelName } = modelName
module.exports.createFoodSV = {
  name: required("نام غذا", "body"),
  price: required("قیمت غذا", "body"),
  availableCount: required("تعداد موجودی غذا", "body"),
  description: required("توضیحات مربوط به غذا", "body"),
}
module.exports.deleteFoodSV = {
  id: checkExistsObjectWithIdInDb(foodModelName, "params", false),
}
module.exports.updatePriceSV = {
  id: checkExistsObjectWithIdInDb(foodModelName, "params", false),
  price: required("قیمت جدید کالا", "body"),
}

module.exports.updateAvailableCountSV = {
  id: checkExistsObjectWithIdInDb(foodModelName, "params", false),
  availableCount: required("موجودی جدید کالا", "body"),
}
