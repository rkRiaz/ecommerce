import { combineReducers } from 'redux'

import customerReducer from './customerReducer'
import busketReducer from './busketReducer'



const rootReducer = combineReducers({
    customer: customerReducer,
    busket: busketReducer
})

export default rootReducer