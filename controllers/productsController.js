const Product = require('../models/Product')
const { validationResult } = require('express-validator')
const { errorFormatter }  = require('../utils/errorFormatter')
const fs = require('fs')
const { productImgsUpload } =require('./uploadController')




exports.allProducts = async(req, res, next) => {
    try{
        let allProducts = await Product.find()
        if( allProducts.length !== 0 ) {
            res.status(200).json(allProducts)
        } else {
            res.status(200).json({message: "No products are in the database"})
        }
    } catch(e) {
        next(e)
    }
}

exports.product = async(req, res, next) => {
    
        let {productId} = req.params
    try{
        let  product = await Product.findById(productId)
        res.status(200).json(product)
    } catch(e) {
        next(e)
    }
}



exports.addProduct = async(req, res, next) => {
    let { name, price, details, department, type, tag, productImgsName } = req.body
    let errors = validationResult(req).formatWith(errorFormatter)

    if(!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    } 

    try{
        if(errors.isEmpty()) {
            
            let productImgs = productImgsName ? productImgsName : ['no-image.jpg']
            const product = new Product({
                name,
                price,
                details,
                department,
                type,
                tag,
                productImgs: productImgs,
                soldOut: false
            })
            const newProduct = await product.save()
            return res.status(200).json(newProduct)
        }
    } catch(e) {
        next(e)
    }
}

exports.editProduct = async(req, res, next) => {
    let { name, price, details, department, type, tag, soldOut } = req.body
    let { productId } = req.params
    let errors = validationResult(req).formatWith(errorFormatter)

    if(!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    } 

    try{
        if(errors.isEmpty()) {
            const updatedProduct = await Product.findOneAndUpdate(
                {_id: productId},
                {$set: {name, price, details, department, type, tag, soldOut}},
                {new: true}
            ) 
            // const updatedProduct = await product.



            return res.status(200).json({
                message: 'Product Successfully Updated',
                updatedProduct
            })
        }
    } catch(e) {
        next(e)
    }
}

exports.deleteProduct = async(req, res, next) => {
    try{
        let {productId} = req.params
        let deletedProduct = await Product.findByIdAndDelete(productId)
        let filter = deletedProduct.productImgs.filter(p => p !== 'no-image.jpg')
        filter.map(p => {
            fs.unlink(`client/public/images/${p}`, err => {
                console.log(err)
              })
        })
    } catch(e) {
        next(e)
    }
} 
