import { Types, IPoolTokensProps } from './types'

export const actionGetPoolTokens = (poolTokens: Array<IPoolTokensProps>) => {
  return {
    type: Types.GET_POOL_TOKENS, 
    payload: poolTokens
  }
}