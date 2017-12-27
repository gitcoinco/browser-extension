import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { DIALOG_OPEN, DIALOG_CLOSE } from './actions'

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case DIALOG_OPEN:
      return {
        title: payload.title,
        open: payload.foundry,
        data: {
          ...payload
        }
      }
    case DIALOG_CLOSE:
      return {
        initialState
      }
    default:
      return state
  }
}
