import { combineReducers } from 'redux'
import poolTokensReducer from './poolTokens/reducer'

export default combineReducers({
  poolTokens: poolTokensReducer,
})