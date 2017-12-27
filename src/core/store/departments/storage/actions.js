export const STORAGE_UPLOAD_FILE_REQUEST = 'STORAGE_UPLOAD_FILE_REQUEST'
export const STORAGE_UPLOAD_FILE_SUCCESS = 'STORAGE_UPLOAD_FILE_SUCCESS'
export const STORAGE_UPLOAD_FILE_FAILURE = 'STORAGE_UPLOAD_FILE_FAILURE'

export const STORAGE_DOWNLOAD_URL_REQUEST = 'STORAGE_DOWNLOAD_URL_REQUEST'
export const STORAGE_DOWNLOAD_URL_SUCCESS = 'STORAGE_DOWNLOAD_URL_SUCCESS'
export const STORAGE_DOWNLOAD_URL_FAILURE = 'STORAGE_DOWNLOAD_URL_FAILURE'

export const STORAGE_DELETE_FILE_REQUEST = 'STORAGE_DELETE_FILE_REQUEST'
export const STORAGE_DELETE_FILE_SUCCESS = 'STORAGE_DELETE_FILE_SUCCESS'
export const STORAGE_DELETE_FILE_FAILURE = 'STORAGE_DELETE_FILE_FAILURE'
// storage :: UploadFile |  STORAGE_UPLOAD_FILE
export const storageUploadFileRequest = ({payload, metadata}) => ({
  type: STORAGE_UPLOAD_FILE_REQUEST,
  payload,
  metadata
})

export const storageUploadFileSuccess = ({payload, metadata}) => ({
  type: STORAGE_UPLOAD_FILE_SUCCESS,
  payload,
  metadata
})

export const storageUploadFileFailure = ({payload, metadata}) => ({
  type: STORAGE_UPLOAD_FILE_FAILURE,
  payload,
  metadata
})
  
// storage :: DownloadUrl |  STORAGE_DOWNLOAD_URL
export const storageDownloadUrlRequest = ({payload, metadata}) => ({
  type: STORAGE_DOWNLOAD_URL_REQUEST,
  payload,
  metadata
})

export const storageDownloadUrlSuccess = ({payload, metadata}) => ({
  type: STORAGE_DOWNLOAD_URL_SUCCESS,
  payload,
  metadata
})

export const storageDownloadUrlFailure = ({payload, metadata}) => ({
  type: STORAGE_DOWNLOAD_URL_FAILURE,
  payload,
  metadata
})
  
// storage :: DeleteFile |  STORAGE_DELETE_FILE
export const storageDeleteFileRequest = ({payload, metadata}) => ({
  type: STORAGE_DELETE_FILE_REQUEST,
  payload,
  metadata
})

export const storageDeleteFileSuccess = ({payload, metadata}) => ({
  type: STORAGE_DELETE_FILE_SUCCESS,
  payload,
  metadata
})

export const storageDeleteFileFailure = ({payload, metadata}) => ({
  type: STORAGE_DELETE_FILE_FAILURE,
  payload,
  metadata
})