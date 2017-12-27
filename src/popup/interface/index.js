/* --------------------------- Interface Globals ---------------------------- */

/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import Providers from './components/providers'
// import Entry from './layout/entry'

/* ---------------------------- Initialization ------------------------------ */
export default ({ store, history }) => {
  return (
    <Providers store={store} history={history} >
      <div>
        Hello World
      </div>
    </Providers>
  );
}
