import { Types, ICorePoolProps } from './types'

export const actionGetTokensPool = (tokensPool: Array<ICorePoolProps>) => {
  return {
    type: Types.GET_TOKENS_POOL, 
    payload: tokensPool
  }
}