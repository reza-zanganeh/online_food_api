const express = require("express")
const compression = require("compression")
const cors = require("cors")
const projectConfig = require("../../config/index")
const { regiserRoutes } = require("./router/index")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors(projectConfig.server.httpServer.cors))
regiserRoutes(app)

const { internalServerErrorHandler } = require("./helpers/responseHandler")

const PORT = projectConfig.server.httpServer.port

app.listen(PORT, async () => {
  try {
    console.log(`server is running on ${PORT}`)
  } catch (error) {
    internalServerErrorHandler(null, error)
  }
})

// comment
// picture to food
// get food details by id
