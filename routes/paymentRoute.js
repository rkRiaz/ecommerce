const router = require('express').Router()
const { init, success, fail, cancel, ipn } = require('../controllers/paymentController')

router.get('/', init)
router.post('/success', success)
router.post('/fail', fail)
router.post('/cancel', cancel)
router.post('/ipn', ipn)


module.exports = router