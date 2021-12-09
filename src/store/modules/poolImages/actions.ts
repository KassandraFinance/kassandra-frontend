import { Types, TokenImages } from './types'

export const actionSetPoolImages = (address: TokenImages) => {
  return {
    type: Types.TOKEN_IMAGES,
    payload: address
  }
}
