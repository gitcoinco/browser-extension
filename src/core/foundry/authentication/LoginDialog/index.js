/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Paragraph from 'atoms/Paragraph'
import AuthorizationPhone from 'containers/authentication/AuthorizationPhone'
import AuthorizationLogin from 'containers/authentication/AuthorizationLogin'
/* ------------------------------- Component -------------------------------- */
export default props => 
<div>
  <AuthorizationLogin bg='google' children='Google' providerSelection='google' />
  <AuthorizationLogin bg='facebook' children='Facebook' providerSelection='facebook' />
  <AuthorizationLogin bg='twitter' children='Twitter' providerSelection='twitter' />
  <AuthorizationLogin bg='github' children='GitHub' providerSelection='github' />
  <AuthorizationPhone bg='github' children='GitHub' providerSelection='github'>
    Phone Login
  </AuthorizationPhone>
  <div id="recaptcha-container"></div>
</div>