/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'logic/services/Firebase';
import {
  STORAGE_UPLOAD_FILE_REQUEST,
  STORAGE_DOWNLOAD_URL_REQUEST,
  STORAGE_DELETE_FILE_REQUEST,
} from './actions'
import {
  storageUploadFileSuccess,
  storageUploadFileFailure,
  storageDownloadUrlSuccess,
  storageDownloadUrlFailure,
  storageDeleteFileSuccess,
  storageDeleteFileFailure,
} from './actions'

import {
  notificationOpen
} from 'store/departments/actions'


/*---*--- Upload File ---*---*/
function* uploadFile({payload, metadata}) {
  try {
    const file = payload,
    { location, fileMetadata } = metadata
    const fileID = yield call(reduxSagaFirebase.storage.uploadFile, `${location}/${file.name}`, file);
    yield put(storageUploadFileSuccess({payload: {fileID} , metadata}))
    yield put(notificationOpen({payload:{title: 'Storage Upload Success'}}))
  } catch(e) {
    console.log(e)
    yield put(storageUploadFileFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Storage Upload Failure'}}))
  }
}


/*---*--- Download Url ---*---*/
function* downloadUrl({payload, metadata}) {
  try {

    yield put(storageDownloadUrlSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storageDownloadUrlFailure({payload: e, metadata}))
  }
}


/*---*--- Delete File ---*---*/
function* deleteFile({payload, metadata}) {
  try {

    yield put(storageDeleteFileSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storageDeleteFileFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(STORAGE_UPLOAD_FILE_REQUEST, uploadFile),
   takeEvery(STORAGE_DOWNLOAD_URL_REQUEST, downloadUrl),
   takeEvery(STORAGE_DELETE_FILE_REQUEST, deleteFile),
  ];
}