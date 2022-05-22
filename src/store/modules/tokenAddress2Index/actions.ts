import { Types, Address2Index } from './types'

// eslint-disable-next-line prettier/prettier
export const actionSetTokenAddress2Index = (tokenAddress2Index: Address2Index) => {
  return {
    type: Types.SET_TOKEN_ADDRESS_2_INDEX,
    payload: tokenAddress2Index
  }
}
