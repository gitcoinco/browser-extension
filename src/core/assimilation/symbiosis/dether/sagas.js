/* ------------------------- External Dependencies -------------------------- */
import { put, takeEvery, call } from 'redux-saga/effects';
import actions from './actions'
import DetherJS from 'detherjs'

/* ------------------------- Internal Dependencies -------------------------- */
export function * tellerGet ({payload, metadata}) {
  try {

    yield put(actions.tellerGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.tellerGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * tellerBalance ({payload, metadata}) {
  try {

    yield put(actions.tellerBalance("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.tellerBalance("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * tellersGet ({payload, metadata}) {
  try {

    yield put(actions.tellersGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.tellersGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * tellersInZone ({payload, metadata}) {
  try {

    yield put(actions.tellersInZone("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.tellersInZone("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * sell_pointAdd ({payload, metadata}) {
  try {

    yield put(actions.sell_pointAdd("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.sell_pointAdd("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * sell_pointDelete ({payload, metadata}) {
  try {

    yield put(actions.sell_pointDelete("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.sell_pointDelete("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * buyerSend ({payload, metadata}) {
  try {

    yield put(actions.buyerSend("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.buyerSend("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}


export default function* detherSaga() {
  yield [
   takeEvery(actions.TELLER_GET.REQUEST, tellerGet),
    takeEvery(actions.TELLER_BALANCE.REQUEST, tellerBalance),

   takeEvery(actions.TELLERS_GET.REQUEST, tellersGet),
    takeEvery(actions.TELLERS_IN_ZONE.REQUEST, tellersInZone),

   takeEvery(actions.SELL_POINT_ADD.REQUEST, sell_pointAdd),
    takeEvery(actions.SELL_POINT_DELETE.REQUEST, sell_pointDelete),

   takeEvery(actions.BUYER_SEND.REQUEST, buyerSend),

  ];
}