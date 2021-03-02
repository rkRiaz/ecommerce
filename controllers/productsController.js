const Product = require('../models/Product')
const { validationResult } = require('express-validator')
const { errorFormatter } = require('../utils/errorFormatter')
const fs = require('fs')
const formidable = require('formidable');

const path = require("path"); 
const cloudinary = require("../utils/cloudinary");
const cloudinaryy = require('cloudinary');

const { productImgsUpload } = require('./uploadController')


exports.allProducts = async (req, res, next) => {
    try {
        let allProducts = await Product.find()
        if (allProducts.length !== 0) {
            res.status(200).json(allProducts)
        } else {
            res.status(200).json({ message: "No products are in the database" })
        }
    } catch (e) {
        next(e)
    }
}

exports.product = async (req, res, next) => {

    let { productId } = req.params
    try {
        let product = await Product.findById(productId)
        res.status(200).json(product)
    } catch (e) {
        next(e)
    }
}

exports.productsByTag = async(req, res, next) => {
    let { tag } = req.params
    try{
        let products = await Product.find({tag: tag})
            return res.status(200).json(products)
    } catch(e) {
        next(e)
    }
}

exports.productsByDepartment = async (req, res, next) => {
    let { department } = req.params
    try {
        let products = await Product.find({ department })
            return res.status(200).json(products)
    } catch (e) {
        next(e)
    }
}
exports.productsByType = async (req, res, next) => {
    let { type } = req.params
    try {
        let products = await Product.find({ type })
            return res.status(200).json(products)
    } catch (e) {
        next(e)
    }
}




exports.addProduct = async (req, res, next) => {
    
    // let { name, price, details, quantity, department, type, tag, productImgsName } = req.body
    // let errors = validationResult(req).formatWith(errorFormatter)

    // if (!errors.isEmpty()) {
    //     return res.status(400).json(errors.mapped())
    // }
  

        const form = formidable({ multiples: true });
        form.keepExtensions = true;
        form.parse(req, async (err, fields, files) => {
           
            // return console.log(files)
    
          let product = new Product(fields);


          const uploader = async (path) => await cloudinary.uploads(path, 'projects/ecommerce/product_images')
          const productImgs = files.productImgs
         
          for(const productImg of productImgs) {
            const path = productImg.path
            const newPath = await uploader(path)
            product.productImgs.push(newPath.id)
          }
      
         
    //    return console.log(product)
    //   console.log(product)
          product.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err)
              });
            }
            res.json(result);
          });
        });











        // if (errors.isEmpty()) {
        //     let productImgs = productImgsName ? productImgsName : ['no-image.jpg']
        //     const product = new Product({
        //         name,
        //         price,
        //         details,
        //         department,
        //         type,
        //         quantity,
        //         tag,
        //         productImgs: productImgs,
        //         soldOut: false
        //     })
        //     const newProduct = await product.save()
        //     return res.status(200).json(newProduct)
        // }

}

exports.editProduct = async (req, res, next) => {
    let { name, price, details, quantity, department, type, tag, soldOut } = req.body
    let { productId } = req.params
    let errors = validationResult(req).formatWith(errorFormatter)

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    }

    try {
        if (errors.isEmpty()) {
            const updatedProduct = await Product.findOneAndUpdate(
                { _id: productId },
                { $set: { name, price, details, quantity, department, type, tag, soldOut } },
                { new: true }
            )
            // const updatedProduct = await product.



            return res.status(200).json({
                message: 'Product Successfully Updated',
                updatedProduct
            })
        }
    } catch (e) {
        next(e)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        let { productId } = req.params
        let deletedProduct = await Product.findByIdAndDelete(productId)
  
     

        for(const productImg of deletedProduct.productImgs) {
            cloudinaryy.uploader.destroy('projects/ecommerce/product_images/'+path.parse(productImg).name , function(result) { console.log(result) });
          }
        // let filter = deletedProduct.productImgs.filter(p => p !== 'no-image.jpg')
        // filter.map(p => {
        //     fs.unlink(`client/public/images/${p}`, err => {
        //         console.log(err)
        //     })
        // })
    } catch (e) {
        next(e)
    }
} 
