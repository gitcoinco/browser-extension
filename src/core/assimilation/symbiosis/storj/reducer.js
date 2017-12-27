import {
STORJ_KEY_PAIR_GENERATE_REQUEST,
STORJ_KEY_PAIR_GENERATE_SUCCESS,
STORJ_KEY_PAIR_GENERATE_FAILURE,
STORJ_KEY_PAIR_PUBLIC_REQUEST,
STORJ_KEY_PAIR_PUBLIC_SUCCESS,
STORJ_KEY_PAIR_PUBLIC_FAILURE,
STORJ_KEY_PAIR_PRIVATE_REQUEST,
STORJ_KEY_PAIR_PRIVATE_SUCCESS,
STORJ_KEY_PAIR_PRIVATE_FAILURE,
STORJ_KEY_PAIR_SIGN_REQUEST,
STORJ_KEY_PAIR_SIGN_SUCCESS,
STORJ_KEY_PAIR_SIGN_FAILURE,
STORJ_KEY_PAIR_GET_NODE_ID_REQUEST,
STORJ_KEY_PAIR_GET_NODE_ID_SUCCESS,
STORJ_KEY_PAIR_GET_NODE_ID_FAILURE,
STORJ_KEY_PAIR_GET_ADDRESS_REQUEST,
STORJ_KEY_PAIR_GET_ADDRESS_SUCCESS,
STORJ_KEY_PAIR_GET_ADDRESS_FAILURE,
STORJ_KEY_GENERATE_REQUEST,
STORJ_KEY_GENERATE_SUCCESS,
STORJ_KEY_GENERATE_FAILURE,
STORJ_KEY_REGISTER_REQUEST,
STORJ_KEY_REGISTER_SUCCESS,
STORJ_KEY_REGISTER_FAILURE,
STORJ_KEY_REMOVE_REQUEST,
STORJ_KEY_REMOVE_SUCCESS,
STORJ_KEY_REMOVE_FAILURE,
STORJ_KEYS_LIST_REQUEST,
STORJ_KEYS_LIST_SUCCESS,
STORJ_KEYS_LIST_FAILURE,
STORJ_ENCRYPTION_KEY_GENERATE_REQUEST,
STORJ_ENCRYPTION_KEY_GENERATE_SUCCESS,
STORJ_ENCRYPTION_KEY_GENERATE_FAILURE,
STORJ_FILE_GET_REQUEST,
STORJ_FILE_GET_SUCCESS,
STORJ_FILE_GET_FAILURE,
STORJ_FILE_CREATE_REQUEST,
STORJ_FILE_CREATE_SUCCESS,
STORJ_FILE_CREATE_FAILURE,
STORJ_FILE_DELETE_REQUEST,
STORJ_FILE_DELETE_SUCCESS,
STORJ_FILE_DELETE_FAILURE,
STORJ_FILES_LIST_REQUEST,
STORJ_FILES_LIST_SUCCESS,
STORJ_FILES_LIST_FAILURE,
STORJ_BUCKET_GET_REQUEST,
STORJ_BUCKET_GET_SUCCESS,
STORJ_BUCKET_GET_FAILURE,
STORJ_BUCKET_CREATE_REQUEST,
STORJ_BUCKET_CREATE_SUCCESS,
STORJ_BUCKET_CREATE_FAILURE,
STORJ_BUCKET_DELETE_REQUEST,
STORJ_BUCKET_DELETE_SUCCESS,
STORJ_BUCKET_DELETE_FAILURE,
STORJ_BUCKET_MAKE_PUBLIC_REQUEST,
STORJ_BUCKET_MAKE_PUBLIC_SUCCESS,
STORJ_BUCKET_MAKE_PUBLIC_FAILURE,
STORJ_BUCKETS_LIST_REQUEST,
STORJ_BUCKETS_LIST_SUCCESS,
STORJ_BUCKETS_LIST_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case STORJ_KEY_PAIR_GENERATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_PAIR_GENERATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_PAIR_GENERATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_PAIR_PUBLIC_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_PAIR_PUBLIC_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_PAIR_PUBLIC_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_PAIR_PRIVATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_PAIR_PRIVATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_PAIR_PRIVATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_PAIR_SIGN_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_PAIR_SIGN_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_PAIR_SIGN_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_PAIR_GET_NODE_ID_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_PAIR_GET_NODE_ID_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_PAIR_GET_NODE_ID_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_PAIR_GET_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_PAIR_GET_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_PAIR_GET_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_GENERATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_GENERATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_GENERATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_REGISTER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_REGISTER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_REGISTER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEY_REMOVE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEY_REMOVE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEY_REMOVE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_KEYS_LIST_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_KEYS_LIST_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_KEYS_LIST_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_ENCRYPTION_KEY_GENERATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_ENCRYPTION_KEY_GENERATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_ENCRYPTION_KEY_GENERATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_FILE_GET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_FILE_GET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_FILE_GET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_FILE_CREATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_FILE_CREATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_FILE_CREATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_FILE_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_FILE_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_FILE_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_FILES_LIST_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_FILES_LIST_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_FILES_LIST_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_BUCKET_GET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_BUCKET_GET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_BUCKET_GET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_BUCKET_CREATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_BUCKET_CREATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_BUCKET_CREATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_BUCKET_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_BUCKET_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_BUCKET_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_BUCKET_MAKE_PUBLIC_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_BUCKET_MAKE_PUBLIC_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_BUCKET_MAKE_PUBLIC_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }


      case STORJ_BUCKETS_LIST_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case STORJ_BUCKETS_LIST_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case STORJ_BUCKETS_LIST_FAILURE:
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