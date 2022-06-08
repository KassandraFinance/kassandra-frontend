import { Types } from './types'

export interface PerformanceValues {
  performance: string;
  title: string;
  changeWeek: string[];
}

export const actionSetPerformanceValues = (
  performanceValues: PerformanceValues
) => {
  return {
    type: Types.SELECT_PERFORMANCE_VALUES,
    payload: performanceValues
  }
}
