export const UPORT_GET_WEB3_REQUEST = 'UPORT_GET_WEB3_REQUEST'
export const UPORT_GET_WEB3_SUCCESS = 'UPORT_GET_WEB3_SUCCESS'
export const UPORT_GET_WEB3_FAILURE = 'UPORT_GET_WEB3_FAILURE'

export const UPORT_GET_PROVIDER_REQUEST = 'UPORT_GET_PROVIDER_REQUEST'
export const UPORT_GET_PROVIDER_SUCCESS = 'UPORT_GET_PROVIDER_SUCCESS'
export const UPORT_GET_PROVIDER_FAILURE = 'UPORT_GET_PROVIDER_FAILURE'

export const UPORT_GET_CREDENTIALS_REQUEST = 'UPORT_GET_CREDENTIALS_REQUEST'
export const UPORT_GET_CREDENTIALS_SUCCESS = 'UPORT_GET_CREDENTIALS_SUCCESS'
export const UPORT_GET_CREDENTIALS_FAILURE = 'UPORT_GET_CREDENTIALS_FAILURE'

export const UPORT_GET_ADDRESS_REQUEST = 'UPORT_GET_ADDRESS_REQUEST'
export const UPORT_GET_ADDRESS_SUCCESS = 'UPORT_GET_ADDRESS_SUCCESS'
export const UPORT_GET_ADDRESS_FAILURE = 'UPORT_GET_ADDRESS_FAILURE'

export const UPORT_GET_ATTEST_CREDENTIALS_REQUEST = 'UPORT_GET_ATTEST_CREDENTIALS_REQUEST'
export const UPORT_GET_ATTEST_CREDENTIALS_SUCCESS = 'UPORT_GET_ATTEST_CREDENTIALS_SUCCESS'
export const UPORT_GET_ATTEST_CREDENTIALS_FAILURE = 'UPORT_GET_ATTEST_CREDENTIALS_FAILURE'

export const UPORT_INIT_CONTRACT_REQUEST = 'UPORT_INIT_CONTRACT_REQUEST'
export const UPORT_INIT_CONTRACT_SUCCESS = 'UPORT_INIT_CONTRACT_SUCCESS'
export const UPORT_INIT_CONTRACT_FAILURE = 'UPORT_INIT_CONTRACT_FAILURE'

export const UPORT_SEND_TRANSACTION_REQUEST = 'UPORT_SEND_TRANSACTION_REQUEST'
export const UPORT_SEND_TRANSACTION_SUCCESS = 'UPORT_SEND_TRANSACTION_SUCCESS'
export const UPORT_SEND_TRANSACTION_FAILURE = 'UPORT_SEND_TRANSACTION_FAILURE'

export const UPORT_ADD_APP_PARAMETERS_REQUEST = 'UPORT_ADD_APP_PARAMETERS_REQUEST'
export const UPORT_ADD_APP_PARAMETERS_SUCCESS = 'UPORT_ADD_APP_PARAMETERS_SUCCESS'
export const UPORT_ADD_APP_PARAMETERS_FAILURE = 'UPORT_ADD_APP_PARAMETERS_FAILURE'
// uPort :: GetWeb3 |  UPORT_GET_WEB3
export const uPortGetWeb3Request = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_WEB3_REQUEST,
  payload,
  metadata
})

export const uPortGetWeb3Success = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_WEB3_SUCCESS,
  payload,
  metadata
})

export const uPortGetWeb3Failure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_WEB3_FAILURE,
  payload,
  metadata
})
  
// uPort :: GetProvider |  UPORT_GET_PROVIDER
export const uPortGetProviderRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_PROVIDER_REQUEST,
  payload,
  metadata
})

export const uPortGetProviderSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_PROVIDER_SUCCESS,
  payload,
  metadata
})

export const uPortGetProviderFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_PROVIDER_FAILURE,
  payload,
  metadata
})
  
// uPort :: GetCredentials |  UPORT_GET_CREDENTIALS
export const uPortGetCredentialsRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_CREDENTIALS_REQUEST,
  payload,
  metadata
})

export const uPortGetCredentialsSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_CREDENTIALS_SUCCESS,
  payload,
  metadata
})

export const uPortGetCredentialsFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_CREDENTIALS_FAILURE,
  payload,
  metadata
})
  
// uPort :: GetAddress |  UPORT_GET_ADDRESS
export const uPortGetAddressRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_ADDRESS_REQUEST,
  payload,
  metadata
})

export const uPortGetAddressSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_ADDRESS_SUCCESS,
  payload,
  metadata
})

export const uPortGetAddressFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_ADDRESS_FAILURE,
  payload,
  metadata
})
  
// uPort :: GetAttestCredentials |  UPORT_GET_ATTEST_CREDENTIALS
export const uPortGetAttestCredentialsRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_ATTEST_CREDENTIALS_REQUEST,
  payload,
  metadata
})

export const uPortGetAttestCredentialsSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_ATTEST_CREDENTIALS_SUCCESS,
  payload,
  metadata
})

export const uPortGetAttestCredentialsFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_GET_ATTEST_CREDENTIALS_FAILURE,
  payload,
  metadata
})
  
// uPort :: InitContract |  UPORT_INIT_CONTRACT
export const uPortInitContractRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_INIT_CONTRACT_REQUEST,
  payload,
  metadata
})

export const uPortInitContractSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_INIT_CONTRACT_SUCCESS,
  payload,
  metadata
})

export const uPortInitContractFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_INIT_CONTRACT_FAILURE,
  payload,
  metadata
})
  
// uPort :: SendTransaction |  UPORT_SEND_TRANSACTION
export const uPortSendTransactionRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_SEND_TRANSACTION_REQUEST,
  payload,
  metadata
})

export const uPortSendTransactionSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_SEND_TRANSACTION_SUCCESS,
  payload,
  metadata
})

export const uPortSendTransactionFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_SEND_TRANSACTION_FAILURE,
  payload,
  metadata
})
  
// uPort :: AddAppParameters |  UPORT_ADD_APP_PARAMETERS
export const uPortAddAppParametersRequest = ({payload = {}, metadata = {}}) => ({
  type: UPORT_ADD_APP_PARAMETERS_REQUEST,
  payload,
  metadata
})

export const uPortAddAppParametersSuccess = ({payload = {}, metadata = {}}) => ({
  type: UPORT_ADD_APP_PARAMETERS_SUCCESS,
  payload,
  metadata
})

export const uPortAddAppParametersFailure = ({payload = {}, metadata = {}}) => ({
  type: UPORT_ADD_APP_PARAMETERS_FAILURE,
  payload,
  metadata
})