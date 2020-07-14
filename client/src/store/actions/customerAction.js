import axios from 'axios'
import * as Types from './types'

export const signup = (customer, history) => dispatch => {
    axios.post('/customers/signup', customer)
        .then((res) => {
            // history.push('/signupLogin')
        })
        .catch(error => {
            dispatch({
                type: Types.SET_CUSTOMER_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}

export const login = (customer, history) => dispatch => {
    axios.post('/customers/login', customer)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('customer_auth_token', token)
            // setAuthToken(token)
            // let decodeToken = jwtDecode(token)
            // dispatch({
            //     type: Types.SET_CUSTOMER,
            //     payload: {
            //         user: decodeToken
            //     }
            // })

            // history.push('/')
            
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

export const logout = history => dispatch => {
    localStorage.removeItem('auth_token')
    // dispatch({
    //     type: Types.SET_USER,
    //     payload: {
    //         user: {}
    //     }
    // })
    history.push('/login')
}



