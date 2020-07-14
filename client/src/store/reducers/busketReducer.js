import * as Types from '../actions/types'

const init = {
    busketNumbers: 0,
    cart_products: []
}

const busketReducer = (state=init, action) => {
    switch (action.type) {
        case Types.ADD_TO_BUSKET: {
            let selectedProduct = action.payload.product
         
            if(selectedProduct) {
                return {
                    busketNumbers: state.busketNumbers + selectedProduct.quantity ,
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
                    cart_products: state.cart_products.filter(p => p._id !== action.payload.productId),
                    busketNumbers: state.busketNumbers = 0
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