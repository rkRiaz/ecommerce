const router = require('express').Router()
const productAddValidator = require('../validators/productAddValidator')
const productEditValidator = require('../validators/productEditValidator')

const { allProducts,
        product,
        addProduct,
        editProduct,
        deleteProduct,
        productsByTag,
        productsByDepartment,
        productsByType
    } = require('../controllers/productsController')

router.get('/', allProducts)
router.get('/:productId', product)
router.get('/tag/:tag', productsByTag)
router.get('/department/:department', productsByDepartment)
router.get('/type/:type', productsByType)

router.post('/add-product', productAddValidator, addProduct)
router.put('/edit-product/:productId',productEditValidator, editProduct)
router.delete('/delete/:productId', deleteProduct)



module.exports = router