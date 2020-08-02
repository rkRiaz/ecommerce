const Customer = require('../models/Customer')
const { check } = require('express-validator')

const customerUpdateValidator = [
       
        check('phone')
            .not().isEmpty().withMessage('Phone number required')
            .isNumeric().withMessage('Please provide a valid phone number')
            // .normalizeEmail() //makes problem in console don't show required that means with email save user in db
            .trim(),
          
            check('name')
            .trim(),

            check('address')
            .not().isEmpty().withMessage('Must enter your address')
            .trim(),

            check('email')
            .trim()
        

]

module.exports = customerUpdateValidator