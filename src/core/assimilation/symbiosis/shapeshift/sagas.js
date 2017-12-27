/* ------------------------- External Dependencies -------------------------- */
import { put, takeEvery } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import {
  SHAPESHIFT_GET_COUNT_REQUEST,
  SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST,
  SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST,
  SHAPESHIFT_GET_MARKET_INFO_REQUEST,
  SHAPESHIFT_GET_RECENT_REQUEST,
  SHAPESHIFT_GET_STATUS_REQUEST,
  SHAPESHIFT_GET_TRANSACTIONS_REQUEST,
  SHAPESHIFT_START_SHIFT_REQUEST,
  SHAPESHIFT_STATUS_SHIFT_REQUEST,
} from './actions'
import {
  shapeshiftGetCountSuccess,
  shapeshiftGetCountFailure,
  shapeshiftGetDepositLimitSuccess,
  shapeshiftGetDepositLimitFailure,
  shapeshiftGetExchangeRateSuccess,
  shapeshiftGetExchangeRateFailure,
  shapeshiftGetMarketInfoSuccess,
  shapeshiftGetMarketInfoFailure,
  shapeshiftGetRecentSuccess,
  shapeshiftGetRecentFailure,
  shapeshiftGetStatusSuccess,
  shapeshiftGetStatusFailure,
  shapeshiftGetTransactionsSuccess,
  shapeshiftGetTransactionsFailure,
  shapeshiftStartShiftSuccess,
  shapeshiftStartShiftFailure,
  shapeshiftStatusShiftSuccess,
  shapeshiftStatusShiftFailure,
} from './actions'

/*---*--- Get Count ---*---*/
function* getCount({payload, metadata}) {
  try {

    yield put(shapeshiftGetCountSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetCountFailure({payload: e, metadata}))
  }
}


/*---*--- Get Deposit Limit ---*---*/
function* getDepositLimit({payload, metadata}) {
  try {

    yield put(shapeshiftGetDepositLimitSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetDepositLimitFailure({payload: e, metadata}))
  }
}


/*---*--- Get Exchange Rate ---*---*/
function* getExchangeRate({payload, metadata}) {
  try {

    yield put(shapeshiftGetExchangeRateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetExchangeRateFailure({payload: e, metadata}))
  }
}


/*---*--- Get Market Info ---*---*/
function* getMarketInfo({payload, metadata}) {
  try {

    yield put(shapeshiftGetMarketInfoSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetMarketInfoFailure({payload: e, metadata}))
  }
}


/*---*--- Get Recent ---*---*/
function* getRecent({payload, metadata}) {
  try {

    yield put(shapeshiftGetRecentSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetRecentFailure({payload: e, metadata}))
  }
}


/*---*--- Get Status ---*---*/
function* getStatus({payload, metadata}) {
  try {

    yield put(shapeshiftGetStatusSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetStatusFailure({payload: e, metadata}))
  }
}


/*---*--- Get Transactions ---*---*/
function* getTransactions({payload, metadata}) {
  try {

    yield put(shapeshiftGetTransactionsSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftGetTransactionsFailure({payload: e, metadata}))
  }
}


/*---*--- Start Shift ---*---*/
function* startShift({payload, metadata}) {
  try {

    yield put(shapeshiftStartShiftSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftStartShiftFailure({payload: e, metadata}))
  }
}


/*---*--- Status Shift ---*---*/
function* statusShift({payload, metadata}) {
  try {

    yield put(shapeshiftStatusShiftSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(shapeshiftStatusShiftFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(SHAPESHIFT_GET_COUNT_REQUEST, getCount),
   takeEvery(SHAPESHIFT_GET_DEPOSIT_LIMIT_REQUEST, getDepositLimit),
   takeEvery(SHAPESHIFT_GET_EXCHANGE_RATE_REQUEST, getExchangeRate),
   takeEvery(SHAPESHIFT_GET_MARKET_INFO_REQUEST, getMarketInfo),
   takeEvery(SHAPESHIFT_GET_RECENT_REQUEST, getRecent),
   takeEvery(SHAPESHIFT_GET_STATUS_REQUEST, getStatus),
   takeEvery(SHAPESHIFT_GET_TRANSACTIONS_REQUEST, getTransactions),
   takeEvery(SHAPESHIFT_START_SHIFT_REQUEST, startShift),
   takeEvery(SHAPESHIFT_STATUS_SHIFT_REQUEST, statusShift),
  ];
}