import { all } from 'redux-saga/effects';
import symbiosis from 'assimilation/symbiosis/sagas'
export default function* rootSaga() {
  yield all([
    ...symbiosis,
  ]);
}