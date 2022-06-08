import { Types, Fees } from './types'

export const actionSetFees = (fees: Fees) => {
  return {
    type: Types.FEES,
    payload: fees
  }
}
