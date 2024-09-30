const express = require("express")
const _ = express.Router()
const api = process.env.BASE_URL
const apiRoutes = require("./api/index")

_.use(api, apiRoutes)



module.exports = _;