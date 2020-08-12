const Product = require('../models/Product')




exports.productImgsUpload = async(req, res, next) => {
   let productImgs = []
    req.files.map(productImg => {
        productImgs.push('/' + productImg.filename)
    }) 
    res.json(productImgs)
}