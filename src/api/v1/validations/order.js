const { checkExistsObjectWithIdInDb } = require("../helpers/inputValidation")
const { modelName } = require("../../../config/Constant")
const { foodModelName, orderModelName } = modelName
module.exports.addOrRemoveToCartSV = {
  foodId: checkExistsObjectWithIdInDb(foodModelName, "body", true, {
    id: true,
    price: true,
    availableCount: true,
  }),
}

module.exports.aproveOrderByAmin = {
  orderId: checkExistsObjectWithIdInDb(orderModelName, "body", true, {
    id: true,
    Status: true,
  }),
}
