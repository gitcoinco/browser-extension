/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Box, Image } from 'atomic'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data.src ? null : <Image src={props.data.src} />
