import { Types } from './types'

export const actionSetPeriodSelected = (periodSelected: string) => {
  return {
    type: Types.PERIOD_SELECTED,
    payload: periodSelected
  }
}
