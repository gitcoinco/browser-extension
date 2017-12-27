import {
  DATABASE_WRITE_REQUEST,
  DATABASE_WRITE_SUCCESS,
  DATABASE_WRITE_FAILURE,
  DATABASE_READ_REQUEST,
  DATABASE_READ_SUCCESS,
  DATABASE_READ_FAILURE,
  DATABASE_CREATE_REQUEST,
  DATABASE_CREATE_SUCCESS,
  DATABASE_CREATE_FAILURE,
  DATABASE_UPDATE_REQUEST,
  DATABASE_UPDATE_SUCCESS,
  DATABASE_UPDATE_FAILURE,
  DATABASE_PATCH_REQUEST,
  DATABASE_PATCH_SUCCESS,
  DATABASE_PATCH_FAILURE,
  DATABASE_DELETE_REQUEST,
  DATABASE_DELETE_SUCCESS,
  DATABASE_DELETE_FAILURE,
  DATABASE_CHANNEL_REQUEST,
  DATABASE_CHANNEL_SUCCESS,
  DATABASE_CHANNEL_FAILURE,
  DATABASE_SYNC_REQUEST,
  DATABASE_SYNC_SUCCESS,
  DATABASE_SYNC_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case DATABASE_WRITE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_WRITE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_WRITE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_READ_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_READ_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_READ_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_CREATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_CREATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_CREATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_UPDATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_UPDATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_UPDATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_PATCH_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_PATCH_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_PATCH_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_CHANNEL_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_CHANNEL_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_CHANNEL_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case DATABASE_SYNC_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DATABASE_SYNC_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case DATABASE_SYNC_FAILURE:
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