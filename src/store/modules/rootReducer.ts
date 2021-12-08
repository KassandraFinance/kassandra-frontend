import { combineReducers } from 'redux'
import poolImages from './poolImages/reducer'
import poolTokensReducer from './poolTokens/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'

export default combineReducers({
  poolTokensArray: poolTokensReducer,
  userWalletAddress: userWalletAddressReducer,
  poolImages: poolImages
})
