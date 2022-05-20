import { Types } from './types'
import { TokenDetails } from '../poolTokens/types'

export const actionSetInfoAHYPE = (infoAHYPE: TokenDetails[]) => {
  return {
    type: Types.SET_INFO_AHYPE,
    payload: infoAHYPE
  }
}
