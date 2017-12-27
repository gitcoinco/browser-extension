import { put, takeEvery, call } from 'redux-saga/effects';
import actions from './actions'


export function * filesAdd ({payload, metadata}) {
  try {

    yield put(actions.filesAdd("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesAdd("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * filesGet ({payload, metadata}) {
  try {

    yield put(actions.filesGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * filesCreateStream ({payload, metadata}) {
  try {

    yield put(actions.filesCreateStream("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesCreateStream("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * filesCat ({payload, metadata}) {
  try {

    yield put(actions.filesCat("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesCat("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * blocksAdd ({payload, metadata}) {
  try {

    yield put(actions.blocksAdd("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksAdd("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * blocksGet ({payload, metadata}) {
  try {

    yield put(actions.blocksGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * blocksCreateStream ({payload, metadata}) {
  try {

    yield put(actions.blocksCreateStream("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksCreateStream("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * blocksCat ({payload, metadata}) {
  try {

    yield put(actions.blocksCat("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksCat("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * dagPut ({payload, metadata}) {
  try {

    yield put(actions.dagPut("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.dagPut("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * dagGet ({payload, metadata}) {
  try {

    yield put(actions.dagGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.dagGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * dagTree ({payload, metadata}) {
  try {

    yield put(actions.dagTree("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.dagTree("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * objectNew ({payload, metadata}) {
  try {

    yield put(actions.objectNew("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectNew("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectPut ({payload, metadata}) {
  try {

    yield put(actions.objectPut("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectPut("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectGet ({payload, metadata}) {
  try {

    yield put(actions.objectGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectData ({payload, metadata}) {
  try {

    yield put(actions.objectData("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectData("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectLinks ({payload, metadata}) {
  try {

    yield put(actions.objectLinks("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectLinks("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectStat ({payload, metadata}) {
  try {

    yield put(actions.objectStat("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectStat("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}


export default function* ipfsSaga() {
  yield [
    takeEvery(actions.FILES_ADD.REQUEST, filesAdd),
    takeEvery(actions.FILES_GET.REQUEST, filesGet),
    takeEvery(actions.FILES_CREATE_STREAM.REQUEST, filesCreateStream),
    takeEvery(actions.FILES_CAT.REQUEST, filesCat),
    takeEvery(actions.BLOCKS_ADD.REQUEST, blocksAdd),
    takeEvery(actions.BLOCKS_GET.REQUEST, blocksGet),
    takeEvery(actions.BLOCKS_CREATE_STREAM.REQUEST, blocksCreateStream),
    takeEvery(actions.BLOCKS_CAT.REQUEST, blocksCat),
    takeEvery(actions.DAG_PUT.REQUEST, dagPut),
    takeEvery(actions.DAG_GET.REQUEST, dagGet),
    takeEvery(actions.DAG_TREE.REQUEST, dagTree),
    takeEvery(actions.OBJECT_NEW.REQUEST, objectNew),
    takeEvery(actions.OBJECT_PUT.REQUEST, objectPut),
    takeEvery(actions.OBJECT_GET.REQUEST, objectGet),
    takeEvery(actions.OBJECT_DATA.REQUEST, objectData),
    takeEvery(actions.OBJECT_LINKS.REQUEST, objectLinks),
    takeEvery(actions.OBJECT_STAT.REQUEST, objectStat),
  ];
}