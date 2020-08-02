import * as Types from '../actions/types'

const init = {
    customerLoggedIn: false,
    customer: {},
    error: {},
    updateError: {}
}

const customerReducer = (state=init, action) => {
    switch(action.type) {
        case Types.SET_CUSTOMER: {
            return {
                ...state,
                customer: action.payload.customer,
                customerLoggedIn: Object.keys(action.payload.customer).length !== 0,
            }
        }
        case Types.SET_CUSTOMER_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            }
        }
        case Types.UPDATE_CUSTOMER_ERROR: {
            return {
                ...state,
                updateError: action.payload.updateError
            }
        }

        default: return state
    }
}

export default customerReducer