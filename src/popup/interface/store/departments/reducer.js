// @flow
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form'

const reducers = {
  routing,
  form,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key)
})

const rootReducer = combineReducers(reducers);

export default rootReducer;


