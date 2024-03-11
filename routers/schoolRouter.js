const schoolRouter = require("express").Router()
const schoolController = require("../controllers/schoolController")
const authguard = require("../helper/authGuard")


schoolRouter.post('/school', schoolController.createSchool)
schoolRouter.get('easteregg', (req, res)=>{
    res.json('GIBRIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIL')
})
schoolRouter.get('/me', authguard, schoolController.getMe)


module.exports = schoolRouter