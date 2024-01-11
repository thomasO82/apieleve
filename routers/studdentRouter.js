const studdentRouter = require("express").Router()
const studdentController = require("../controllers/studdentController")
const authguard = require("../helper/authGuard")


schoolRouter.post('/promos/:promoId/studdents', schoolController.createStuddent)


module.exports = studdentRouter