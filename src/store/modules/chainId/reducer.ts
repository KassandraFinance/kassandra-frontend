import { Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { Types } from './types'

const INITIAL_STATE = ''

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload
    }
    case Types.CHAIN_ID: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default reducer
