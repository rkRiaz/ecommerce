import * as Types from "./types"
import axios from 'axios'



export const addToBusket = (productId, quantity, size) => dispatch => {

    axios.get(`/products/${productId}`)
        .then(res => {
            let product = res.data
            product.quantity = quantity
            product.size  = size
           
           dispatch({
               type: Types.ADD_TO_BUSKET,
               payload: {
                   product
               }
           })
       
        })
        .catch(e => {
            console.log(e)
        })
}

export const productQuantity = (action, productId) => dispatch => {
    dispatch({
        type: action === 'decrease' ? Types.DECREASE_QUANTITY : Types.INCREASE_QUANTITY,
        payload: {
            productId
        }
    })
} 
    
