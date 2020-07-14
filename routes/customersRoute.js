const router = require('express').Router()
const customerSignupValidator= require('../validators/customerSignupValidator')
const customerLoginValidator= require('../validators/customerLoginValidator')


const {
    signup,
    login,
    changepassword
} = require('../controllers/customersController')



router.post('/signup', customerSignupValidator, signup)
router.post('/login', customerLoginValidator, login)
router.post('/change-password', changepassword)




module.exports = router