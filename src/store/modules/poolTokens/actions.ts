import { Types, TokenDetails } from './types'

export const actionGetPoolTokensArray = (poolTokensArray: TokenDetails[]) => {
  return {
    type: Types.GET_POOL_TOKENS_ARRAY,
    payload: poolTokensArray
  }
}
