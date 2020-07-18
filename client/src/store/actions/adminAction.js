import axios from 'axios'
import * as Types from './types'




export const adminLogin = (admin, history) => dispatch => {
    axios.post('/admin/login', admin)
        .then(res => {
            let admin_auth = res.data
            localStorage.setItem('admin_auth', admin_auth)
            // setAuthToken(token)
            // let decodeToken = jwtDecode(token)
            // dispatch({
            //     type: Types.SET_CUSTOMER,
            //     payload: {
            //         user: decodeToken
            //     }
            // })

            history.push('/admin/dashboard')
        })

        .catch(error => {
            dispatch({
                type: Types.ADMIN_ERROR,
                payload: {
                    error: error.response.data
                }
            })
            console.log(error)
        })
}

export const adminLogout = history => dispatch => {
    localStorage.removeItem('admin_auth')
    // dispatch({
    //     type: Types.SET_USER,
    //     payload: {
    //         user: {}
    //     }
    // })
    history.push('/admin/login')
}



