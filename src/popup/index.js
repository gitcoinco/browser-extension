/* ------------------------- External Dependencies -------------------------- */
import $ from 'jquery'
import React from 'react';
import ReactDOM from 'react-dom';

/* ------------------------- Internal Dependencies -------------------------- */
import Root from './interface';
import { configureStore, history } from './interface/store/configuration';

const store = configureStore();

window.onload = ()=> {
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} history={history} />, root);
}
