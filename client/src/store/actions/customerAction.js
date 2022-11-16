import axios from 'axios'
import * as Types from './types'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken'



export const update = (customer, history) => dispatch => {
    axios.put(`${process.env.REACT_APP_APIENDPOINT}/customers/update`, customer)
        .then((res) => {
            dispatch({
                type: Types.SET_CUSTOMER,
                payload: {
                    customer: res.data
                }
            })
            history.push("/customer/dashboard")
        })
        .catch(error => {
            dispatch({
                type: Types.UPDATE_CUSTOMER_ERROR,
                payload: {
                    updateError: error.response.data
                }
            })
        })
}

export const login = (customer, history) => dispatch => {
    axios.post(`${process.env.REACT_APP_APIENDPOINT}/customers/login`, customer)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('customer_auth_token', token)
            setAuthToken(token)
            let decodeToken = jwtDecode(token)

            dispatch({
                type: Types.SET_CUSTOMER,
                payload: {
                    customer: decodeToken
                }
            })
            dispatch({
                type: Types.SIDE_BARS,
                payload: {
                    addProduct: '',
                    open: false,
                }
            })
            
            history.location.pathname === "/customer/cart" ? 
            history.push("/customer/cart") :
            history.push("/customer/dashboard")
        })
        .catch(error => {
            dispatch({
                type: Types.SET_CUSTOMER_ERROR,
                payload: {
                    error: error.response.data
                },
            })
            dispatch({
                type: Types.SIDE_BARS,
                payload: {
                    addProduct: '',
                    open: history.location.pathname === "/customer/signup-login" ? false : true,
                }
            })
            console.log(error)
        })
}

export const logout = (history) => dispatch => {
    localStorage.removeItem('customer_auth_token')
    dispatch({
        type: Types.SET_CUSTOMER,
        payload: {
            customer: {}
        }
    })
    history.push('/')
}



