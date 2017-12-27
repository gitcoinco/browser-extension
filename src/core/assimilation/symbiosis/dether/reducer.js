import actions from './actions'
import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata, batch, entity} ) => {
  if(!(metadata && metadata.uniqueReducer) && entity === 'dether') {
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: {
          REQUESTED: undefined,
          SUCCESS: true,
          FAILURE: false
        }[batch],
        data: payload
      }
    }
  } else{
    switch (type) {

      default:
        return state
    }
  }
}
  