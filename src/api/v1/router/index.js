const appVersion = "v1"
const { errorHandler, notFoundResponse } = require("../helpers/responseHandler")
const { isAuthenticate } = require("../middleware/athentication")
const {
  hasAccessToAdminOperation,
} = require("../middleware/accessControl/index")
//#region import router
const { authenticationRouter } = require("./authentication")
//#endregion import router

module.exports.regiserRoutes = (app) => {
  //#region add routes
  app.use(`/api/${appVersion}/authentication`, authenticationRouter)
  //#endregion
  app.use("*", notFoundResponse)
  app.use(errorHandler)
}
