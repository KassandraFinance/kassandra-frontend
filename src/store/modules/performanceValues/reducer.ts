import { Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { Types } from './types'

const INITIAL_STATE = {}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    case Types.SELECT_PERFORMANCE_VALUES: {
      return { ...state, ...action.payload }
    }
    default: {
      return state
    }
  }
}

export default reducer
