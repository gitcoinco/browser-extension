import { POPOVER_OPEN, POPOVER_CLOSE } from './actions'
import { initialState } from './selectors'

export default (state = initialState, {type, payload = {}}) => {
  switch (type) {
    case POPOVER_OPEN:
      return {
        ...state,
        [payload.delta]:true
      }
    case POPOVER_CLOSE:
      return {
        ...state,
        [payload.delta]:false
      }
    default:
      return state
  }
}
