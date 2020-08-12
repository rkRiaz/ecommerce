const router = require('express').Router()
const upload = require('../middlewares/uploadMiddleware')
const {productImgsUpload} = require('../controllers/uploadController')

router.post('/product-imgs', upload.array('productImgs', 5))

module.exports = router

