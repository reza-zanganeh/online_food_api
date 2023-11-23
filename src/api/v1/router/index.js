const appVersion = "v1"
const { errorHandler, notFoundResponse } = require("../helpers/responseHandler")
const { isAuthenticate } = require("../middleware/athentication")
const {
  hasAccessToAdminOperation,
} = require("../middleware/accessControl/index")
//#region import router
const { authenticationRouter } = require("./authentication")
const { foodRouter } = require("./food")
const { orderRouter } = require("./order")
//#endregion import router

module.exports.regiserRoutes = (app) => {
  //#region add routes
  app.use(`/api/${appVersion}/authentication`, authenticationRouter)
  app.use(`/api/${appVersion}/food`, foodRouter)
  app.use(`/api/${appVersion}/order`, orderRouter)
  //#endregion
  app.use("*", notFoundResponse)
  app.use(errorHandler)
}
