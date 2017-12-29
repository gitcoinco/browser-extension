import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { 
  BOUNTY_SEARCH_REQUEST,
  BOUNTY_SEARCH_SUCCESS,
  BOUNTY_SEARCH_FAILURE,
} from './actions'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {
    case BOUNTY_SEARCH_REQUEST:
      return {
        search: undefined
      }
    case BOUNTY_SEARCH_SUCCESS:
      return {
        drawer: false
      }
    default:
      return state
  }
}
