import React from 'react'
import Display from './Display'
import Form from './Form'
export default props => props.readOnly ? <Display {...props} /> : <Form {...props} />