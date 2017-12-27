export const DATABASE_WRITE_REQUEST = 'DATABASE_WRITE_REQUEST'
export const DATABASE_WRITE_SUCCESS = 'DATABASE_WRITE_SUCCESS'
export const DATABASE_WRITE_FAILURE = 'DATABASE_WRITE_FAILURE'

export const DATABASE_READ_REQUEST = 'DATABASE_READ_REQUEST'
export const DATABASE_READ_SUCCESS = 'DATABASE_READ_SUCCESS'
export const DATABASE_READ_FAILURE = 'DATABASE_READ_FAILURE'

export const DATABASE_CREATE_REQUEST = 'DATABASE_CREATE_REQUEST'
export const DATABASE_CREATE_SUCCESS = 'DATABASE_CREATE_SUCCESS'
export const DATABASE_CREATE_FAILURE = 'DATABASE_CREATE_FAILURE'

export const DATABASE_UPDATE_REQUEST = 'DATABASE_UPDATE_REQUEST'
export const DATABASE_UPDATE_SUCCESS = 'DATABASE_UPDATE_SUCCESS'
export const DATABASE_UPDATE_FAILURE = 'DATABASE_UPDATE_FAILURE'

export const DATABASE_PATCH_REQUEST = 'DATABASE_PATCH_REQUEST'
export const DATABASE_PATCH_SUCCESS = 'DATABASE_PATCH_SUCCESS'
export const DATABASE_PATCH_FAILURE = 'DATABASE_PATCH_FAILURE'

export const DATABASE_DELETE_REQUEST = 'DATABASE_DELETE_REQUEST'
export const DATABASE_DELETE_SUCCESS = 'DATABASE_DELETE_SUCCESS'
export const DATABASE_DELETE_FAILURE = 'DATABASE_DELETE_FAILURE'

export const DATABASE_CHANNEL_REQUEST = 'DATABASE_CHANNEL_REQUEST'
export const DATABASE_CHANNEL_SUCCESS = 'DATABASE_CHANNEL_SUCCESS'
export const DATABASE_CHANNEL_FAILURE = 'DATABASE_CHANNEL_FAILURE'

export const DATABASE_SYNC_REQUEST = 'DATABASE_SYNC_REQUEST'
export const DATABASE_SYNC_SUCCESS = 'DATABASE_SYNC_SUCCESS'
export const DATABASE_SYNC_FAILURE = 'DATABASE_SYNC_FAILURE'
// database :: Write |  DATABASE_WRITE
export const databaseWriteRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_WRITE_REQUEST,
  payload,
  metadata
})

export const databaseWriteSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_WRITE_SUCCESS,
  payload,
  metadata
})

export const databaseWriteFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_WRITE_FAILURE,
  payload,
  metadata
})
  
// database :: Read |  DATABASE_READ
export const databaseReadRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_READ_REQUEST,
  payload,
  metadata
})

export const databaseReadSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_READ_SUCCESS,
  payload,
  metadata
})

export const databaseReadFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_READ_FAILURE,
  payload,
  metadata
})
  
// database :: Create |  DATABASE_CREATE
export const databaseCreateRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_CREATE_REQUEST,
  payload,
  metadata
})

export const databaseCreateSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_CREATE_SUCCESS,
  payload,
  metadata
})

export const databaseCreateFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_CREATE_FAILURE,
  payload,
  metadata
})
  
// database :: Update |  DATABASE_UPDATE
export const databaseUpdateRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_UPDATE_REQUEST,
  payload,
  metadata
})

export const databaseUpdateSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_UPDATE_SUCCESS,
  payload,
  metadata
})

export const databaseUpdateFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_UPDATE_FAILURE,
  payload,
  metadata
})
  
// database :: Patch |  DATABASE_PATCH
export const databasePatchRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_PATCH_REQUEST,
  payload,
  metadata
})

export const databasePatchSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_PATCH_SUCCESS,
  payload,
  metadata
})

export const databasePatchFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_PATCH_FAILURE,
  payload,
  metadata
})
  
// database :: Delete |  DATABASE_DELETE
export const databaseDeleteRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_DELETE_REQUEST,
  payload,
  metadata
})

export const databaseDeleteSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_DELETE_SUCCESS,
  payload,
  metadata
})

export const databaseDeleteFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_DELETE_FAILURE,
  payload,
  metadata
})
  
// database :: Channel |  DATABASE_CHANNEL
export const databaseChannelRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_CHANNEL_REQUEST,
  payload,
  metadata
})

export const databaseChannelSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_CHANNEL_SUCCESS,
  payload,
  metadata
})

export const databaseChannelFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_CHANNEL_FAILURE,
  payload,
  metadata
})
  
// database :: Sync |  DATABASE_SYNC
export const databaseSyncRequest = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_SYNC_REQUEST,
  payload,
  metadata
})

export const databaseSyncSuccess = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_SYNC_SUCCESS,
  payload,
  metadata
})

export const databaseSyncFailure = ({payload = {}, metadata = {}}) => ({
  type: DATABASE_SYNC_FAILURE,
  payload,
  metadata
})