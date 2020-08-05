import axios from 'axios'
import * as Types from './types'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken'



export const update = (customer, history) => dispatch => {
    axios.put('/customers/update', customer)
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
    axios.post('/customers/login', customer)
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
            history.push("/customer/dashboard")
        })
        .catch(error => {
            dispatch({
                type: Types.SET_CUSTOMER_ERROR,
                payload: {
                    error: error.response.data
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



