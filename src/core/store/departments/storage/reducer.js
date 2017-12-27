import {
STORAGE_UPLOAD_FILE_REQUEST,
STORAGE_UPLOAD_FILE_SUCCESS,
STORAGE_UPLOAD_FILE_FAILURE,
STORAGE_DOWNLOAD_URL_REQUEST,
STORAGE_DOWNLOAD_URL_SUCCESS,
STORAGE_DOWNLOAD_URL_FAILURE,
STORAGE_DELETE_FILE_REQUEST,
STORAGE_DELETE_FILE_SUCCESS,
STORAGE_DELETE_FILE_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case STORAGE_UPLOAD_FILE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case STORAGE_UPLOAD_FILE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case STORAGE_UPLOAD_FILE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case STORAGE_DOWNLOAD_URL_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case STORAGE_DOWNLOAD_URL_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case STORAGE_DOWNLOAD_URL_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case STORAGE_DELETE_FILE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case STORAGE_DELETE_FILE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case STORAGE_DELETE_FILE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


    default:
      return state
  }
}