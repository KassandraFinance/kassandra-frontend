import { Types } from './types'

export const actionGetUserAddressWallet = (address: string) => {
  return {
    type: Types.USER_WALLET_ADDRESS, 
    payload: address
  }
}