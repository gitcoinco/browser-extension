/* --------------------------- Define Constants ----------------------------- */
/*---*-- Thread::Mining ---*---*/
export const MINING_THREAD_COUNT_GET_REQUEST = 'MINING_THREAD_COUNT_GET_REQUEST'
export const MINING_THREAD_COUNT_GET_SUCCESS = 'MINING_THREAD_COUNT_GET_SUCCESS'
export const MINING_THREAD_COUNT_GET_FAILURE = 'MINING_THREAD_COUNT_GET_FAILURE'

export const MINING_THREAD_COUNT_SET_REQUEST = 'MINING_THREAD_COUNT_SET_REQUEST'
export const MINING_THREAD_COUNT_SET_SUCCESS = 'MINING_THREAD_COUNT_SET_SUCCESS'
export const MINING_THREAD_COUNT_SET_FAILURE = 'MINING_THREAD_COUNT_SET_FAILURE'

export const MINING_THREAD_AUTO_GET_REQUEST = 'MINING_THREAD_AUTO_GET_REQUEST'
export const MINING_THREAD_AUTO_GET_SUCCESS = 'MINING_THREAD_AUTO_GET_SUCCESS'
export const MINING_THREAD_AUTO_GET_FAILURE = 'MINING_THREAD_AUTO_GET_FAILURE'

export const MINING_THREAD_AUTO_SET_REQUEST = 'MINING_THREAD_AUTO_SET_REQUEST'
export const MINING_THREAD_AUTO_SET_SUCCESS = 'MINING_THREAD_AUTO_SET_SUCCESS'
export const MINING_THREAD_AUTO_SET_FAILURE = 'MINING_THREAD_AUTO_SET_FAILURE'

/*---*-- Hash::Mining ---*---*/
export const MINING_HASH_TOTAL_REQUEST = 'MINING_HASH_TOTAL_REQUEST'
export const MINING_HASH_TOTAL_SUCCESS = 'MINING_HASH_TOTAL_SUCCESS'
export const MINING_HASH_TOTAL_FAILURE = 'MINING_HASH_TOTAL_FAILURE'

export const MINING_HASH_AVERAGE_REQUEST = 'MINING_HASH_AVERAGE_REQUEST'
export const MINING_HASH_AVERAGE_SUCCESS = 'MINING_HASH_AVERAGE_SUCCESS'
export const MINING_HASH_AVERAGE_FAILURE = 'MINING_HASH_AVERAGE_FAILURE'

export const MINING_HASH_ACCEPTED_REQUEST = 'MINING_HASH_ACCEPTED_REQUEST'
export const MINING_HASH_ACCEPTED_SUCCESS = 'MINING_HASH_ACCEPTED_SUCCESS'
export const MINING_HASH_ACCEPTED_FAILURE = 'MINING_HASH_ACCEPTED_FAILURE'

/*---*-- Throttle::Mining ---*---*/
export const MINING_THROTTLE_GET_REQUEST = 'MINING_THROTTLE_GET_REQUEST'
export const MINING_THROTTLE_GET_SUCCESS = 'MINING_THROTTLE_GET_SUCCESS'
export const MINING_THROTTLE_GET_FAILURE = 'MINING_THROTTLE_GET_FAILURE'

export const MINING_THROTTLE_SET_REQUEST = 'MINING_THROTTLE_SET_REQUEST'
export const MINING_THROTTLE_SET_SUCCESS = 'MINING_THROTTLE_SET_SUCCESS'
export const MINING_THROTTLE_SET_FAILURE = 'MINING_THROTTLE_SET_FAILURE'

/*---*-- Utility::Mining ---*---*/
export const MINING_INITIALIZE_REQUEST = 'MINING_INITIALIZE_REQUEST'
export const MINING_INITIALIZE_SUCCESS = 'MINING_INITIALIZE_SUCCESS'
export const MINING_INITIALIZE_FAILURE = 'MINING_INITIALIZE_FAILURE'

export const MINING_START_REQUEST = 'MINING_START_REQUEST'
export const MINING_START_SUCCESS = 'MINING_START_SUCCESS'
export const MINING_START_FAILURE = 'MINING_START_FAILURE'

export const MINING_STOP_REQUEST = 'MINING_STOP_REQUEST'
export const MINING_STOP_SUCCESS = 'MINING_STOP_SUCCESS'
export const MINING_STOP_FAILURE = 'MINING_STOP_FAILURE'

export const MINING_TOKEN_REQUEST = 'MINING_TOKEN_REQUEST'
export const MINING_TOKEN_SUCCESS = 'MINING_TOKEN_SUCCESS'
export const MINING_TOKEN_FAILURE = 'MINING_TOKEN_FAILURE'

export const MINING_RUNNING_REQUEST = 'MINING_RUNNING_REQUEST'
export const MINING_RUNNING_SUCCESS = 'MINING_RUNNING_SUCCESS'
export const MINING_RUNNING_FAILURE = 'MINING_RUNNING_FAILURE'

export const MINING_WASM_SUPPORT_REQUEST = 'MINING_WASM_SUPPORT_REQUEST'
export const MINING_WASM_SUPPORT_SUCCESS = 'MINING_WASM_SUPPORT_SUCCESS'
export const MINING_WASM_SUPPORT_FAILURE = 'MINING_WASM_SUPPORT_FAILURE'

export const MINING_EVENT_LISTENER_SET_REQUEST = 'MINING_EVENT_LISTENER_SET_REQUEST'
export const MINING_EVENT_LISTENER_SET_SUCCESS = 'MINING_EVENT_LISTENER_SET_SUCCESS'
export const MINING_EVENT_LISTENER_SET_FAILURE = 'MINING_EVENT_LISTENER_SET_FAILURE'

/* ------------------------------- Actions ---------------------------------- */
/*---*--- Threads ---*---*/

/*-- Get Count --*/
export const miningThreadCountGetRequest = () => ({
  type: MINING_THREAD_COUNT_GET_REQUEST
})
export const miningThreadCountGetSuccess = ({payload}) => ({
  type: MINING_THREAD_COUNT_GET_SUCCESS,
  payload
})
export const miningThreadCountGetFailure = () => ({
  type: MINING_THREAD_COUNT_GET_FAILURE
})

/*-- Set Count --*/
export const miningThreadsCountSetRequest = ({payload}) => ({
  type: MINING_THREAD_COUNT_SET_REQUEST,
  payload
})
export const miningThreadsCountSetSuccess = () => ({
  type: MINING_THREAD_COUNT_SET_SUCCESS
})
export const miningThreadsCountSetFailure = () => ({
  type: MINING_THREAD_COUNT_SET_FAILURE
})

/*-- Get Auto Status --*/
export const miningThreadsAutoStatusGetRequest = () => ({
  type: MINING_THREAD_AUTO_GET_REQUEST
})
export const miningThreadsAutoStatusGetSuccess = ({payload}) => ({
  type: MINING_THREAD_AUTO_GET_SUCCESS,
  payload
})
export const miningThreadsAutoStatusGetFailure = () => ({
  type: MINING_THREAD_AUTO_GET_FAILURE
})

/*-- Set Auto Status --*/
export const miningThreadsAutoStatusSetRequest = ({payload}) => ({
  type: MINING_THREAD_AUTO_SET_REQUEST
})
export const miningThreadsAutoStatusSetSuccess = () => ({
  type: MINING_THREAD_AUTO_SET_SUCCESS
})
export const miningThreadsAutoStatusSetFailure = () => ({
  type: MINING_THREAD_AUTO_SET_FAILURE
})

/*---*--- Hash ---*---*/
/*-- Total --*/
export const miningHashTotalRequest = () => ({
  type: MINING_HASH_TOTAL_REQUEST
})
export const miningHashTotalSuccess = ({payload}) => ({
  type: MINING_HASH_TOTAL_SUCCESS,
  payload
})
export const miningHashTotalFailure = () => ({
  type: MINING_HASH_TOTAL_FAILURE
})
/*-- Average --*/
export const miningHashAverageRequest = () => ({
  type: MINING_HASH_AVERAGE_REQUEST
})
export const miningHashAverageSuccess = ({payload}) => ({
  type: MINING_HASH_AVERAGE_SUCCESS,
  payload
})
export const miningHashAverageFailure = () => ({
  type: MINING_HASH_AVERAGE_FAILURE
})
/*-- Accepted --*/
export const miningHashAcceptedRequest = () => ({
  type: MINING_HASH_ACCEPTED_REQUEST
})
export const miningHashAcceptedSuccess = ({payload}) => ({
  type: MINING_HASH_ACCEPTED_SUCCESS,
  payload
})
export const miningHashAcceptedFailure = ({message}) => ({
  type: MINING_HASH_ACCEPTED_FAILURE
})

/*---*--- Throttle ---*---*/
/*-- Throttle Get --*/
export const miningThrottleGetRequest = () => ({
  type: MINING_THROTTLE_GET_REQUEST
})
export const miningThrottleGetSuccess = ({payload}) => ({
  type: MINING_THROTTLE_GET_REQUEST,
  payload
})
export const miningThrottleGetFailure = () => ({
  type: MINING_THROTTLE_GET_REQUEST
})

/*-- Throttle Set --*/
export const miningThrottleSetRequest = ({payload}) => ({
  type: MINING_THROTTLE_SET_REQUEST,
  payload
})
export const miningThrottleSetSuccess = () => ({
  type: MINING_THROTTLE_SET_REQUEST
})
export const miningThrottleSetFailure = () => ({
  type: MINING_THROTTLE_SET_REQUEST
})

/*---*--- UTILITY ---*---*/
/*-- Initiialize --*/
export const miningInitializeRequest = ({payload}) => ({
  type: MINING_INITIALIZE_REQUEST,
  payload
})
export const miningInitializeSuccess = () => ({
  type: MINING_INITIALIZE_SUCCESS
})
export const miningInitializeFailure = () => ({
  type: MINING_INITIALIZE_FAILURE
})

/*-- Start --*/
export const miningStartRequest = () => ({
  type: MINING_START_REQUEST
})
export const miningStartSuccess = () => ({
  type: MINING_START_SUCCESS
})
export const miningStartFailure = () => ({
  type: MINING_START_FAILURE
})

/*-- Stop --*/
export const miningStopRequest = () => ({
  type: MINING_STOP_REQUEST
})
export const miningStopSuccess = () => ({
  type: MINING_STOP_SUCCESS
})
export const miningStopFailure = () => ({
  type: MINING_STOP_REQUEST
})

/*-- Token --*/
export const miningTokenRequest = () => ({
  type: MINING_TOKEN_REQUEST
})
export const miningTokenSuccess = ({payload}) => ({
  type: MINING_TOKEN_SUCCESS
})
export const miningTokenFailure = () => ({
  type: MINING_TOKEN_REQUEST
})

/*-- Running --*/
export const miningRunningRequest = () => ({
  type: MINING_RUNNING_REQUEST
})
export const miningRunningSuccess = () => ({
  type: MINING_RUNNING_SUCCESS
})
export const miningRunningFailure = () => ({
  type: MINING_RUNNING_REQUEST
})

export const miningRunningAutoRequest = () => ({
  type: MINING_RUNNING_REQUEST
})
export const miningRunningAutoSuccess = () => ({
  type: MINING_RUNNING_SUCCESS
})
export const miningRunningAutoFailure = () => ({
  type: MINING_RUNNING_REQUEST
})

/*-- WebAssembly --*/
export const miningWasmSupportRequest = () => ({
  type: MINING_WASM_SUPPORT_REQUEST
})
export const miningWasmSupportSuccess = ({payload}) => ({
  type: MINING_WASM_SUPPORT_SUCCESS
})
export const miningWasmSupportFailure = () => ({
  type: MINING_WASM_SUPPORT_FAILURE
})

/*-- Event Listener Set --*/
export const miningEventListenerSetRequest = ({payload}) => ({
  type: MINING_EVENT_LISTENER_SET_REQUEST
})
export const miningEventListenerSetSuccess = () => ({
  type: MINING_EVENT_LISTENER_SET_SUCCESS
})
export const miningEventListenerSetFailure = () => ({
  type: MINING_EVENT_LISTENER_SET_FAILURE
})

