import { Reducer } from 'redux'
import { HYDRATE } from "next-redux-wrapper"
import { Types, IPoolTokensProps } from './types'

const INITIAL_STATE: Array<IPoolTokensProps> = []

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload
    }
    case Types.GET_POOL_TOKENS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default reducer