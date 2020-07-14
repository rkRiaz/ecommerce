import * as Types from '../actions/types'

const init = {
    adminLoggedIn: false,
    error: {},
}

const adminReducer = (state=init, action) => {
    switch(action.type) {
        case Types.SET_ADMIN: {
            return {
                adminLoggedIn: action.payload.message,
                error: {}
            }
        }
        case Types.SET_ADMIN_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            }
        }

        default: return state
    }
}

export default adminReducer