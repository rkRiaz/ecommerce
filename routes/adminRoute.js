const router = require('express').Router()
const adminLoginValidator = require('../validators/adminValidator')

let {loginController, ordersGetController, ordersPostController, ordersPutController} = require('../controllers/adminController')


router.post("/login", adminLoginValidator, loginController)
router.get("/ordered-products", ordersGetController)
router.post("/ordered-products", ordersPostController)
router.put("/ordered-products/:orderId", ordersPutController)

module.exports = router

