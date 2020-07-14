
const bcrypt = require('bcrypt') 
const { validationResult } = require('express-validator')
const {errorFormatter} = require('../utils/errorFormatter')
const Customer = require('../models/Customer')
const jwt = require('jsonwebtoken')





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
                phone: customer.phone,
                name: customer.name
            }, 'SECRET', {expiresIn: '2h'})

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





exports.changepassword = async(req, res, next) => {
     let{ oldPassword, newPassword, confirmPassword } = req.body
     if(newPassword !== confirmPassword) {
            res.status(400).json({message: 'password does not match'})
     }

     try{
        let customer = await Customer.findOne({password: oldPassword})
        let match = await bcrypt.compare(oldPassword, customer.password)
        if(!match) {
            res.status(400).json({message: 'old-password does not match'})
        }
   
        let hash = await bcrypt.hash(newPassword, 11)

        await Customer.findOneAndUpdate(
            {_id: customer._id},
            {$set: {password: hash}}
        )
        res.status(200).json({message: 'Successfully changed password'})

     } catch(e) {
         next(e)
     }
}