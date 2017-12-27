/* ------------------------- External Dependencies -------------------------- */
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import reducerAssimilation from 'assimilation/symbiosis/reducer'
const reducers = {
  ...reducerAssimilation,
  routing,
  form,
}

/*-* Index Child Folders *-*/
const req = require.context('.', true, /\.\/.+\/reducer\.js$/)
req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key)
})

/*-* Combine All Reducers *-*/
const rootReducer = combineReducers(reducers);
export default rootReducer;


