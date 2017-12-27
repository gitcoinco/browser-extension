import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { SPOTLIGHT_CHANGE, SPOTLIGHT_FOCUS } from './actions'

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SPOTLIGHT_CHANGE:
      return {
        ...state,
        [payload.viewport]: payload.library
      }
    case SPOTLIGHT_FOCUS:
      return {
        ...state,
        [payload.viewport]: payload.library
      }
    default:
      return state
  }
}
