import { Types } from './types'

export const actionSetChainId = (chainId: string) => {
  return {
    type: Types.CHAIN_ID,
    payload: chainId
  }
}
