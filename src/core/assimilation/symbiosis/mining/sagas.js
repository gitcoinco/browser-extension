/* ------------------------- External Dependencies -------------------------- */
import { call, put, fork, takeEvery, take } from 'redux-saga/effects';
import { actionExists, branchAcceptable, entityCorrect, identifictionInjection, typeCorrect } from 'logic/forms/QueryValidation'
import scriptly from 'scriptly'
/* ------------------------- Internal Dependencies -------------------------- */
import {NOTIFICATION_OPEN} from 'assimilation/symbiosis/actions'
/*--- Redux Actions ---*/ 
import {
  MINING_THREAD_COUNT_GET_REQUEST,
  MINING_THREAD_COUNT_GET_SUCCESS,
  MINING_THREAD_COUNT_GET_FAILURE,

  MINING_THREAD_COUNT_SET_REQUEST,
  MINING_THREAD_COUNT_SET_SUCCESS,
  MINING_THREAD_COUNT_SET_FAILURE,

  MINING_THREAD_AUTO_GET_REQUEST,
  MINING_THREAD_AUTO_GET_SUCCESS,
  MINING_THREAD_AUTO_GET_FAILURE,

  MINING_THREAD_AUTO_SET_REQUEST,
  MINING_THREAD_AUTO_SET_SUCCESS,
  MINING_THREAD_AUTO_SET_FAILURE,

  MINING_HASH_TOTAL_REQUEST,
  MINING_HASH_TOTAL_SUCCESS,
  MINING_HASH_TOTAL_FAILURE,
  MINING_HASH_AVERAGE_REQUEST,
  MINING_HASH_AVERAGE_SUCCESS,
  MINING_HASH_AVERAGE_FAILURE,
  MINING_HASH_ACCEPTED_REQUEST,
  MINING_HASH_ACCEPTED_SUCCESS,
  MINING_HASH_ACCEPTED_FAILURE,

  MINING_THROTTLE_GET_REQUEST,
  MINING_THROTTLE_GET_SUCCESS,
  MINING_THROTTLE_GET_FAILURE,
  MINING_THROTTLE_SET_REQUEST,
  MINING_THROTTLE_SET_SUCCESS,
  MINING_THROTTLE_SET_FAILURE,

  MINING_INITIALIZE_REQUEST,
  MINING_INITIALIZE_SUCCESS,
  MINING_INITIALIZE_FAILURE,
  MINING_START_REQUEST,
  MINING_START_SUCCESS,
  MINING_START_FAILURE,
  MINING_STOP_REQUEST,
  MINING_STOP_SUCCESS,
  MINING_STOP_FAILURE,
  MINING_TOKEN_REQUEST,
  MINING_TOKEN_SUCCESS,
  MINING_TOKEN_FAILURE,
  MINING_RUNNING_REQUEST,
  MINING_RUNNING_SUCCESS,
  MINING_RUNNING_FAILURE,
  MINING_WASP_SUPPORTREQUEST,
  MINING_WASP_SUPPORT_SUCCESS,
  MINING_WASP_SUPPORT_FAILURE,
  MINING_EVENT_LISTENER_SET_REQUEST,
  MINING_EVENT_LISTENER_SET_SUCCESS,
  MINING_EVENT_LISTENER_SET_FAILURE,
  
} from './actions'

/*---*---               ---*---*
              Hash
*---*---               ---*---*/

/*--- miningThrottleGet=>window.miner.getNumThreads ---*---*/
function* miningHashTotal({}) {
  try {
    const payload = yield window.miner.getTotalHashes()
    yield put({type: MINING_HASH_TOTAL_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_HASH_TOTAL_FAILURE})
  }
}
/*--- miningThrottleGet=>window.miner.getNumThreads ---*---*/
function* miningHashAverage({}) {
  try {
    const payload = yield window.miner.getHashesPerSecond()
    yield put({type: MINING_HASH_AVERAGE_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_HASH_AVERAGE_FAILURE})
  }
}
/*--- miningThrottleGet=>window.miner.getNumThreads ---*---*/
function* miningHashAccepted({}) {
  try {
    const payload = yield window.miner.getAcceptedHashes()
    yield put({type: MINING_HASH_ACCEPTED_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_HASH_ACCEPTED_FAILURE})
  }
}

/*---*---               ---*---*
             Thread
*---*---               ---*---*/

/*--- miningThreadCountGet => window.miner.setNumThreads ---*---*/
function* miningThreadCountGet() {
  try {
    const payload = yield window.miner.getNumThreads()
    yield put({type: MINING_THREAD_COUNT_GET_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_THREAD_COUNT_GET_FAILURE})
  }
}

/*--- miningThreadCountSet => window.miner.setNumThreads ---*---*/
function* miningThreadCountSet({threadCount}) {
  try {
    const payload = yield window.miner.setNumThreads(threadCount)
    yield put({type: MINING_THREAD_COUNT_SET_SUCCESS, payload: threadCount})
  } catch(e) {
    yield put({type: MINING_THREAD_COUNT_SET_FAILURE})
  }
}

/*--- miningThreadCountAutoSet => window.miner.setAutoThreadsEnabled ---*---*/
function* miningThreadCountAutoSet({autoThread}) {
  try {
    const payload = yield window.miner.setAutoThreadsEnabled(autoThread)
    yield put({type: MINING_THREAD_AUTO_SET_SUCCESS})
  } catch(e) {
    yield put({type: MINING_THREAD_AUTO_SET_FAILURE})
  }
}
/*--- miningThreadCountAutoGet => window.miner.setAutoThreadsEnabled ---*---*/
function* miningThreadCountAutoGet() {
  try {
    const payload = yield window.miner.getAutoThreadsEnabled()
    yield put({type: MINING_THREAD_AUTO_GET_SUCCESS})
  } catch(e) {
    yield put({type: MINING_THREAD_AUTO_GET_FAILURE})
  }
}

/*---*---               ---*---*
            Throttle
*---*---               ---*---*/

/*--- miningThrottleGet=>window.miner.getNumThreads ---*---*/
function* miningThrottleGet({}) {
  try {
    const payload = yield window.miner.getNumThreads()
    yield put({type: MINING_THROTTLE_GET_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_THROTTLE_GET_FAILURE})
  }
}

/*--- miningThrottleGet=>window.miner.setNumThreads ---*---*/
function* miningThrottleSet({threads}) {
  try {
    const payload = yield window.miner.setNumThreads(threads)
    yield put({type: MINING_THROTTLE_GET_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_THROTTLE_GET_FAILURE})
  }
}


/*---*---               ---*---*
             Utility
*---*---               ---*---*/

/*---*--- Mining Start ---*---*/
function* miningStart({}) {
  try {
    yield window.miner.start()
    yield put({type: MINING_START_SUCCESS})
    yield put({type: MINING_RUNNING_REQUEST})
    yield put({
      type: NOTIFICATION_OPEN, 
      payload:{
        title: `Mining Succesfully Started`, 
        message: 'You have begun mining for Cryptocurrency directly from the Browser.'
      },
      metadata: {
        category: 'success'
      } 
    })
  } catch(e) {
    yield put({type: MINING_START_FAILURE})
  }
}

/*---*--- Mining Stop ---*---*/
function* miningStop({}) {
  try {
    yield window.miner.stop()
    yield put({type: MINING_STOP_SUCCESS})
    yield put({
      type: NOTIFICATION_OPEN, 
      payload:{
        title: `Mining Cryptocurrency Stopped`, 
        message: 'You stopped mining for cryptocurrency.'
      },
      metadata: {
        category: 'success'
      } 
    })
  } catch(e) {
    yield put({type: MINING_STOP_FAILURE})
  }
}

/*---*--- Mining Running ---*---*/
function* miningRunning({}) {
  try {
    const payload = yield window.miner.isRunning
    yield put({type: MINING_RUNNING_SUCCESS, payload})
  } catch(e) {
    yield put({type: MINING_RUNNING_FAILURE})
  }
}

/*---*---               ---*---*
        Mining Initialize
*---*---               ---*---*/
function* miningInitialize(props) {
  try {
    const mine = yield call(miningLoad, props.payload.userID)

    yield put({type: MINING_INITIALIZE_SUCCESS})
    yield put({
      type: NOTIFICATION_OPEN, 
      payload:{
        title: `Mining Initialized`, 
        message: 'Cryptocurrency Mining has been initialized. If you are logged in total hashing overtime will also be calculated.'
      },
      metadata: {
        category: 'success'
      } 
    })
  } catch(e) {
    yield put({type: MINING_INITIALIZE_FAILURE })
  }
}



/*---*--- Mining Load ---*---*/
function* miningLoad(userID) { 
  return new Promise((resolve, reject)=>{
      scriptly.loadJavascript('https://coin-hive.com/lib/coinhive.min.js')
      .then(()=> {
        const miningKey = process.env.REACT_APP_MINING
        if (userID) {
          window.miner = new window.CoinHive.User(miningKey, userID);
        } else {
          window.miner = new window.CoinHive.Anonymous(miningKey);
        }
      })
  })
}
/*---*--- Mining Load ---*---*/
function* miningMiner(userID) { 
  return new Promise((resolve, reject)=>{
      const miningKey = process.env.REACT_APP_MINING
      if(userID) {
        window.miner =  new window.CoinHive.User(miningKey, userID);
      } else {
        window.miner =  new window.CoinHive.Anonymous(miningKey);
      }
      resolve(window.miner)
  })
}


/* ------------------------------ Export Sagas ------------------------------ */
export default function* miningRootSaga() {
  yield [
    // Thread
    takeEvery(MINING_THREAD_COUNT_GET_REQUEST, miningThreadCountGet),
    takeEvery(MINING_THREAD_COUNT_SET_REQUEST, miningThreadCountSet),

    takeEvery(MINING_THREAD_AUTO_GET_REQUEST, miningThreadCountAutoGet),
    takeEvery(MINING_THREAD_AUTO_SET_REQUEST, miningThreadCountAutoSet),

    // Throttle
    takeEvery(MINING_THROTTLE_SET_REQUEST, miningThrottleSet),
    takeEvery(MINING_THROTTLE_GET_REQUEST, miningThrottleGet),

    // Hashing
    takeEvery(MINING_HASH_TOTAL_REQUEST, miningHashTotal),
    takeEvery(MINING_HASH_AVERAGE_REQUEST, miningHashAverage),
    takeEvery(MINING_HASH_ACCEPTED_REQUEST, miningHashAccepted),

    // Utility
    takeEvery(MINING_INITIALIZE_REQUEST, miningInitialize),
    takeEvery(MINING_RUNNING_REQUEST, miningRunning),
    takeEvery(MINING_START_REQUEST, miningStart),
    takeEvery(MINING_STOP_REQUEST, miningStop),
  ];
}