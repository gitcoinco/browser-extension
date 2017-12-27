/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => !props.image 
? null 
: typeof props.image === 'object'
  ? props.image
  : <BackgroundImage image={props.image} {...props.styled} />
