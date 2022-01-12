import { combineReducers } from 'redux'
import chainId from './chainId/reducer'
import poolImages from './poolImages/reducer'
import poolTokensReducer from './poolTokens/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'

export default combineReducers({
  chainId: chainId,
  poolTokensArray: poolTokensReducer,
  userWalletAddress: userWalletAddressReducer,
  poolImages: poolImages
})
