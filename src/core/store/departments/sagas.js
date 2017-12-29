import { all } from 'redux-saga/effects';

import apollo from './apollo/sagas'
import authentication from './authentication/sagas'
import database from './database/sagas'
import entity from './entity/sagas'
import firestore from './firestore/sagas'
import mapbox from './mapbox/sagas'
import notifications from './notifications/sagas'


import symbiosis from 'assimilation/symbiosis/sagas'

export default function* rootSaga() {
  yield all([
    authentication(),
    apollo(),
    database(),
    entity(),
    firestore(),
    mapbox(),
    notifications(),
    storage(),
    stripe(),
    ...symbiosis
  ]);
}