import {
  STORJ_KEY_PAIR_GENERATE_REQUEST,
  STORJ_KEY_PAIR_PUBLIC_REQUEST,
  STORJ_KEY_PAIR_PRIVATE_REQUEST,
  STORJ_KEY_PAIR_SIGN_REQUEST,
  STORJ_KEY_PAIR_GET_NODE_ID_REQUEST,
  STORJ_KEY_PAIR_GET_ADDRESS_REQUEST,
  STORJ_KEY_GENERATE_REQUEST,
  STORJ_KEY_REGISTER_REQUEST,
  STORJ_KEY_REMOVE_REQUEST,
  STORJ_KEYS_LIST_REQUEST,
  STORJ_ENCRYPTION_KEY_GENERATE_REQUEST,
  STORJ_FILE_GET_REQUEST,
  STORJ_FILE_CREATE_REQUEST,
  STORJ_FILE_DELETE_REQUEST,
  STORJ_FILES_LIST_REQUEST,
  STORJ_BUCKET_GET_REQUEST,
  STORJ_BUCKET_CREATE_REQUEST,
  STORJ_BUCKET_DELETE_REQUEST,
  STORJ_BUCKET_MAKE_PUBLIC_REQUEST,
  STORJ_BUCKETS_LIST_REQUEST,
} from './actions'
import {
  storjKeyPairGenerateSuccess,
  storjKeyPairGenerateFailure,
  storjKeyPairPublicSuccess,
  storjKeyPairPublicFailure,
  storjKeyPairPrivateSuccess,
  storjKeyPairPrivateFailure,
  storjKeyPairSignSuccess,
  storjKeyPairSignFailure,
  storjKeyPairGetNodeIdSuccess,
  storjKeyPairGetNodeIdFailure,
  storjKeyPairGetAddressSuccess,
  storjKeyPairGetAddressFailure,
  storjKeyGenerateSuccess,
  storjKeyGenerateFailure,
  storjKeyRegisterSuccess,
  storjKeyRegisterFailure,
  storjKeyRemoveSuccess,
  storjKeyRemoveFailure,
  storjKeysListSuccess,
  storjKeysListFailure,
  storjEncryptionKeyGenerateSuccess,
  storjEncryptionKeyGenerateFailure,
  storjFileGetSuccess,
  storjFileGetFailure,
  storjFileCreateSuccess,
  storjFileCreateFailure,
  storjFileDeleteSuccess,
  storjFileDeleteFailure,
  storjFilesListSuccess,
  storjFilesListFailure,
  storjBucketGetSuccess,
  storjBucketGetFailure,
  storjBucketCreateSuccess,
  storjBucketCreateFailure,
  storjBucketDeleteSuccess,
  storjBucketDeleteFailure,
  storjBucketMakePublicSuccess,
  storjBucketMakePublicFailure,
  storjBucketsListSuccess,
  storjBucketsListFailure,
} from './actions'

import {
  notificationOpen
} from 'store/departments/actions'

/*---*--- Key Pair Generate ---*---*/
function* keyPairGenerate({payload, metadata}) {
  try {

    yield put(storjKeyPairGenerateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyPairGenerateFailure({payload: e, metadata}))
  }
}


/*---*--- Key Pair Public ---*---*/
function* keyPairPublic({payload, metadata}) {
  try {

    yield put(storjKeyPairPublicSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyPairPublicFailure({payload: e, metadata}))
  }
}


/*---*--- Key Pair Private ---*---*/
function* keyPairPrivate({payload, metadata}) {
  try {

    yield put(storjKeyPairPrivateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyPairPrivateFailure({payload: e, metadata}))
  }
}


/*---*--- Key Pair Sign ---*---*/
function* keyPairSign({payload, metadata}) {
  try {

    yield put(storjKeyPairSignSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyPairSignFailure({payload: e, metadata}))
  }
}


/*---*--- Key Pair Get Node Id ---*---*/
function* keyPairGetNodeId({payload, metadata}) {
  try {

    yield put(storjKeyPairGetNodeIdSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyPairGetNodeIdFailure({payload: e, metadata}))
  }
}


/*---*--- Key Pair Get Address ---*---*/
function* keyPairGetAddress({payload, metadata}) {
  try {

    yield put(storjKeyPairGetAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyPairGetAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Key Generate ---*---*/
function* keyGenerate({payload, metadata}) {
  try {

    yield put(storjKeyGenerateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyGenerateFailure({payload: e, metadata}))
  }
}


/*---*--- Key Register ---*---*/
function* keyRegister({payload, metadata}) {
  try {

    yield put(storjKeyRegisterSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyRegisterFailure({payload: e, metadata}))
  }
}


/*---*--- Key Remove ---*---*/
function* keyRemove({payload, metadata}) {
  try {

    yield put(storjKeyRemoveSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeyRemoveFailure({payload: e, metadata}))
  }
}


/*---*--- Keys List ---*---*/
function* keysList({payload, metadata}) {
  try {

    yield put(storjKeysListSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjKeysListFailure({payload: e, metadata}))
  }
}


/*---*--- Encryption Key Generate ---*---*/
function* encryptionKeyGenerate({payload, metadata}) {
  try {

    yield put(storjEncryptionKeyGenerateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjEncryptionKeyGenerateFailure({payload: e, metadata}))
  }
}


/*---*--- File Get ---*---*/
function* fileGet({payload, metadata}) {
  try {

    yield put(storjFileGetSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjFileGetFailure({payload: e, metadata}))
  }
}


/*---*--- File Create ---*---*/
function* fileCreate({payload, metadata}) {
  try {

    yield put(storjFileCreateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjFileCreateFailure({payload: e, metadata}))
  }
}


/*---*--- File Delete ---*---*/
function* fileDelete({payload, metadata}) {
  try {

    yield put(storjFileDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjFileDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Files List ---*---*/
function* filesList({payload, metadata}) {
  try {

    yield put(storjFilesListSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjFilesListFailure({payload: e, metadata}))
  }
}


/*---*--- Bucket Get ---*---*/
function* bucketGet({payload, metadata}) {
  try {

    yield put(storjBucketGetSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjBucketGetFailure({payload: e, metadata}))
  }
}


/*---*--- Bucket Create ---*---*/
function* bucketCreate({payload, metadata}) {
  try {

    yield put(storjBucketCreateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjBucketCreateFailure({payload: e, metadata}))
  }
}


/*---*--- Bucket Delete ---*---*/
function* bucketDelete({payload, metadata}) {
  try {

    yield put(storjBucketDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjBucketDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Bucket Make Public ---*---*/
function* bucketMakePublic({payload, metadata}) {
  try {

    yield put(storjBucketMakePublicSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjBucketMakePublicFailure({payload: e, metadata}))
  }
}


/*---*--- Buckets List ---*---*/
function* bucketsList({payload, metadata}) {
  try {

    yield put(storjBucketsListSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(storjBucketsListFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(STORJ_KEY_PAIR_GENERATE_REQUEST, keyPairGenerate),
   takeEvery(STORJ_KEY_PAIR_PUBLIC_REQUEST, keyPairPublic),
   takeEvery(STORJ_KEY_PAIR_PRIVATE_REQUEST, keyPairPrivate),
   takeEvery(STORJ_KEY_PAIR_SIGN_REQUEST, keyPairSign),
   takeEvery(STORJ_KEY_PAIR_GET_NODE_ID_REQUEST, keyPairGetNodeId),
   takeEvery(STORJ_KEY_PAIR_GET_ADDRESS_REQUEST, keyPairGetAddress),
   takeEvery(STORJ_KEY_GENERATE_REQUEST, keyGenerate),
   takeEvery(STORJ_KEY_REGISTER_REQUEST, keyRegister),
   takeEvery(STORJ_KEY_REMOVE_REQUEST, keyRemove),
   takeEvery(STORJ_KEYS_LIST_REQUEST, keysList),
   takeEvery(STORJ_ENCRYPTION_KEY_GENERATE_REQUEST, encryptionKeyGenerate),
   takeEvery(STORJ_FILE_GET_REQUEST, fileGet),
   takeEvery(STORJ_FILE_CREATE_REQUEST, fileCreate),
   takeEvery(STORJ_FILE_DELETE_REQUEST, fileDelete),
   takeEvery(STORJ_FILES_LIST_REQUEST, filesList),
   takeEvery(STORJ_BUCKET_GET_REQUEST, bucketGet),
   takeEvery(STORJ_BUCKET_CREATE_REQUEST, bucketCreate),
   takeEvery(STORJ_BUCKET_DELETE_REQUEST, bucketDelete),
   takeEvery(STORJ_BUCKET_MAKE_PUBLIC_REQUEST, bucketMakePublic),
   takeEvery(STORJ_BUCKETS_LIST_REQUEST, bucketsList),
  ];
}