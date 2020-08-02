
const Customer = require('./models/Customer');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'SECRET';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

module.exports = passport => {

    passport.use(new JwtStrategy(opts, (payload, done) => {

        Customer.findOne({_id: payload._id})
            .then(customer => {
                if (customer) {
                    return done(null, customer);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            })
            .catch(err => {
                console.log(err)
                return done(err)
            })

        }))
 
}