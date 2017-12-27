/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Button} from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const LoginButton = ({ ...props }) => <Button onClick={props.authLogin} {...props} >{props.children}</Button>

LoginButton.defaultProps = {
  f: [0],
  fw: [300],
  py: [5, 7],
  px: [8, 10],
}

/* ---------------------------- Export Package ------------------------------ */
export default LoginButton