const Order = require('../models/Order')
const { validationResult } = require('express-validator')
const {errorFormatter} = require('../utils/errorFormatter')



exports.loginController = async (req, res, next) => {
    let {loginPhone, loginPassword} = req.body
    
    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    }
    
    try{
        if(loginPhone == 1234 && loginPassword === "admin") {
            res.status(200).json("admin login success")
        } else {
            res.status(200).json("Invalid Credential")
        }
    }catch(e) {
        next(e)
    }

}

exports.orderedGetController = async (req, res, next) => {
    let Orders = await Order.find()
    if(Orders) {
        res.status(200).json(Orders.reverse())
    } else {
        res.status(200).json("No ordered products")
    }
}

exports.orderedPostController = async (req, res, next) => {
    try{
        let {customer, customerId, cart_products, subTotal} = req.body
        let ordered = new Order({
            customerId,
            customer,
            cart_products,
            subTotal,
            paid: {
                message: "false",
                createAt: ""
            },
            picked:  {
                message: "false",
                createAt: ""
            },
            shipped:  {
                message: "false",
                createAt: ""
            },
            delivered:  {
                message: "false",
                createAt: ""
            },
        })
        let newOrder = await ordered.save()
        res.status(200).json(newOrder)
    } catch(e) {
        next(e)
    }
}

exports.orderedPutController = async (req, res, next) => {
    let {orderId} = req.params
    try{
        let order = await Order.findById(orderId)
        let {paid, picked, shipped, delivered, processing} = req.body
        let update = {
            paid: paid || order.paid,
            processing: processing || order.processing,
            picked: picked || order.picked,
            shipped: shipped || order.shipped,
            delivered: delivered || order.delivered,
        }

        let updatedOrder = await Order.findOneAndUpdate(
            {_id: orderId},
            {$set: update},
            {new: true}
        )
        res.status(200).json(updatedOrder)
    } catch(e) {
        next(e)
    }
}
