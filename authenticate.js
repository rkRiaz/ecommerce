const passport = require('passport')

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (err, customer, info) => {
        if(err) {
            // console.log(err)
            // console.log(info)
            return next(err)
        }
        if(!customer) {
            return res.status(400).json({
                message: "authentication error"
            })
        }

        req.customer = customer
        return next()
    })(req, res, next)
}