/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import uPortConnection from 'logic/services/uPort';
import {
  notificationOpen
} from 'store/departments/actions'
import {
  UPORT_GET_WEB3_REQUEST,
  UPORT_GET_PROVIDER_REQUEST,
  UPORT_GET_CREDENTIALS_REQUEST,
  UPORT_GET_ADDRESS_REQUEST,
  UPORT_GET_ATTEST_CREDENTIALS_REQUEST,
  UPORT_INIT_CONTRACT_REQUEST,
  UPORT_SEND_TRANSACTION_REQUEST,
  UPORT_ADD_APP_PARAMETERS_REQUEST,
} from './actions'
import {
  uPortGetWeb3Success,
  uPortGetWeb3Failure,
  uPortGetProviderSuccess,
  uPortGetProviderFailure,
  uPortGetCredentialsSuccess,
  uPortGetCredentialsFailure,
  uPortGetAddressSuccess,
  uPortGetAddressFailure,
  uPortGetAttestCredentialsSuccess,
  uPortGetAttestCredentialsFailure,
  uPortInitContractSuccess,
  uPortInitContractFailure,
  uPortSendTransactionSuccess,
  uPortSendTransactionFailure,
  uPortAddAppParametersSuccess,
  uPortAddAppParametersFailure,
} from './actions'

/*---*--- Get Web3 ---*---*/
function* getWeb3({payload, metadata}) {
  try {

    yield put(uPortGetWeb3Success({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetWeb3Failure({payload: e, metadata}))
  }
}


/*---*--- Get Provider ---*---*/
function* getProvider({payload, metadata}) {
  try {

    yield put(uPortGetProviderSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetProviderFailure({payload: e, metadata}))
  }
}


/*---*--- Get Credentials ---*---*/
function* getCredentials({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Requesting: Identity'}}))
    const requestedCredentials = payload
    const credentials = yield uPortConnection.requestCredentials(requestedCredentials)
    yield put(uPortGetCredentialsSuccess({
      payload: credentials, 
      metadata
    }))
    yield put(notificationOpen({payload:{
      title: 'Returned: Identity Request',
      message: `Welcome ${credentials.name} to Eidenai`
    }}))
  } catch(e) {
    console.log(e)
    yield put(uPortGetCredentialsFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{
      title: 'Failure: Identity Request ',
      message: e,
    }}))
  }
}


/*---*--- Get Address ---*---*/
function* getAddress({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Requesting: Address '}}))
    const { uriHandler } = payload
    const address = yield uPortConnection.requestAddress(uriHandler)
    yield put(uPortGetAddressSuccess({
      payload: address, 
      metadata
    }))
    yield put(notificationOpen({payload:{title: 'Returned: Addess Request '}}))
  } catch(e) {
    yield put(uPortGetAddressFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Failure: Addess Request '}}))
  }
}


/*---*--- Get Attest Credentials ---*---*/
function* getAttestCredentials({payload, metadata}) {
  try {
    
    const { credentials, uriHandler } = payload
    const address = yield uPortConnection.attestCredentials(credentials, uriHandler)

    yield put(uPortGetAttestCredentialsSuccess({
      payload: credentials.claim, 
      metadata
    }))
    yield put(notificationOpen({payload:{title: 'Confirmed: Application received Attest Request '}}))
  } catch(e) {
    yield put(uPortGetAttestCredentialsFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{
      title: 'Failure: Attest Request ',
      message: e,
    }}))
  }
}


/*---*--- Init Contract ---*---*/
function* initContract({payload, metadata}) {
  try {
    const { abi } = payload
    const { delta } = metadata
    const uPortContractObject = yield uPortConnection.contract(abi)
    window.uport.contracts[delta] = uPortContractObject
    yield put(uPortInitContractSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortInitContractFailure({payload: e, metadata}))
  }
}


/*---*--- Send Transaction ---*---*/
function* sendTransaction({payload, metadata}) {
  try {
    const { transaction } = payload
    const transactionId = yield uPortConnection.requestAddress(transaction)
    yield put(uPortSendTransactionSuccess({
      payload: transactionId, 
      metadata
    }))
  } catch(e) {
    yield put(uPortSendTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Add App Parameters ---*---*/
function* addAppParameters({payload, metadata}) {
  try {

    yield put(uPortAddAppParametersSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortAddAppParametersFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(UPORT_GET_WEB3_REQUEST, getWeb3),
   takeEvery(UPORT_GET_PROVIDER_REQUEST, getProvider),
   takeEvery(UPORT_GET_CREDENTIALS_REQUEST, getCredentials),
   takeEvery(UPORT_GET_ADDRESS_REQUEST, getAddress),
   takeEvery(UPORT_GET_ATTEST_CREDENTIALS_REQUEST, getAttestCredentials),
   takeEvery(UPORT_INIT_CONTRACT_REQUEST, initContract),
   takeEvery(UPORT_SEND_TRANSACTION_REQUEST, sendTransaction),
   takeEvery(UPORT_ADD_APP_PARAMETERS_REQUEST, addAppParameters),
  ];
}