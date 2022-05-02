import { Types } from './types'

export const actionSetChainId = (chainId: number) => {
  return {
    type: Types.CHAIN_ID,
    payload: chainId
  }
}
