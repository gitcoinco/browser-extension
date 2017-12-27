export const SHAPESHIFT_GET_COUNT_REQUEST = 'SHAPESHIFT_GET_COUNT_REQUEST'
export const SHAPESHIFT_GET_COUNT_SUCCESS = 'SHAPESHIFT_GET_COUNT_SUCCESS'
export const SHAPESHIFT_GET_COUNT_FAILURE = 'SHAPESHIFT_GET_COUNT_FAILURE'

export const SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST = 'SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST'
export const SHAPESHIFT_GET_DEPOSIT_LIMIT_SUCCESS = 'SHAPESHIFT_GET_DEPOSIT_LIMIT_SUCCESS'
export const SHAPESHIFT_GET_DEPOSIT_LIMIT_FAILURE = 'SHAPESHIFT_GET_DEPOSIT_LIMIT_FAILURE'

export const SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST = 'SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST'
export const SHAPESHIFT_GET_EXCHANGE_RATE_SUCCESS = 'SHAPESHIFT_GET_EXCHANGE_RATE_SUCCESS'
export const SHAPESHIFT_GET_EXCHANGE_RATE_FAILURE = 'SHAPESHIFT_GET_EXCHANGE_RATE_FAILURE'

export const SHAPESHIFT_GET_MARKET_INFO_REQUEST = 'SHAPESHIFT_GET_MARKET_INFO_REQUEST'
export const SHAPESHIFT_GET_MARKET_INFO_SUCCESS = 'SHAPESHIFT_GET_MARKET_INFO_SUCCESS'
export const SHAPESHIFT_GET_MARKET_INFO_FAILURE = 'SHAPESHIFT_GET_MARKET_INFO_FAILURE'

export const SHAPESHIFT_GET_RECENT_REQUEST = 'SHAPESHIFT_GET_RECENT_REQUEST'
export const SHAPESHIFT_GET_RECENT_SUCCESS = 'SHAPESHIFT_GET_RECENT_SUCCESS'
export const SHAPESHIFT_GET_RECENT_FAILURE = 'SHAPESHIFT_GET_RECENT_FAILURE'

export const SHAPESHIFT_GET_STATUS_REQUEST = 'SHAPESHIFT_GET_STATUS_REQUEST'
export const SHAPESHIFT_GET_STATUS_SUCCESS = 'SHAPESHIFT_GET_STATUS_SUCCESS'
export const SHAPESHIFT_GET_STATUS_FAILURE = 'SHAPESHIFT_GET_STATUS_FAILURE'

export const SHAPESHIFT_GET_TRANSACTIONS_REQUEST = 'SHAPESHIFT_GET_TRANSACTIONS_REQUEST'
export const SHAPESHIFT_GET_TRANSACTIONS_SUCCESS = 'SHAPESHIFT_GET_TRANSACTIONS_SUCCESS'
export const SHAPESHIFT_GET_TRANSACTIONS_FAILURE = 'SHAPESHIFT_GET_TRANSACTIONS_FAILURE'

export const SHAPESHIFT_START_SHIFT_REQUEST = 'SHAPESHIFT_START_SHIFT_REQUEST'
export const SHAPESHIFT_START_SHIFT_SUCCESS = 'SHAPESHIFT_START_SHIFT_SUCCESS'
export const SHAPESHIFT_START_SHIFT_FAILURE = 'SHAPESHIFT_START_SHIFT_FAILURE'

export const SHAPESHIFT_STATUS_SHIFT_REQUEST = 'SHAPESHIFT_STATUS_SHIFT_REQUEST'
export const SHAPESHIFT_STATUS_SHIFT_SUCCESS = 'SHAPESHIFT_STATUS_SHIFT_SUCCESS'
export const SHAPESHIFT_STATUS_SHIFT_FAILURE = 'SHAPESHIFT_STATUS_SHIFT_FAILURE'
// shapeshift :: GetCount |  SHAPESHIFT_GET_COUNT
export const shapeshiftGetCountRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_COUNT_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetCountSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_COUNT_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetCountFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_COUNT_FAILURE,
  payload,
  metadata
})

// shapeshift :: GetDepositLimit |  SHAPESHIFT_GET_DEPOSIT_LIMIT
export const shapeshiftGetDepositLimitRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetDepositLimitSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_DEPOSIT_LIMIT_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetDepositLimitFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_DEPOSIT_LIMIT_FAILURE,
  payload,
  metadata
})

// shapeshift :: GetExchangeRate |  SHAPESHIFT_GET_EXCHANGE_RATE
export const shapeshiftGetExchangeRateRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetExchangeRateSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_EXCHANGE_RATE_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetExchangeRateFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_EXCHANGE_RATE_FAILURE,
  payload,
  metadata
})

// shapeshift :: GetMarketInfo |  SHAPESHIFT_GET_MARKET_INFO
export const shapeshiftGetMarketInfoRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_MARKET_INFO_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetMarketInfoSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_MARKET_INFO_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetMarketInfoFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_MARKET_INFO_FAILURE,
  payload,
  metadata
})

// shapeshift :: GetRecent |  SHAPESHIFT_GET_RECENT
export const shapeshiftGetRecentRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_RECENT_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetRecentSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_RECENT_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetRecentFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_RECENT_FAILURE,
  payload,
  metadata
})

// shapeshift :: GetStatus |  SHAPESHIFT_GET_STATUS
export const shapeshiftGetStatusRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_STATUS_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetStatusSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_STATUS_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetStatusFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_STATUS_FAILURE,
  payload,
  metadata
})

// shapeshift :: GetTransactions |  SHAPESHIFT_GET_TRANSACTIONS
export const shapeshiftGetTransactionsRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_TRANSACTIONS_REQUEST,
  payload,
  metadata
})

export const shapeshiftGetTransactionsSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_TRANSACTIONS_SUCCESS,
  payload,
  metadata
})

export const shapeshiftGetTransactionsFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_GET_TRANSACTIONS_FAILURE,
  payload,
  metadata
})

// shapeshift :: StartShift |  SHAPESHIFT_START_SHIFT
export const shapeshiftStartShiftRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_START_SHIFT_REQUEST,
  payload,
  metadata
})

export const shapeshiftStartShiftSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_START_SHIFT_SUCCESS,
  payload,
  metadata
})

export const shapeshiftStartShiftFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_START_SHIFT_FAILURE,
  payload,
  metadata
})

// shapeshift :: StatusShift |  SHAPESHIFT_STATUS_SHIFT
export const shapeshiftStatusShiftRequest = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_STATUS_SHIFT_REQUEST,
  payload,
  metadata
})

export const shapeshiftStatusShiftSuccess = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_STATUS_SHIFT_SUCCESS,
  payload,
  metadata
})

export const shapeshiftStatusShiftFailure = ({payload = {}, metadata = {}}) => ({
  type: SHAPESHIFT_STATUS_SHIFT_FAILURE,
  payload,
  metadata
})