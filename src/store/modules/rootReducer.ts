import { combineReducers } from 'redux'
import corePoolReducer from './corePool/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'

export default combineReducers({
  corePool: corePoolReducer,
  userWalletAddress: userWalletAddressReducer
})