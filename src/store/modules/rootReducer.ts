import { combineReducers } from 'redux'
import chainIdReducer from './chainId/reducer'
import poolImagesReducer from './poolImages/reducer'
import poolTokensReducer from './poolTokens/reducer'
import tokenAddress2IndexReducer from './tokenAddress2Index/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'

export default combineReducers({
  chainId: chainIdReducer,
  poolImages: poolImagesReducer,
  poolTokensArray: poolTokensReducer,
  userWalletAddress: userWalletAddressReducer,
  tokenAddress2Index: tokenAddress2IndexReducer
})
