const router = require('express').Router()
const productValidator = require('../validators/productValidator')
const { allProducts, product, addProduct, editProduct, deleteProduct } = require('../controllers/productsController')

router.get('/', allProducts)
router.get('/:productId', product)
router.post('/add-product', productValidator, addProduct)
router.put('/edit-product/:productId',productValidator, editProduct)
router.delete('/delete-product/:productId', deleteProduct)



module.exports = router