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
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    details: {
        type: 'String',
    },
    department: {
        type: String,
        require: true,
        trim: true
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
    },
    soldOut: false
}, { timestamps: true })

productSchema.index({ 
    name: 'text',
    details: 'text' 
},{
    weights : {
        name: 5,
        details: 5
    }
})

const Product = model('Product', productSchema)
module.exports = Product