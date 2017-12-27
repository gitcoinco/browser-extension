/* ------------------------- External Dependencies -------------------------- */
import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
/* ------------------------- Internal Dependencies -------------------------- */
import { FIREBASE_CONFIG } from 'settings/Firebase';
require("firebase/firestore");
/* ------------------------ Initialize Dependencies ------------------------- */
export const fireApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = fireApp.auth();
export const firebaseDatabase = fireApp.database();
export const firebaseStorage = fireApp.storage();
export const firebaseStore = firebase.firestore()

/* Redux Saga */
const firebaseAppRedux = new ReduxSagaFirebase(fireApp)
export default firebaseAppRedux

