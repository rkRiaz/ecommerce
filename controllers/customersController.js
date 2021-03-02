
const bcrypt = require('bcrypt') 
const { validationResult } = require('express-validator')
const {errorFormatter} = require('../utils/errorFormatter')
const Customer = require('../models/Customer')
const Order = require('../models/Order')
const jwt = require('jsonwebtoken')


exports.allCustomers = async(req, res, next) => {
   try{
    let customers = await Customer.find()
    res.status(200).json(customers.reverse())
   }catch(e) {
       next(e)
   }
}

exports.signup = async (req, res, next) => {
    const { name, phone, email, address, password, confirmPassword } = req.body
    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    }
    
    try{
        let customer = await Customer.findOne({phone})
        let hashedPassword = await bcrypt.hash(password, 11)
        let match = await bcrypt.compare(confirmPassword, hashedPassword)
        if(!customer && match) {
            const customer = new Customer({
                name,
                phone,
                address,
                email,   
                password: hashedPassword 
            })
            let newCustomer = await customer.save() 
            res.status(200).json(newCustomer)
        }

    } catch (e) {
        next(e)
    }

}

exports.login = async (req, res, next) => {
    const { loginPhone, loginPassword } = req.body

    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        res.status(400).json(errors.mapped())
    }

    try{
        let customer = await Customer.findOne({phone: loginPhone})
        let match = await bcrypt.compare(loginPassword, customer.password)
        if(!match) {
            res.status(400).json({message: 'Phone or password is not correct'})
        } else {
            let token = jwt.sign({
                _id: customer._id,
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address
            }, 'SECRET')
            // , {expiresIn: '2h'}

            res.status(200).json({
                message: 'Login Success',
                token: `Bearer ${token}`   
            })
        }
        

    }

    catch(e) {
        next(e)
    }
}

exports.update = async (req, res, next) => {
    const { name, phone, email, address } = req.body
    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    }
    
    try{
        let customer = req.customer
            const update = {
                name,
                phone,
                address,
                  email,   
            }
            let updatedCustomer = await Customer.findOneAndUpdate(
                {_id: customer._id},
                {$set: update},
                {new: true}
            )
            if(updatedCustomer) {
                return res.status(200).json(updatedCustomer)
            }
            return res.status(200).json("customer updated failed")
    } catch (e) {
        next(e)
    }

}



exports.changepassword = async(req, res, next) => {
    let{ oldPassword, newPassword, confirmPassword } = req.body
    if(newPassword !== confirmPassword) {
        res.status(200).json("confrim password does not match")
    }

     let customer = req.customer

     if(oldPassword && newPassword && confirmPassword !== null) {
        let match = await bcrypt.compare(oldPassword, customer.password)
        if(match && newPassword === confirmPassword) {
            let hash = await bcrypt.hash(newPassword, 11)
            await Customer.findOneAndUpdate(
                {_id: customer._id},
                {$set: {password: hash}},
                {new: true},
            )
            return res.status(200).json('Successfully changed password') 
        } else {
            return res.status(200).json('Old password does not match') 
        }
     } else {
         res.status(200).json("Must Fillup All Fields")
     }
}

exports.dashboard = async(req, res, next) => {
    let customerId = req.customer._id
    let customer = req.customer
    let orderedProducts = await Order.find({customerId})
    try{
        if(customer) {
             res.status(200).json({
                customer,
                orderedProducts: orderedProducts.reverse()
            })
        } else {
         res.status(400).json("error")
        }
    }catch(e) {
        next(e)
    }
    
    
}