const router = require('express').Router()
const adminLoginValidator = require('../validators/adminValidator')

let {loginController, orderedGetController, orderedPostController, orderedPutController} = require('../controllers/adminController')


router.post("/login", adminLoginValidator, loginController)
router.get("/ordered-products", orderedGetController)
router.post("/ordered-products", orderedPostController)
router.put("/ordered-products/:orderId", orderedPutController)

module.exports = router

