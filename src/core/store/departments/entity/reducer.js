import {
ENTITY_ADD_REQUEST,
ENTITY_ADD_SUCCESS,
ENTITY_ADD_FAILURE,
ENTITY_EDIT_REQUEST,
ENTITY_EDIT_SUCCESS,
ENTITY_EDIT_FAILURE,
ENTITY_DELETE_REQUEST,
ENTITY_DELETE_SUCCESS,
ENTITY_DELETE_FAILURE,
ENTITY_PERSON_ADD_REQUEST,
ENTITY_PERSON_ADD_SUCCESS,
ENTITY_PERSON_ADD_FAILURE,
ENTITY_PERSON_EDIT_REQUEST,
ENTITY_PERSON_EDIT_SUCCESS,
ENTITY_PERSON_EDIT_FAILURE,
ENTITY_PERSON_DELETE_REQUEST,
ENTITY_PERSON_DELETE_SUCCESS,
ENTITY_PERSON_DELETE_FAILURE,
ENTITY_ORGANIZATION_ADD_REQUEST,
ENTITY_ORGANIZATION_ADD_SUCCESS,
ENTITY_ORGANIZATION_ADD_FAILURE,
ENTITY_ORGANIZATION_EDIT_REQUEST,
ENTITY_ORGANIZATION_EDIT_SUCCESS,
ENTITY_ORGANIZATION_EDIT_FAILURE,
ENTITY_ORGANIZATION_DELETE_REQUEST,
ENTITY_ORGANIZATION_DELETE_SUCCESS,
ENTITY_ORGANIZATION_DELETE_FAILURE,
ENTITY_PROJECT_ADD_REQUEST,
ENTITY_PROJECT_ADD_SUCCESS,
ENTITY_PROJECT_ADD_FAILURE,
ENTITY_PROJECT_EDIT_REQUEST,
ENTITY_PROJECT_EDIT_SUCCESS,
ENTITY_PROJECT_EDIT_FAILURE,
ENTITY_PROJECT_DELETE_REQUEST,
ENTITY_PROJECT_DELETE_SUCCESS,
ENTITY_PROJECT_DELETE_FAILURE,
ENTITY_TASK_ADD_REQUEST,
ENTITY_TASK_ADD_SUCCESS,
ENTITY_TASK_ADD_FAILURE,
ENTITY_TASK_EDIT_REQUEST,
ENTITY_TASK_EDIT_SUCCESS,
ENTITY_TASK_EDIT_FAILURE,
ENTITY_TASK_DELETE_REQUEST,
ENTITY_TASK_DELETE_SUCCESS,
ENTITY_TASK_DELETE_FAILURE,
ENTITY_RESOURCE_ADD_REQUEST,
ENTITY_RESOURCE_ADD_SUCCESS,
ENTITY_RESOURCE_ADD_FAILURE,
ENTITY_RESOURCE_EDIT_REQUEST,
ENTITY_RESOURCE_EDIT_SUCCESS,
ENTITY_RESOURCE_EDIT_FAILURE,
ENTITY_RESOURCE_DELETE_REQUEST,
ENTITY_RESOURCE_DELETE_SUCCESS,
ENTITY_RESOURCE_DELETE_FAILURE,
ENTITY_BANNER_ADD_REQUEST,
ENTITY_BANNER_ADD_SUCCESS,
ENTITY_BANNER_ADD_FAILURE,
ENTITY_FILE_ADD_REQUEST,
ENTITY_FILE_ADD_SUCCESS,
ENTITY_FILE_ADD_FAILURE,
ENTITY_FILE_EDIT_REQUEST,
ENTITY_FILE_EDIT_SUCCESS,
ENTITY_FILE_EDIT_FAILURE,
ENTITY_FILE_DELETE_REQUEST,
ENTITY_FILE_DELETE_SUCCESS,
ENTITY_FILE_DELETE_FAILURE,
ENTITY_FILES_ADD_REQUEST,
ENTITY_FILES_ADD_SUCCESS,
ENTITY_FILES_ADD_FAILURE,
ENTITY_IMAGE_ADD_REQUEST,
ENTITY_IMAGE_ADD_SUCCESS,
ENTITY_IMAGE_ADD_FAILURE,
ENTITY_IMAGE_EDIT_REQUEST,
ENTITY_IMAGE_EDIT_SUCCESS,
ENTITY_IMAGE_EDIT_FAILURE,
ENTITY_IMAGE_DELETE_REQUEST,
ENTITY_IMAGE_DELETE_SUCCESS,
ENTITY_IMAGE_DELETE_FAILURE,
ENTITY_IMAGES_ADD_REQUEST,
ENTITY_IMAGES_ADD_SUCCESS,
ENTITY_IMAGES_ADD_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case ENTITY_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_PERSON_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_PERSON_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_PERSON_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_PERSON_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_PERSON_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_PERSON_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_PERSON_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_PERSON_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_PERSON_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_ORGANIZATION_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_ORGANIZATION_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_ORGANIZATION_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_ORGANIZATION_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_ORGANIZATION_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_ORGANIZATION_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_ORGANIZATION_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_ORGANIZATION_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_ORGANIZATION_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_PROJECT_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_PROJECT_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_PROJECT_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_PROJECT_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_PROJECT_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_PROJECT_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_PROJECT_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_PROJECT_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_PROJECT_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_TASK_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_TASK_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_TASK_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_TASK_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_TASK_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_TASK_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_TASK_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_TASK_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_TASK_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_RESOURCE_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_RESOURCE_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_RESOURCE_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_RESOURCE_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_RESOURCE_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_RESOURCE_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_RESOURCE_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_RESOURCE_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_RESOURCE_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_BANNER_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_BANNER_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_BANNER_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_FILE_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_FILE_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_FILE_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_FILE_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_FILE_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_FILE_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_FILE_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_FILE_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_FILE_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_FILES_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_FILES_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_FILES_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_IMAGE_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_IMAGE_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_IMAGE_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_IMAGE_EDIT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_IMAGE_EDIT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_IMAGE_EDIT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_IMAGE_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_IMAGE_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_IMAGE_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case ENTITY_IMAGES_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ENTITY_IMAGES_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case ENTITY_IMAGES_ADD_FAILURE:
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
  