import { Types } from './types'

export type AllPerformancePeriod = {
  [key: string]: string
}

export interface PerformanceValues {
  title: string;
  allPerformancePeriod?: AllPerformancePeriod;
}

export const actionSetPerformanceValues = (
  performanceValues: PerformanceValues
) => {
  return {
    type: Types.SELECT_PERFORMANCE_VALUES,
    payload: performanceValues
  }
}
