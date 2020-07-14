const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    details: {
        type: 'String',
        trim: true,
    },
    type: {
        type: String,
        require: true,
        trim: true
    },
    tag: {
        type: String,
        require: true,
        trim: true 
    },
    productImgs: {
        type: [],
        required: true
    }
}, {timestamps: true})

const Product = model('Product', productSchema)
module.exports = Product