import { Reducer } from 'redux'
import { HYDRATE } from "next-redux-wrapper"
import { Types, ICorePoolProps } from './types'

const INITIAL_STATE: Array<ICorePoolProps> = []

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload
    }
    case Types.GET_TOKENS_POOL: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default reducer