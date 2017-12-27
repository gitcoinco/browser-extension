/* ------------------------- External Dependencies -------------------------- */
import { put, takeEvery, call } from 'redux-saga/effects';

import actions from './actions'
import scriptly from 'scriptly'
/* ------------------------- Internal Dependencies -------------------------- */
export function * coreInitialize ({payload, metadata}) {
  try {

    yield put(actions.coreInitialize("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.coreInitialize("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * coreStart ({payload, metadata}) {
  try {

    yield put(actions.coreStart.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.coreStart.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * coreStop ({payload, metadata}) {
  try {

    yield put(actions.coreStop.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.coreStop.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * threadsCountGet ({payload, metadata}) {
  try {

    yield put(actions.threadsCountGet.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.threadsCountGet.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * threadsCountSet ({payload, metadata}) {
  try {

    yield put(actions.threadsCountSet.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.threadsCountSet.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * threadsAutoGet ({payload, metadata}) {
  try {

    yield put(actions.threadsAutoGet.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.threadsAutoGet.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * threadsAutoSet ({payload, metadata}) {
  try {

    yield put(actions.threadsAutoSet.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.threadsAutoSet.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * hashTotal ({payload, metadata}) {
  try {

    yield put(actions.hashTotal.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.hashTotal.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * hashAverage ({payload, metadata}) {
  try {

    yield put(actions.hashAverage.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.hashAverage.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * hashAccepted ({payload, metadata}) {
  try {

    yield put(actions.hashAccepted.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.hashAccepted.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * tokenGet ({payload, metadata}) {
  try {

    yield put(actions.tokenGet.success(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.tokenGet.failure(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}


export default function* coinhiveSaga() {
  yield [
   takeEvery(actions.CORE_INITIALIZE.REQUEST, coreInitialize),
    takeEvery(actions.CORE_START.REQUEST, coreStart),
    takeEvery(actions.CORE_STOP.REQUEST, coreStop),

   takeEvery(actions.THREADS_COUNT_GET.REQUEST, threadsCountGet),
    takeEvery(actions.THREADS_COUNT_SET.REQUEST, threadsCountSet),
    takeEvery(actions.THREADS_AUTO_GET.REQUEST, threadsAutoGet),
    takeEvery(actions.THREADS_AUTO_SET.REQUEST, threadsAutoSet),

   takeEvery(actions.HASH_TOTAL.REQUEST, hashTotal),
    takeEvery(actions.HASH_AVERAGE.REQUEST, hashAverage),
    takeEvery(actions.HASH_ACCEPTED.REQUEST, hashAccepted),

   takeEvery(actions.TOKEN_GET.REQUEST, tokenGet),

  ];
}