import * as Types from "./types"
import axios from 'axios'



export const addToBusket = ( productId, quantity, size, color, weight, history) => dispatch => {

    axios.get(`/products/${productId}`)
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

        //    (history ? history.push("/customer/cart") : null)
       
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


export const orderedProducts = (customer, orderedProducts, history) => dispatch => {

if(customer) {
    dispatch({
        type: Types.ORDERED_PRODUCTS,
    }) 

    axios.post("/admin/ordered-products", orderedProducts)
    .then(res => console.log(res.data))
    .catch(e => {console.log(e)})
    history.push("/customer/ordered")
} else {
    history.push('/customer/signup-login')
}

} 

