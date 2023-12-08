const { checkExistsObjectWithIdInDb } = require("../helpers/inputValidation")
const { modelName } = require("../../../config/Constant")
const { foodModelName } = modelName
module.exports.uploadFoodImageSV = {
  foodId: checkExistsObjectWithIdInDb(foodModelName, "body", false),
}
