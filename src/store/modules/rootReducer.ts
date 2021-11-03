import { combineReducers } from 'redux'
import poolTokensReducer from './poolTokens/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'

export default combineReducers({
  poolTokensArray: poolTokensReducer,
  userWalletAddress: userWalletAddressReducer
})