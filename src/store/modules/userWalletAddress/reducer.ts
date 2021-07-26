import { Reducer } from 'redux'
import { HYDRATE } from "next-redux-wrapper"
import { Types } from './types'

const INITIAL_STATE: string = ''

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload
    }
    case Types.USER_WALLET_ADDRESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default reducer