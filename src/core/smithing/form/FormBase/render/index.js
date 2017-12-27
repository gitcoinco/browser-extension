import React from 'react'
import { Box } from 'atomic'
const FormBase = props =><Box is="form"
{...props.styledWrapper} {...props} >{props.children}</Box>
export default FormBase