import { combineReducers } from 'redux'
import chainId from './chainId/reducer'
import poolImages from './poolImages/reducer'
import poolTokensReducer from './poolTokens/reducer'
import userWalletAddressReducer from './userWalletAddress/reducer'
import periodSelected from './periodSelected/reducer'
import chartSelected from './chartSelected/reducer'

export default combineReducers({
  chainId: chainId,
  poolTokensArray: poolTokensReducer,
  userWalletAddress: userWalletAddressReducer,
  poolImages: poolImages,
  periodSelected: periodSelected,
  chartSelected: chartSelected
})
