import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import busketReducer from './busketReducer'
import adminReducer from './adminReducer'
 


const rootReducer = combineReducers({
    customer: customerReducer,
    busket: busketReducer,
    admin: adminReducer
})

export default rootReducer