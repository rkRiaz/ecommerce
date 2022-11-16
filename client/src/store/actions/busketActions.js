import * as Types from "./types"
import axios from 'axios'



export const addToBusket = (productId, quantity, size, color, weight, history) => dispatch => {

    axios.get(`${process.env.REACT_APP_APIENDPOINT}/products/${productId}`)
        .then(res => {
            let product = res.data
            product.quantity = quantity ? quantity : 1 
            product.size  = size ? size : ''
            product.color = color ? color: ''
            product.weight = weight ? weight: ''
            

           dispatch({
               type: Types.ADD_TO_BUSKET,
               payload: {
                   product,
               }
           })
           dispatch({
            type: Types.SIDE_BARS,
            payload: {
                addProduct: res.data,
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


export const orderedProducts = (customerId, orderedProducts, history) => dispatch => {

if(customerId) {
    dispatch({
        type: Types.ORDERED_PRODUCTS,
    }) 

    axios.post(`${process.env.REACT_APP_APIENDPOINT}/admin/ordered-products`, orderedProducts)
    .then(res => console.log(res.data))
    .catch(e => {console.log(e)})
    history.push("/customer/ordered")
} else {
    dispatch({
        type: Types.SIDE_BARS,
        payload: {
            addProduct: '',
            open: true,
        }
    }) 
}

} 

