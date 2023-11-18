const appVersion = "v1"
const { errorHandler, notFoundResponse } = require("../helpers/responseHandler")
const { isAuthenticate } = require("../middleware/athentication")
const {
  hasAccessToAdminOperation,
} = require("../middleware/accessControl/index")
//#region import router

//#endregion import router

module.exports.regiserRoutes = (app) => {
  //#region add routes
  //#endregion
  app.use("*", notFoundResponse)
  app.use(errorHandler)
}
