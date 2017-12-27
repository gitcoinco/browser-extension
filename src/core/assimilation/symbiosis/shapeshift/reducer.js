import {
SHAPESHIFT_GET_COUNT_REQUEST,
SHAPESHIFT_GET_COUNT_SUCCESS,
SHAPESHIFT_GET_COUNT_FAILURE,
SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST,
SHAPESHIFT_GET_DEPOSIT_LIMIT_SUCCESS,
SHAPESHIFT_GET_DEPOSIT_LIMIT_FAILURE,
SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST,
SHAPESHIFT_GET_EXCHANGE_RATE_SUCCESS,
SHAPESHIFT_GET_EXCHANGE_RATE_FAILURE,
SHAPESHIFT_GET_MARKET_INFO_REQUEST,
SHAPESHIFT_GET_MARKET_INFO_SUCCESS,
SHAPESHIFT_GET_MARKET_INFO_FAILURE,
SHAPESHIFT_GET_RECENT_REQUEST,
SHAPESHIFT_GET_RECENT_SUCCESS,
SHAPESHIFT_GET_RECENT_FAILURE,
SHAPESHIFT_GET_STATUS_REQUEST,
SHAPESHIFT_GET_STATUS_SUCCESS,
SHAPESHIFT_GET_STATUS_FAILURE,
SHAPESHIFT_GET_TRANSACTIONS_REQUEST,
SHAPESHIFT_GET_TRANSACTIONS_SUCCESS,
SHAPESHIFT_GET_TRANSACTIONS_FAILURE,
SHAPESHIFT_START_SHIFT_REQUEST,
SHAPESHIFT_START_SHIFT_SUCCESS,
SHAPESHIFT_START_SHIFT_FAILURE,
SHAPESHIFT_STATUS_SHIFT_REQUEST,
SHAPESHIFT_STATUS_SHIFT_SUCCESS,
SHAPESHIFT_STATUS_SHIFT_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case SHAPESHIFT_GET_COUNT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_COUNT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_COUNT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_DEPOSIT_LIMIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_DEPOSIT_LIMIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_EXCHANGE_RATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_EXCHANGE_RATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_GET_MARKET_INFO_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_MARKET_INFO_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_MARKET_INFO_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_GET_RECENT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_RECENT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_RECENT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_GET_STATUS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_STATUS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_STATUS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_GET_TRANSACTIONS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_GET_TRANSACTIONS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_GET_TRANSACTIONS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_START_SHIFT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_START_SHIFT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_START_SHIFT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case SHAPESHIFT_STATUS_SHIFT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case SHAPESHIFT_STATUS_SHIFT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case SHAPESHIFT_STATUS_SHIFT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


    default:
      return state
  }
}
  