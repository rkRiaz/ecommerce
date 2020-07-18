const router = require('express').Router()
const adminLoginValidator = require('../validators/adminValidator')

let {loginController} = require('../controllers/adminController')


router.post("/login", adminLoginValidator, loginController)

module.exports = router

