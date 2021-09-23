import { Types, TokenDetails } from './types'

export const actionGetPoolTokens = (poolTokensArray: Array<TokenDetails>) => {
  return {
    type: Types.GET_POOL_TOKENS, 
    payload: poolTokensArray
  }
}