import * as Types from "./types"



export const cartSideBar__off = () => dispatch => {
           dispatch({
            type: Types.SIDE_BARS,
            payload: {
                addProduct: '',
                open: false,
                menuSideBarOpen: false
            }
        })
}

export const loginSideBar__on = () => dispatch => {
    dispatch({
     type: Types.SIDE_BARS,
     payload: {
         addProduct: '',
         open: true,
         menuSideBarOpen: false

     }
 })
}

export const loginSideBar__off = () => dispatch => {
    dispatch({
     type: Types.SIDE_BARS,
     payload: {
         addProduct: '',
         open: false,
         menuSideBarOpen: false
     }
 })
}

export const menuSideBar__on = () => dispatch => {
    dispatch({
     type: Types.SIDE_BARS,
     payload: {
         addProduct: '',
         open: false,
         menuSideBarOpen: true,
     }
 })
}

export const menuSideBar__off = () => dispatch => {
    dispatch({
     type: Types.SIDE_BARS,
     payload: {
         addProduct: '',
         open: false,
         menuSideBarOpen: false,
     }
 })
}


