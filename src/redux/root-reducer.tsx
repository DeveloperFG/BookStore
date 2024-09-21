import { combineReducers } from 'redux'
import cartReducer from './cart/slice'

export default combineReducers({
  cart: cartReducer,
})