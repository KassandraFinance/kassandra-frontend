import { Types } from './types'

export const actionSetChartSelected = (chartSelected: string) => {
  return {
    type: Types.CHART_SELECTED,
    payload: chartSelected
  }
}
