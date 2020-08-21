import * as Types from '../actions/types'

const init = {
    cartSideBar: false,
    loginSideBar: false,
    menuSideBar: false
}

const sideBarsReducer = (state=init, action) => {
    switch(action.type) {
        case Types.SIDE_BARS: {
            return {
                cartSideBar: Object.keys(action.payload.addProduct).length !== 0,
                loginSideBar: action.payload.open === true,
                menuSideBar: action.payload.menuSideBarOpen === true,
            }
        }

        default: return state
    }
}

export default sideBarsReducer