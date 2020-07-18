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