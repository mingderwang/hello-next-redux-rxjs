/* eslint-disable fp/no-nil */
import { INCREMENT, DECREMENT } from './actions'

export default (state = { pageNumber: 0 }, action) => {
  switch (action.type) {
    case INCREMENT: return { pageNumber: state.pageNumber + 1 }
    case DECREMENT: return { pageNumber: state.pageNumber - 1 }
    default: return state
  }
}
