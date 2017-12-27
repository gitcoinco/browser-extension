export const STORJ_KEY_PAIR_GENERATE_REQUEST = 'STORJ_KEY_PAIR_GENERATE_REQUEST'
export const STORJ_KEY_PAIR_GENERATE_SUCCESS = 'STORJ_KEY_PAIR_GENERATE_SUCCESS'
export const STORJ_KEY_PAIR_GENERATE_FAILURE = 'STORJ_KEY_PAIR_GENERATE_FAILURE'

export const STORJ_KEY_PAIR_PUBLIC_REQUEST = 'STORJ_KEY_PAIR_PUBLIC_REQUEST'
export const STORJ_KEY_PAIR_PUBLIC_SUCCESS = 'STORJ_KEY_PAIR_PUBLIC_SUCCESS'
export const STORJ_KEY_PAIR_PUBLIC_FAILURE = 'STORJ_KEY_PAIR_PUBLIC_FAILURE'

export const STORJ_KEY_PAIR_PRIVATE_REQUEST = 'STORJ_KEY_PAIR_PRIVATE_REQUEST'
export const STORJ_KEY_PAIR_PRIVATE_SUCCESS = 'STORJ_KEY_PAIR_PRIVATE_SUCCESS'
export const STORJ_KEY_PAIR_PRIVATE_FAILURE = 'STORJ_KEY_PAIR_PRIVATE_FAILURE'

export const STORJ_KEY_PAIR_SIGN_REQUEST = 'STORJ_KEY_PAIR_SIGN_REQUEST'
export const STORJ_KEY_PAIR_SIGN_SUCCESS = 'STORJ_KEY_PAIR_SIGN_SUCCESS'
export const STORJ_KEY_PAIR_SIGN_FAILURE = 'STORJ_KEY_PAIR_SIGN_FAILURE'

export const STORJ_KEY_PAIR_GET_NODE_ID_REQUEST = 'STORJ_KEY_PAIR_GET_NODE_ID_REQUEST'
export const STORJ_KEY_PAIR_GET_NODE_ID_SUCCESS = 'STORJ_KEY_PAIR_GET_NODE_ID_SUCCESS'
export const STORJ_KEY_PAIR_GET_NODE_ID_FAILURE = 'STORJ_KEY_PAIR_GET_NODE_ID_FAILURE'

export const STORJ_KEY_PAIR_GET_ADDRESS_REQUEST = 'STORJ_KEY_PAIR_GET_ADDRESS_REQUEST'
export const STORJ_KEY_PAIR_GET_ADDRESS_SUCCESS = 'STORJ_KEY_PAIR_GET_ADDRESS_SUCCESS'
export const STORJ_KEY_PAIR_GET_ADDRESS_FAILURE = 'STORJ_KEY_PAIR_GET_ADDRESS_FAILURE'

export const STORJ_KEY_GENERATE_REQUEST = 'STORJ_KEY_GENERATE_REQUEST'
export const STORJ_KEY_GENERATE_SUCCESS = 'STORJ_KEY_GENERATE_SUCCESS'
export const STORJ_KEY_GENERATE_FAILURE = 'STORJ_KEY_GENERATE_FAILURE'

export const STORJ_KEY_REGISTER_REQUEST = 'STORJ_KEY_REGISTER_REQUEST'
export const STORJ_KEY_REGISTER_SUCCESS = 'STORJ_KEY_REGISTER_SUCCESS'
export const STORJ_KEY_REGISTER_FAILURE = 'STORJ_KEY_REGISTER_FAILURE'

export const STORJ_KEY_REMOVE_REQUEST = 'STORJ_KEY_REMOVE_REQUEST'
export const STORJ_KEY_REMOVE_SUCCESS = 'STORJ_KEY_REMOVE_SUCCESS'
export const STORJ_KEY_REMOVE_FAILURE = 'STORJ_KEY_REMOVE_FAILURE'

export const STORJ_KEYS_LIST_REQUEST = 'STORJ_KEYS_LIST_REQUEST'
export const STORJ_KEYS_LIST_SUCCESS = 'STORJ_KEYS_LIST_SUCCESS'
export const STORJ_KEYS_LIST_FAILURE = 'STORJ_KEYS_LIST_FAILURE'

export const STORJ_ENCRYPTION_KEY_GENERATE_REQUEST = 'STORJ_ENCRYPTION_KEY_GENERATE_REQUEST'
export const STORJ_ENCRYPTION_KEY_GENERATE_SUCCESS = 'STORJ_ENCRYPTION_KEY_GENERATE_SUCCESS'
export const STORJ_ENCRYPTION_KEY_GENERATE_FAILURE = 'STORJ_ENCRYPTION_KEY_GENERATE_FAILURE'

export const STORJ_FILE_GET_REQUEST = 'STORJ_FILE_GET_REQUEST'
export const STORJ_FILE_GET_SUCCESS = 'STORJ_FILE_GET_SUCCESS'
export const STORJ_FILE_GET_FAILURE = 'STORJ_FILE_GET_FAILURE'

export const STORJ_FILE_CREATE_REQUEST = 'STORJ_FILE_CREATE_REQUEST'
export const STORJ_FILE_CREATE_SUCCESS = 'STORJ_FILE_CREATE_SUCCESS'
export const STORJ_FILE_CREATE_FAILURE = 'STORJ_FILE_CREATE_FAILURE'

export const STORJ_FILE_DELETE_REQUEST = 'STORJ_FILE_DELETE_REQUEST'
export const STORJ_FILE_DELETE_SUCCESS = 'STORJ_FILE_DELETE_SUCCESS'
export const STORJ_FILE_DELETE_FAILURE = 'STORJ_FILE_DELETE_FAILURE'

export const STORJ_FILES_LIST_REQUEST = 'STORJ_FILES_LIST_REQUEST'
export const STORJ_FILES_LIST_SUCCESS = 'STORJ_FILES_LIST_SUCCESS'
export const STORJ_FILES_LIST_FAILURE = 'STORJ_FILES_LIST_FAILURE'

export const STORJ_BUCKET_GET_REQUEST = 'STORJ_BUCKET_GET_REQUEST'
export const STORJ_BUCKET_GET_SUCCESS = 'STORJ_BUCKET_GET_SUCCESS'
export const STORJ_BUCKET_GET_FAILURE = 'STORJ_BUCKET_GET_FAILURE'

export const STORJ_BUCKET_CREATE_REQUEST = 'STORJ_BUCKET_CREATE_REQUEST'
export const STORJ_BUCKET_CREATE_SUCCESS = 'STORJ_BUCKET_CREATE_SUCCESS'
export const STORJ_BUCKET_CREATE_FAILURE = 'STORJ_BUCKET_CREATE_FAILURE'

export const STORJ_BUCKET_DELETE_REQUEST = 'STORJ_BUCKET_DELETE_REQUEST'
export const STORJ_BUCKET_DELETE_SUCCESS = 'STORJ_BUCKET_DELETE_SUCCESS'
export const STORJ_BUCKET_DELETE_FAILURE = 'STORJ_BUCKET_DELETE_FAILURE'

export const STORJ_BUCKET_MAKE_PUBLIC_REQUEST = 'STORJ_BUCKET_MAKE_PUBLIC_REQUEST'
export const STORJ_BUCKET_MAKE_PUBLIC_SUCCESS = 'STORJ_BUCKET_MAKE_PUBLIC_SUCCESS'
export const STORJ_BUCKET_MAKE_PUBLIC_FAILURE = 'STORJ_BUCKET_MAKE_PUBLIC_FAILURE'

export const STORJ_BUCKETS_LIST_REQUEST = 'STORJ_BUCKETS_LIST_REQUEST'
export const STORJ_BUCKETS_LIST_SUCCESS = 'STORJ_BUCKETS_LIST_SUCCESS'
export const STORJ_BUCKETS_LIST_FAILURE = 'STORJ_BUCKETS_LIST_FAILURE'
// storj :: KeyPairGenerate |  STORJ_KEY_PAIR_GENERATE
export const storjKeyPairGenerateRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GENERATE_REQUEST,
  payload,
  metadata
})

export const storjKeyPairGenerateSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GENERATE_SUCCESS,
  payload,
  metadata
})

export const storjKeyPairGenerateFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GENERATE_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyPairPublic |  STORJ_KEY_PAIR_PUBLIC
export const storjKeyPairPublicRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_PUBLIC_REQUEST,
  payload,
  metadata
})

export const storjKeyPairPublicSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_PUBLIC_SUCCESS,
  payload,
  metadata
})

export const storjKeyPairPublicFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_PUBLIC_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyPairPrivate |  STORJ_KEY_PAIR_PRIVATE
export const storjKeyPairPrivateRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_PRIVATE_REQUEST,
  payload,
  metadata
})

export const storjKeyPairPrivateSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_PRIVATE_SUCCESS,
  payload,
  metadata
})

export const storjKeyPairPrivateFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_PRIVATE_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyPairSign |  STORJ_KEY_PAIR_SIGN
export const storjKeyPairSignRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_SIGN_REQUEST,
  payload,
  metadata
})

export const storjKeyPairSignSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_SIGN_SUCCESS,
  payload,
  metadata
})

export const storjKeyPairSignFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_SIGN_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyPairGetNodeId |  STORJ_KEY_PAIR_GET_NODE_ID
export const storjKeyPairGetNodeIdRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GET_NODE_ID_REQUEST,
  payload,
  metadata
})

export const storjKeyPairGetNodeIdSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GET_NODE_ID_SUCCESS,
  payload,
  metadata
})

export const storjKeyPairGetNodeIdFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GET_NODE_ID_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyPairGetAddress |  STORJ_KEY_PAIR_GET_ADDRESS
export const storjKeyPairGetAddressRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GET_ADDRESS_REQUEST,
  payload,
  metadata
})

export const storjKeyPairGetAddressSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GET_ADDRESS_SUCCESS,
  payload,
  metadata
})

export const storjKeyPairGetAddressFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_PAIR_GET_ADDRESS_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyGenerate |  STORJ_KEY_GENERATE
export const storjKeyGenerateRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_GENERATE_REQUEST,
  payload,
  metadata
})

export const storjKeyGenerateSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_GENERATE_SUCCESS,
  payload,
  metadata
})

export const storjKeyGenerateFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_GENERATE_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyRegister |  STORJ_KEY_REGISTER
export const storjKeyRegisterRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_REGISTER_REQUEST,
  payload,
  metadata
})

export const storjKeyRegisterSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_REGISTER_SUCCESS,
  payload,
  metadata
})

export const storjKeyRegisterFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_REGISTER_FAILURE,
  payload,
  metadata
})
  
// storj :: KeyRemove |  STORJ_KEY_REMOVE
export const storjKeyRemoveRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_REMOVE_REQUEST,
  payload,
  metadata
})

export const storjKeyRemoveSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_REMOVE_SUCCESS,
  payload,
  metadata
})

export const storjKeyRemoveFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEY_REMOVE_FAILURE,
  payload,
  metadata
})
  
// storj :: KeysList |  STORJ_KEYS_LIST
export const storjKeysListRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEYS_LIST_REQUEST,
  payload,
  metadata
})

export const storjKeysListSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEYS_LIST_SUCCESS,
  payload,
  metadata
})

export const storjKeysListFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_KEYS_LIST_FAILURE,
  payload,
  metadata
})
  
// storj :: EncryptionKeyGenerate |  STORJ_ENCRYPTION_KEY_GENERATE
export const storjEncryptionKeyGenerateRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_ENCRYPTION_KEY_GENERATE_REQUEST,
  payload,
  metadata
})

export const storjEncryptionKeyGenerateSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_ENCRYPTION_KEY_GENERATE_SUCCESS,
  payload,
  metadata
})

export const storjEncryptionKeyGenerateFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_ENCRYPTION_KEY_GENERATE_FAILURE,
  payload,
  metadata
})
  
// storj :: FileGet |  STORJ_FILE_GET
export const storjFileGetRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_GET_REQUEST,
  payload,
  metadata
})

export const storjFileGetSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_GET_SUCCESS,
  payload,
  metadata
})

export const storjFileGetFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_GET_FAILURE,
  payload,
  metadata
})
  
// storj :: FileCreate |  STORJ_FILE_CREATE
export const storjFileCreateRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_CREATE_REQUEST,
  payload,
  metadata
})

export const storjFileCreateSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_CREATE_SUCCESS,
  payload,
  metadata
})

export const storjFileCreateFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_CREATE_FAILURE,
  payload,
  metadata
})
  
// storj :: FileDelete |  STORJ_FILE_DELETE
export const storjFileDeleteRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_DELETE_REQUEST,
  payload,
  metadata
})

export const storjFileDeleteSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_DELETE_SUCCESS,
  payload,
  metadata
})

export const storjFileDeleteFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILE_DELETE_FAILURE,
  payload,
  metadata
})
  
// storj :: FilesList |  STORJ_FILES_LIST
export const storjFilesListRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILES_LIST_REQUEST,
  payload,
  metadata
})

export const storjFilesListSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILES_LIST_SUCCESS,
  payload,
  metadata
})

export const storjFilesListFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_FILES_LIST_FAILURE,
  payload,
  metadata
})
  
// storj :: BucketGet |  STORJ_BUCKET_GET
export const storjBucketGetRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_GET_REQUEST,
  payload,
  metadata
})

export const storjBucketGetSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_GET_SUCCESS,
  payload,
  metadata
})

export const storjBucketGetFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_GET_FAILURE,
  payload,
  metadata
})
  
// storj :: BucketCreate |  STORJ_BUCKET_CREATE
export const storjBucketCreateRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_CREATE_REQUEST,
  payload,
  metadata
})

export const storjBucketCreateSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_CREATE_SUCCESS,
  payload,
  metadata
})

export const storjBucketCreateFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_CREATE_FAILURE,
  payload,
  metadata
})
  
// storj :: BucketDelete |  STORJ_BUCKET_DELETE
export const storjBucketDeleteRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_DELETE_REQUEST,
  payload,
  metadata
})

export const storjBucketDeleteSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_DELETE_SUCCESS,
  payload,
  metadata
})

export const storjBucketDeleteFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_DELETE_FAILURE,
  payload,
  metadata
})
  
// storj :: BucketMakePublic |  STORJ_BUCKET_MAKE_PUBLIC
export const storjBucketMakePublicRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_MAKE_PUBLIC_REQUEST,
  payload,
  metadata
})

export const storjBucketMakePublicSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_MAKE_PUBLIC_SUCCESS,
  payload,
  metadata
})

export const storjBucketMakePublicFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKET_MAKE_PUBLIC_FAILURE,
  payload,
  metadata
})
  
// storj :: BucketsList |  STORJ_BUCKETS_LIST
export const storjBucketsListRequest = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKETS_LIST_REQUEST,
  payload,
  metadata
})

export const storjBucketsListSuccess = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKETS_LIST_SUCCESS,
  payload,
  metadata
})

export const storjBucketsListFailure = ({payload = {}, metadata = {}}) => ({
  type: STORJ_BUCKETS_LIST_FAILURE,
  payload,
  metadata
})