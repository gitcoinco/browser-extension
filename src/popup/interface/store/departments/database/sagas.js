/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'services/Firebase';
import {
  DATABASE_WRITE_REQUEST,
  DATABASE_READ_REQUEST,
  DATABASE_CREATE_REQUEST,
  DATABASE_UPDATE_REQUEST,
  DATABASE_PATCH_REQUEST,
  DATABASE_DELETE_REQUEST,
  DATABASE_CHANNEL_REQUEST,
  DATABASE_SYNC_REQUEST,
} from './actions'
import {
  databaseWriteSuccess,
  databaseWriteFailure,
  databaseReadSuccess,
  databaseReadFailure,
  databaseCreateSuccess,
  databaseCreateFailure,
  databaseUpdateSuccess,
  databaseUpdateFailure,
  databasePatchSuccess,
  databasePatchFailure,
  databaseDeleteSuccess,
  databaseDeleteFailure,
  databaseChannelSuccess,
  databaseChannelFailure,
  databaseSyncSuccess,
  databaseSyncFailure,
} from './actions'

/*---*--- Write ---*---*/
function*  dbWrite({payload, metadata}) {
  try {
    /*--- Switch the database write types to either create, update or patch data  ---*/
    let request = {}
    const { branch, writeType } = metadata
    switch(writeType) {
      case 'create':
        request = yield call(reduxSagaFirebase.database.create, `/${branch.join("/")}`, payload);
        break;
      case 'update':
        request = yield call(reduxSagaFirebase.database.update, `/${branch.join("/")}`, payload);
        break;
      case 'patch':
        request = yield call(reduxSagaFirebase.database.patch, `/${branch.join("/")}`, payload);
        break;
    default:
      throw new Error('Database::writeType | The writeType param is NOT defined.')
    }
    
    yield put(databaseWriteSuccess({payload: request, metadata}))
  } catch(e) {
    yield put(databaseWriteFailure({payload: e, metadata}))
  }
}


/*---*--- Read ---*---*/
function*  dbRead({payload, metadata}) {
  try {
    const { branch } = metadata
    const request = yield call(reduxSagaFirebase.database.read, `/${branch.join("/")}`);
    yield put(databaseReadSuccess({payload: request, metadata}))
  } catch(e) {
    yield put(databaseReadFailure({payload: e, metadata}))
  }
}


/*---*--- Create ---*---*/
function*  dbCreate({payload, metadata}) {
  try {

    yield put(databaseCreateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(databaseCreateFailure({payload: e, metadata}))
  }
}


/*---*--- Update ---*---*/
function*  dbUpdate({payload, metadata}) {
  try {

    yield put(databaseUpdateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(databaseUpdateFailure({payload: e, metadata}))
  }
}


/*---*--- Patch ---*---*/
function*  dbPatch({payload, metadata}) {
  try {

    yield put(databasePatchSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(databasePatchFailure({payload: e, metadata}))
  }
}


/*---*--- Delete ---*---*/
function*  dbDelete({payload, metadata}) {
  try {

    yield put(databaseDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(databaseDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Channel ---*---*/
function*  dbChannel({payload, metadata}) {
  try {

    yield put(databaseChannelSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(databaseChannelFailure({payload: e, metadata}))
  }
}


/*---*--- Sync ---*---*/
function*  dbSync({payload, metadata}) {
  try {

    yield put(databaseSyncSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(databaseSyncFailure({payload: e, metadata}))
  }
}

export default function*  dbrxdbRootSaga() {
  yield [
   takeEvery(DATABASE_WRITE_REQUEST, dbWrite),
   takeEvery(DATABASE_READ_REQUEST, dbRead),
   takeEvery(DATABASE_CREATE_REQUEST, dbCreate),
   takeEvery(DATABASE_UPDATE_REQUEST, dbUpdate),
   takeEvery(DATABASE_PATCH_REQUEST, dbPatch),
   takeEvery(DATABASE_CHANNEL_REQUEST, dbChannel),
   takeEvery(DATABASE_SYNC_REQUEST, dbSync),
  ];
}