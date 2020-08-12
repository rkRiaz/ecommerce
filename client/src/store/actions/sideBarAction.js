import * as Types from "./types"



export const cartSideBar__off = () => dispatch => {
           dispatch({
            type: Types.SIDE_BARS,
            payload: {
                addProduct: '',
                open: false,
            }
        })
}

export const loginSideBar__on = () => dispatch => {
    dispatch({
     type: Types.SIDE_BARS,
     payload: {
         addProduct: '',
         open: true,
     }
 })
}

export const loginSideBar__off = () => dispatch => {
    dispatch({
     type: Types.SIDE_BARS,
     payload: {
         addProduct: '',
         open: false,
     }
 })
}


