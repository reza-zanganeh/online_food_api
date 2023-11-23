const { modelName } = require("../../../config/Constant")
const { createError } = require("./Functions")
const {
  resposeHandler,
  internalServerErrorHandler,
} = require("./responseHandler")
const { Created, Ok, BadRequest, emptyMesssage } = require("./HttpResponse")

const {
  create,
  readWithPaginationOrId,
  update,
  remove,
  readOne,
  readAll,
  readRecordsSortedByDateWithPagination,
} = require("./prisma")

const createController = async (MODELNAME, dataSchema, req, res, next) => {
  try {
    const data = {}
    dataSchema.forEach((item) => {
      if (isFinite(req.body[item])) data[item] = +req.body[item]
      else if (typeof req.body[item] === "string")
        data[item] = req.body[item].trim()
      else data[item] = req.body[item]
    })
    const newRecord = await create(MODELNAME.english, data)
    resposeHandler(res, newRecord, Created(MODELNAME.persian))
  } catch (error) {
    if (error.code === "P2002") {
      return next(
        createError(
          BadRequest(`مقدار ${error.meta.target[0]} نمی تواند تکراری باشد`)
        )
      )
    }
    internalServerErrorHandler(next, error)
  }
}

const readWithIdController = async (MODELNAME, req, res, next) => {
  try {
    const { id } = req.params
    const records = await readOne(MODELNAME.english, { id: +id })
    resposeHandler(
      res,
      records,
      Ok({ operationName: `خواندن ${MODELNAME.persian}` })
    )
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

const readController = async (MODELNAME, req, res, next) => {
  try {
    const { id, page } = req.query
    const records = await readWithPaginationOrId(MODELNAME.english, +id, page)
    resposeHandler(res, records, emptyMesssage())
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

const readRecordsSortedByDateWithPaginationController = async (
  MODELNAME,
  take,

  req,
  res,
  next
) => {
  try {
    const page = req.query.page || 1
    const orderByKey = req.query.orderBy || "id"
    const orderBy = {}
    orderBy[orderByKey] = "asc"
    const records = await readRecordsSortedByDateWithPagination(
      MODELNAME.english,
      take,
      orderBy,
      page
    )
    resposeHandler(res, records, emptyMesssage())
  } catch (error) {
    internalServerErrorHandler(next, error)
  }
}

const updateConrtoller = async (MODELNAME, dataSchema, req, res, next) => {
  try {
    const { id } = req.params
    const data = {}
    dataSchema.forEach((item) => {
      data[item] = req.body[item]
    })
    const updatedRecord = await update(MODELNAME.english, { id: +id }, data)
    resposeHandler(
      res,
      updatedRecord,
      Created(`بروزرسانی ${MODELNAME.persian}`)
    )
  } catch (error) {
    if (error.code === "P2025")
      next(
        createError(BadRequest(`${MODELNAME.persian} با این شناسه وجود ندارد`))
      )
    else internalServerErrorHandler(next, error)
  }
}

const deleteController = async (MODELNAME, req, res, next) => {
  try {
    const { id } = req.params
    const deletedRecord = await remove(MODELNAME.english, { id: +id })
    resposeHandler(res, deletedRecord, Created(`حذف ${MODELNAME.persian}`))
  } catch (error) {
    if (error.code === "P2025")
      return next(
        createError(BadRequest(`${MODELNAME.persian} با این شناسه وجود ندارد`))
      )
    if (error.code === "P2003")
      return next(
        createError(BadRequest(`${MODELNAME.persian} درحال استفاده است`))
      )
    else internalServerErrorHandler(next, error)
  }
}

module.exports = (MODELNAME) => ({
  createController: createController.bind(null, MODELNAME),
  readController: readController.bind(null, MODELNAME),
  readRecordsSortedByDateWithPaginationController:
    readRecordsSortedByDateWithPaginationController.bind(null, MODELNAME),
  updateConrtoller: updateConrtoller.bind(null, MODELNAME),
  deleteController: deleteController.bind(null, MODELNAME),
  readWithIdController: readWithIdController.bind(null, MODELNAME),
})
