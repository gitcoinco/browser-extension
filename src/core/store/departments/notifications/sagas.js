/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
/* ------------------------- Internal Dependencies -------------------------- */
/*---*--- Redux Actions ---*---*/ 
import { NOTIFICATION_OPEN} from './actions'

/*---*--- Components ---*---*/ 
import {NotificationToast} from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */

/* ------------------------------ Saga Stories ------------------------------ */

/*--- Login With Phone ---*/
function* notificationOpen({payload, metadata}) {
  toast(<NotificationToast title={payload.title} message={payload.message}/> )
  switch (payload.category) {
    case 'info':
      break;
  
    default:
      break;
  }
}

/* ------------------------------ Export Sagas ------------------------------ */
export default function* rootSaga() {
  yield [
    takeEvery(NOTIFICATION_OPEN, notificationOpen),
  ];
}