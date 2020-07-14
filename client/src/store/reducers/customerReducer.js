import * as Types from '../actions/types'

const init = {
    customerLoggedIn: false,
    customer: {},
    error: {},
}

const customerReducer = (state=init, action) => {
    switch(action.type) {
        case Types.SET_CUSTOMER: {
            return {
                ...state,
                customer: action.payload.newCustomer,
                customerLoggedIn: Object.keys(action.payload.newCustomer).length !== 0,
            }
        }
        case Types.SET_CUSTOMER_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            }
        }

        default: return state
    }
}

export default customerReducer