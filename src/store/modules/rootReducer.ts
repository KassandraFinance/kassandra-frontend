import { combineReducers } from 'redux'
import corePoolReducer from './corePool/reducer'


export default combineReducers({
  corePool: corePoolReducer,
})