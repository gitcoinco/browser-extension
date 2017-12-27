import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { DRAWER_OPEN, DRAWER_CLOSE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return {
        drawer: true
      }
    case DRAWER_CLOSE:
      return {
        drawer: false
      }
    default:
      return state
  }
}
