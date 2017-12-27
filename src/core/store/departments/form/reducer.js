import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { FORM_SET_CSRF_TOKEN, FORM_SUBMIT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_SET_CSRF_TOKEN:
      return {
        ...state,
        csrfToken: action.token
      }
    case FORM_SUBMIT:
      return {
        ...state
      }
    default:
      return reducer(state, action)
  }
}
