const router = require('express').Router()
const customerSignupValidator= require('../validators/customerSignupValidator')
const customerLoginValidator= require('../validators/customerLoginValidator')
const customerUpdateValidator= require('../validators/customerUpdateValidator')


const authenticate = require('../authenticate')


const {
    allCustomers,
    signup,
    login,
    changepassword,
    update,
    dashboard
} = require('../controllers/customersController')


router.get('/', allCustomers)
router.post('/signup', customerSignupValidator, signup)
router.put('/update', authenticate, customerUpdateValidator, update)

router.post('/login', customerLoginValidator, login)
router.put('/change-password', authenticate, changepassword)
router.get('/dashboard',authenticate, dashboard)





module.exports = router