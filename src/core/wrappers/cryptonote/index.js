/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
// Developer Docs: https://github.com/ballercat/wasm-loader
/**
 * The WASM Loader was disabled, because it was causing issues.
 * For now we're doing a simple fetch to the static asset, instead
 * of loading the ArrayBuffer in Javascript.
 */

import harvest from 'assembly/cryptonote/cryptonote.wasm'
import factorial from 'assembly/cryptonote/factorial.wasm'


function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    window.WebAssembly.instantiate(bytes, importObject)
  ).then(results =>
    results.instance
  );
}


let importObject = {}
fetchAndInstantiate(harvest, importObject).then(function(instance) {
  // Store the WebAssembly functions in "t"
  const t = instance.exports
})

fetchAndInstantiate(factorial, importObject).then(function(instance) {
  // Store the WebAssembly functions in "t"
  const t = instance.exports
  const factorial = instance.exports._Z4facti;
})
/* ------------------------------- Component -------------------------------- */
export default props => (
  <div>

  </div>
)


