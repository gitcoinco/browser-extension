import {
UPORT_GET_WEB3_REQUEST,
UPORT_GET_WEB3_SUCCESS,
UPORT_GET_WEB3_FAILURE,
UPORT_GET_PROVIDER_REQUEST,
UPORT_GET_PROVIDER_SUCCESS,
UPORT_GET_PROVIDER_FAILURE,
UPORT_GET_CREDENTIALS_REQUEST,
UPORT_GET_CREDENTIALS_SUCCESS,
UPORT_GET_CREDENTIALS_FAILURE,
UPORT_GET_ADDRESS_REQUEST,
UPORT_GET_ADDRESS_SUCCESS,
UPORT_GET_ADDRESS_FAILURE,
UPORT_GET_ATTEST_CREDENTIALS_REQUEST,
UPORT_GET_ATTEST_CREDENTIALS_SUCCESS,
UPORT_GET_ATTEST_CREDENTIALS_FAILURE,
UPORT_INIT_CONTRACT_REQUEST,
UPORT_INIT_CONTRACT_SUCCESS,
UPORT_INIT_CONTRACT_FAILURE,
UPORT_SEND_TRANSACTION_REQUEST,
UPORT_SEND_TRANSACTION_SUCCESS,
UPORT_SEND_TRANSACTION_FAILURE,
UPORT_ADD_APP_PARAMETERS_REQUEST,
UPORT_ADD_APP_PARAMETERS_SUCCESS,
UPORT_ADD_APP_PARAMETERS_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case UPORT_GET_WEB3_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_GET_WEB3_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_GET_WEB3_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_GET_PROVIDER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_GET_PROVIDER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_GET_PROVIDER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_GET_CREDENTIALS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_GET_CREDENTIALS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_GET_CREDENTIALS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_GET_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_GET_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_GET_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_GET_ATTEST_CREDENTIALS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_GET_ATTEST_CREDENTIALS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          },
          credentials: {
            ...state.credentials,
            data: {
              ...state.credentials.data,
              ...payload
            }
          }
        }
      case UPORT_GET_ATTEST_CREDENTIALS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_INIT_CONTRACT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_INIT_CONTRACT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_INIT_CONTRACT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_SEND_TRANSACTION_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_SEND_TRANSACTION_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_SEND_TRANSACTION_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case UPORT_ADD_APP_PARAMETERS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case UPORT_ADD_APP_PARAMETERS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case UPORT_ADD_APP_PARAMETERS_FAILURE:
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