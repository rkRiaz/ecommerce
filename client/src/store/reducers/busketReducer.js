import * as Types from '../actions/types'

const init = {
    busketNumbers: 0,
    cart_products: []
}

const busketReducer = (state=init, action) => {
    switch (action.type) {
        case Types.ADD_TO_BUSKET: {
            let selectedProduct = action.payload.product
            let quantity = state.cart_products.map(p => {return p.quantity})   
            let totalQuantity = quantity.reduce((a, b) => a + b, 0)        
            if(selectedProduct) {
                return {
                    busketNumbers: totalQuantity + selectedProduct.quantity,
                    cart_products: [selectedProduct,...state.cart_products]
                }
            }
            return {
                ...state
            }
        }
        case Types.DECREASE_QUANTITY: {
            let product = state.cart_products.find(p => p._id === action.payload.productId)
            if(product.quantity > 1) {
                product.quantity -= 1
                let productIndex = state.cart_products.findIndex(p => p._id === action.payload.productId)
                state.cart_products[productIndex] = product
                return {
                    ...state,
                    busketNumbers: state.busketNumbers -= 1
                }
            } else {
                return {
                    busketNumbers: state.busketNumbers -= 1,
                    cart_products: state.cart_products.filter(p => p._id !== action.payload.productId),
                }
            }
        }
        case Types.INCREASE_QUANTITY: {
            let product = state.cart_products.find(p => p._id === action.payload.productId)
            product.quantity += 1
            let productIndex = state.cart_products.findIndex(p => p._id === action.payload.productId)
            state.cart_products[productIndex] = product
            return {
                ...state,
                busketNumbers: state.busketNumbers += 1
            }
        }


        default: return state
    }
}

export default busketReducer